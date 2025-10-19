import { Button, Modal, ModalHeader } from "react-bootstrap";

const CancelPostModal = (props) => {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <ModalHeader closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </ModalHeader>
      <Modal.Body>
        <p>Are you sure you want to permanently delete this post? This action cannot be undone.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
        <Button variant="danger" onClick={props.handleRemovePostClick}>Remove</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CancelPostModal;