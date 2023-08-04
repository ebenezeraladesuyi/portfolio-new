import styled from "styled-components";
import { iCard } from "../utils/interface";

const Card: React.FC<iCard> = ({ title, desc }) => {
  return (
    <Container>
      <Circle></Circle>
      <h5>{title}</h5>
      <Line></Line>
      <p>{desc}</p>
    </Container>
  );
};

export default Card;

const Line = styled.div`
  width: 40px;
  height: 5px;
  background-color: purple;
  margin-top: 15px;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f5f5f5;
  border-radius: 50%;
`;

const Container = styled.div`
  width: 300px;
  min-height: 200px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;
  margin-bottom: 20px;

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    justify-content: space-between;
    width: 37%;
  }

  h5 {
    font-size: 25px;
    margin: 0;
    margin-top: 25px;
    text-align: center;
  }

  p {
    text-align: center;
    margin: 0;
    margin-top: 25px;
  }
`;
