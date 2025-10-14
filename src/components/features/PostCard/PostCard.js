import { Button, Card } from 'react-bootstrap';

const PostCard = (props) => {
  return (
    <Card border='info'>
      <Card.Body>
        <Card.Title className='mb-4'>{props.title}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          <span className='fw-bold'>Author:</span> {props.author}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>
          <span className='fw-bold'>Published:</span> {props.publishedDate}
        </Card.Subtitle>
        <Card.Text>{props.shortDescription}</Card.Text>
        <Button variant='primary'>Read more</Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;