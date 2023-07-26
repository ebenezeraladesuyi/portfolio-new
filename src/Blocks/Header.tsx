import styled from "styled-components";
import { useState } from "react";

const Header: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);

  const ChangeToggle = () => {
    if (window.scrollY > 70) {
      setChange(true);
    } else {
      setChange(false);
    }
  };
  window.addEventListener("scroll", ChangeToggle);
  return (
    <>
      {change ? (
        <Container
          bg="rgba(255, 255, 255, 0.9)"
          style={{ backdropFilter: "10", WebkitBackdropFilter: "10px" }}
        >
          <Wrapper>
            <Left>
              <h2>
                <span style={{ fontFamily: "'Yellowtail', cursive" }}>F</span>
                inbarr
              </h2>
            </Left>
            <Right>
              <nav>Home</nav>
              <nav>About</nav>
              <nav>Services</nav>
              <nav>Portfolio</nav>
              <nav>Contact</nav>
            </Right>
          </Wrapper>
        </Container>
      ) : (
        <Container bg="#f5f5f5">
          <Wrapper>
            <Left>
              <h2>
                <span style={{ fontFamily: "'Yellowtail', cursive" }}>F</span>
                inbarr
              </h2>
            </Left>
            <Right>
              <nav>Home</nav>
              <nav>About</nav>
              <nav>Services</nav>
              <nav>Portfolio</nav>
              <nav>Contact</nav>
            </Right>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Left = styled.div`
  h2 {
    font-size: 35px;
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  nav {
    font-size: 17px;
    margin: 10px;
  }
`;

const Container = styled.div<{ bg: string }>`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  position: sticky;
  top: 0%;
  z-index: 5;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
