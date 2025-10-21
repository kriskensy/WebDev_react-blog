import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const navigateToHome = () => {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({
      title,
      shortDescription,
      content,
      publishedDate,
      author
    }));
    navigateToHome();
  }
//TODO dokonczyc formularz, poprawic przesyłanie danych do reduxa
  return (
    <Container className="col-md-8 mx-auto">
      <PageTitle>Add a new post</PageTitle>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Published</Form.Label>
          <Form.Control placeholder="Enter date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Short description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Main Content</Form.Label>
          <Form.Control as="textarea" rows={8} placeholder="Leave a comment here" value={content} onChange={e => setContent(e.target.value)}></Form.Control>
        </Form.Group>
        
        <Button variant="primary" type="submit">Add post</Button>
      </Form>
    </Container>
  );
}

export default AddPostForm;