import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import Editor from "../Editor/Editor";
import { Quill } from "react-quill";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";

const Delta = Quill.import('delta');

const PostForm = ({ action, actionText, categories = [], ...props }) => {

  const [ publishedDate, setPublishedDate ] = useState(props.publishedDate || '');
  const [ content, setContent ] = useState(props.content || '');
  const quillRef = useRef();
  const [ contentError, setContentError ] = useState(false);
  const [ dateError, setDateError ] = useState(false);
  const [ category, setCategory ] = useState(props.category || '');
  // const categories = useSelector(state => state.categories);

  const handleTextChange = (delta, oldDelta, source) => {
    if (quillRef.current) {
      setContent(quillRef.current.root.innerHTML);
    }
  };

  const handleSubmit = (postData) => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ ...postData, publishedDate, content });
    }
  };

  const { register, handleSubmit: validate, formState: { errors } } = useForm({
    defaultValues: {
      title: props.title || '',
      author: props.author || '',
      shortDescription: props.shortDescription || ''
    }
  });

  return (
    <Form onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            placeholder="Enter title"
            type="text"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This is too short (min 3 characters).</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            {...register("author", { required: true, minLength: 3 })}
            placeholder="Enter author"
            type="text"
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">This is too short (min 3 characters)</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
          />
          {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        </Form.Group>

        <Form.Group className="mb=3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select category...</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>{category.categoryName}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            {...register("shortDescription", { required: true, minLength: 20 })}
            as="textarea" 
            rows={3} 
            placeholder="Leave a comment here"
          />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This is too short (min 20 characters)</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Main Content</Form.Label>
          <Editor
            ref={quillRef}
            defaultValue={content ? new Delta(content) : null}
            onTextChange={handleTextChange}
          />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </Form.Group>
        
        <Button variant="primary" type="submit">{actionText}</Button>
      </Form>
  );
}

export default PostForm;