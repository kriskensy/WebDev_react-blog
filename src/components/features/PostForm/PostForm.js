import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Editor from "../Editor/Editor";
import { Quill } from "react-quill";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";

const Delta = Quill.import('delta');

const PostForm = ({ action, actionText, ...props }) => {

  const [ title, setTitle] = useState(props.title || '');
  const [ author, setAuthor ] = useState(props.author || '');
  const [ publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [ shortDescription, setShortDescription ] = useState(props.shortDescription || '');
  const [ content, setContent ] = useState(props.content || '');
  const quillRef = useRef();

  const handleTextChange = (delta, oldDelta, source) => {
    if (quillRef.current) {
      setContent(quillRef.current.root.innerHTML);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  return (
    <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            placeholder="Enter title"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}>
          </Form.Control>
          {errors.title && <small className="d-block form-text text-danger mt-2">This is too short (min 3 characters).</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            placeholder="Enter author"
            type="text"
            value={author}
            onChange={e => setAuthor(e.target.value)}>
          </Form.Control>
          {errors.author && <small className="d-block form-text text-danger mt-2">This is too short (min 3 characters)</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <DatePicker selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register("shortDescription", { required: true, minLength: 20 })}
            as="textarea" 
            rows={3} 
            placeholder="Leave a comment here" 
            value={shortDescription} onChange={e => setShortDescription(e.target.value)}>
          </Form.Control>
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This is too short (min 20 characters)</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Main Content</Form.Label>
          <Editor ref={quillRef} defaultValue={content ? new Delta(content) : null} onTextChange={handleTextChange} />
        </Form.Group>
        
        <Button variant="primary" type="submit">{actionText}</Button>
      </Form>
  );
}

export default PostForm;