import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Container } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard.js';

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <Container className={styles.cardsContainer}>
      {posts.map(post => (
        <PostCard 
          key={post.id}
          title={post.title}
          author={post.author}
          publishedDate={post.publishedDate}
          shortDescription={post.shortDescription}
        />
      ))}
    </Container>
  );
}

export default Posts;