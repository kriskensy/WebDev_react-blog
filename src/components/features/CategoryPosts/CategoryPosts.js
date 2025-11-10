import styles from './CategoryPosts.module.scss';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts } from '../../../redux/postsRedux';
import { Container } from "react-bootstrap";
import PostCard from '../PostCard/PostCard';
import { dateToStr } from '../../../utils/dateToStr.js';
import { getAllCategories } from '../../../redux/categoriesRedux';
import PageTitle from '../../common/PageTitle/PageTitle.js';

const CategoryPosts = () => {

  const posts = useSelector(getAllPosts);
  const categories = useSelector(getAllCategories);
  const { categoryName } = useParams();
  const filteredPosts = posts.filter(post => {
    const postCategory = categories.find(category => category.id === post.categoryId);
    return postCategory && postCategory.categoryName === categoryName
  });

  return (
    <Container>
      <PageTitle>Category: {categoryName}</PageTitle>
      <div className={styles.categoryPostsContainer}>
        {filteredPosts.length === 0 ? (
          <p>No posts in this category...</p>
        ) : (
          filteredPosts.map(post => {
            const category = categories.find(category => category.id === post.categoryId);
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
            )}
          )
        )}
      </div>
    </Container>
  );
}

export default CategoryPosts;