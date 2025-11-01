import { Link, Navigate, useParams } from "react-router-dom";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useState } from "react";
import CancelPostModal from "../../features/CancelPostModal/CancelPostModal";
import { dateToStr } from "../../../utils/dateToStr";

const SinglePost = () => {

  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const dispatch = useDispatch();

  const handleRemovePostClick = () => {
    dispatch(removePost(id));
    handleCloseModal();
  }

  if(!postData) return <Navigate to="/"/>
    return (
      <article className="col-md-8 mx-auto">
        <CancelPostModal 
          show={showModal} 
          onHide={handleCloseModal} 
          handleRemovePostClick={handleRemovePostClick}
        />
        <header className="mb-4">
          <Stack direction="horizontal" gap={2}>
            <PageTitle>{postData.title}</PageTitle>
            <Button as={Link} to={`/post/edit/${postData.id}`} variant="outline-info" className="p-2 ms-auto">Edit</Button>
            <Button onClick={handleShowModal} variant="outline-danger" className="p-2">Delete</Button>
          </Stack>
        </header>
        <section>
          <p>
            <span className='fw-bold'>Author:</span> {postData.author}
          </p>
          <p>
            <span className='fw-bold'>Published:</span> {dateToStr(postData.publishedDate)}
          </p>
        </section>
        <p dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    );
}

export default SinglePost;