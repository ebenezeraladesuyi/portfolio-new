import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  background-color: gold;
`;
