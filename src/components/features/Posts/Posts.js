import styles from './Posts.module.scss';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getCategoryById, getAllCategories } from '../../../redux/categoriesRedux.js';
import { Container } from 'react-bootstrap';
import PostCard from '../PostCard/PostCard.js';
import { dateToStr } from '../../../utils/dateToStr.js';
import { Navigate } from 'react-router-dom';
//TODO category
const Posts = () => {

  const posts = useSelector(getAllPosts);
  const categories = useSelector(getAllCategories);

  return (
    <Container className={styles.cardsContainer}>
      {posts.map(post => {
        const category = getCategoryById({ categories }, post.categoryId);
        return (
        <PostCard 
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          publishedDate={dateToStr(post.publishedDate)}
          shortDescription={post.shortDescription}
          category={category ? category.categoryName : 'Unknown'}
        />
        );
      })}
    </Container>
  );
}

export default Posts;