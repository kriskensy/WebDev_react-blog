import { Button, Stack } from "react-bootstrap";
import PageTitle from "../../common/PageTitle/PageTitle";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Stack direction="horizontal">
      <PageTitle>All posts</PageTitle>
      <Button as={Link} to="/post/add" variant="outline-info" className="p-2 ms-auto">Add post</Button>
    </Stack>
  );
}

export default Hero;