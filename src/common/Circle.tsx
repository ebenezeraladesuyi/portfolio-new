import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

const Circle = () => {
  return (
    <Container>
      <AiOutlineArrowUp size={25} />
    </Container>
  );
};

export default Circle;

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: #827ae0;
`;
