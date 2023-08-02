// import {AiFillGithub} from "react-icons"

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      &copy; {new Date().getFullYear()} Finbarr. Designed by Ogbonna Finbarr
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
