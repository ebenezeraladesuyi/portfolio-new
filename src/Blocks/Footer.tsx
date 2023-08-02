import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Hold>
        <AiFillGithub size={25} style={{ marginRight: "20px" }} />
        <AiFillLinkedin size={25} style={{ marginRight: "20px" }} />
        <BsFacebook size={25} />
      </Hold>
      <p>
        {" "}
        &copy; {new Date().getFullYear()} Finbarr. Designed by Ogbonna Finbarr
      </p>
    </Container>
  );
};

export default Footer;

const Hold = styled.div`
  display: flex;
  margin-bottom: 15px;
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
  }
`;
