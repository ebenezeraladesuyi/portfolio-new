import { styled } from "styled-components";
import pics from "../assets/Finbarr.jpg";
// import saveAs from "file-saver";
import cv from "../assets/finbarrcv.pdf"

const Hero = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <h1>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "transparent",
                WebkitTextStroke: "1.5px #827ae0",
              }}
            >
              Hello
            </span>{" "}
            I'm <br /> Ogbonna Finbarr
          </h1>
          <p>
            A Professional Full stack Developer (MERN stack). Strong attention
            to small details.
          </p>
          <a href={cv} download="resume">
            <Button>Download cv</Button>
          </a>
        </Left>
        <Right>
          <img src={pics} alt="Finbarr's Image" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Right = styled.div`
  width: 450px;
  height: 480px;
  /* background-color: gold; */
  margin-left: 50px;
  margin-bottom: 90px;
  margin-top: 30px;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: 250px;
    margin: 0;
    margin-top: 30px;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    width: 80%;
    height: 80%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  width: 170px;
  height: 50px;
  background-color: #827ae0;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 18px;
  margin-top: 25px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    width: 120px;
    font-size: 14px;
    height: 45px;
  }
`;

const Left = styled.div`
  margin-top: 70px;

  @media screen and (max-width: 900px) {
    margin-top: 45px;
  }
  h1 {
    font-size: 60px;
    /* color: transparent; */

    @media screen and (max-width: 900px) {
      font-size: 35px;
    }
  }
  p {
    width: 500px;
    margin: 0;
    font-size: 19px;

    @media screen and (max-width: 900px) {
      font-size: 15px;
      /* text-align: center; */
      width: 300px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f5f5f5;
  display: flex;
  /* align-items: center; */
  justify-content: center;

  @media screen and (max-width: 500px) {
    height: 600px;
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    height: 370px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: block;
  }
  /* margin-top: 80px; */
`;
