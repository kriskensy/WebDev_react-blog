import { Container } from "react-bootstrap";
import Hero from "../Hero/Hero";
import Posts from "../../features/Posts/Posts";

const Home = () => {
  return (
    <Container>
      <Hero/>
      <Posts/>
    </Container>
  )
}

export default Home;