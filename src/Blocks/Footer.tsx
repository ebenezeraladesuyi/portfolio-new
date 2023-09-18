import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Hold>
        <a href="https://github.com/ebenezeraladesuyi">
          <AiFillGithub size={25} style={{ marginRight: "20px" }} />
        </a>
        <a href="https://www.linkedin.com/in/aladesuyi-ebenezer-b49931208/">
          <AiFillLinkedin size={25} style={{ marginRight: "20px" }} />
        </a>
        <a href="https://www.facebook.com/ebenezeraladesuyi">
          <BsFacebook size={25} />
        </a>
      </Hold>
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Ebenezer. Designed by Ebenezer Aladesuyi
      </p>
    </Container>
  );
};

export default Footer;

const Hold = styled.div`
  display: flex;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;

  p {
    margin-top: 0;
    display: flex;
    align-items: center;
    font-weight: 700;
  }
`;
