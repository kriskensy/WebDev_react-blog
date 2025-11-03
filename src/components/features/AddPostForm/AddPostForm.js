import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Container } from "react-bootstrap";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (post) => {
    dispatch(addPost(post));
    navigate('/');
  }

  return (
    <Container className="col-md-8 mx-auto">
      <PageTitle>Add a new post</PageTitle>
      <PostForm
        action={handleSubmit}
        actionText="Add post"
      />
    </Container>
  );
}

export default AddPostForm;