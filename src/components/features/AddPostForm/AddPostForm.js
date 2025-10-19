import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Container } from "react-bootstrap";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost());
  }

  return (
    <Container className="col-md-8 mx-auto">
      <PageTitle>AddPost</PageTitle>
      <form onSubmit={handleSubmit}>
      
      </form>
    </Container>
  );
}

export default AddPostForm;