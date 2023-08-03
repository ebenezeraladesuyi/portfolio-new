import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-scroll";

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
              <Link to="home" duration={500} smooth={true} offset={-50}>
                <nav>Home</nav>
              </Link>
              <Link to="about" duration={500} smooth={true} offset={-50}>
                <nav>About</nav>
              </Link>
              <Link to="services" duration={500} smooth={true} offset={-50}>
                <nav>Services</nav>
              </Link>
              <Link to="portfolio" duration={500} smooth={true} offset={-50}>
                <nav>Portfolio</nav>
              </Link>
              <Link to="contact" duration={500} smooth={true} offset={-50}>
                <nav>Contact</nav>
              </Link>
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
              <Link to="home" duration={500} smooth={true} offset={-50}>
                <nav>Home</nav>
              </Link>
              <Link to="about" duration={500} smooth={true} offset={-50}>
                <nav>About</nav>
              </Link>
              <Link to="services" duration={500} smooth={true} offset={-50}>
                <nav>Services</nav>
              </Link>
              <Link to="portfolio" duration={500} smooth={true} offset={-50}>
                <nav>Portfolio</nav>
              </Link>
              <Link to="contact" duration={500} smooth={true} offset={-50}>
                <nav>Contact</nav>
              </Link>
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
    cursor: pointer;
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
