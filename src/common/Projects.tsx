import styled from "styled-components";
import { iProjects } from "../utils/interface";

const Projects: React.FC<iProjects> = ({ title, image, desc }) => {
  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      <h5>{title}</h5>
      <p>{desc}</p>
    </Container>
  );
};

export default Projects;

const Image = styled.div`
  width: 100%;
  height: 350px;
  background-color: gold;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 48.7%;
  min-height: 550px;
  /* margin-bottom: 20px; */

  h5 {
    font-size: 25px;
    margin: 0;
    margin-top: 10px;
  }
  p {
    width: 570px;
    font-size: 17px;
    color: darkgray;
  }
`;