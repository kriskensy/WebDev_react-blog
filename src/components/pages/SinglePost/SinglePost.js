import { Link, Navigate, useParams } from "react-router-dom";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Button, ButtonGroup, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  if(!postData) return <Navigate to="/"/>
    return (
      <article className="col-md-8 mx-auto">
        <header className="mb-4">
          <Stack direction="horizontal" gap={2}>
            <PageTitle>{postData.title}</PageTitle>
            <Button as={Link} to={`/post/edit/${postData.id}`} variant="outline-info" className="p-2 ms-auto">Edit</Button>
            <Button as={Link} to="" variant="outline-danger" className="p-2">Delete</Button>
          </Stack>
        </header>
        <section>
          <p>
            <span className='fw-bold'>Author:</span> {postData.author}
          </p>
          <p>
            <span className='fw-bold'>Published:</span> {postData.publishedDate}
          </p>
        </section>
        <p>{postData.content}</p>
      </article>
    );
}

export default SinglePost;