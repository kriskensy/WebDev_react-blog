import { Container } from "react-bootstrap";
import PageTitle from "../../common/PageTitle/PageTitle";
import PostForm from "../PostForm/PostForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postsRedux";

const EditPostForm = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (post) => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  }

  if(!postData) return <Navigate to="/"/>
    return (
      <Container className="col-md-8 mx-auto">
        <PageTitle>Edit post</PageTitle>
        <PostForm 
          action={handleSubmit} 
          actionText="Edit post"
          {...postData}
          />
      </Container>
    );
}

export default EditPostForm;