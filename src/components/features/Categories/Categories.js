import { ListGroup, Card } from "react-bootstrap";
import PageTitle from "../../common/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";
import { Link } from "react-router-dom";

const Categories = () => {

  const categories = useSelector(getAllCategories);
  return (
    <article className="col-md-8 mx-auto">
      <PageTitle>All categories</PageTitle>
      <Card>
        <ListGroup variant="flush">
          {categories.map(category => (
            <ListGroup.Item
              key={category.id}
              category={category.categoryName}
              as={Link}
              to={`/categories/${(category.categoryName)}`}
            >
              {category.categoryName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </article>
  );
}

export default Categories;