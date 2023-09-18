import { styled } from "styled-components";
import pix from "../assets/eben.jpg";

const About = () => {
  return (
    <Container id="about">
      <Left>
        <ImgHold>
          <img src={pix} alt="" />
        </ImgHold>
      </Left>
      <Right>
        <Title>
          {" "}
          <h2>About</h2>
          <h4>
            I'm{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px #000000",
                fontFamily: "sans-serif",
              }}
            >
              Ebenezer
            </span>
          </h4>
          <h6>A MERN-Stack Software Engineer.</h6>
        </Title>
        <p>
          A qualified FullStack Developer with holistic knowledge of software
          design and development with over 3 years of experience. I have strong
          skills and ability to understand any applications life-cycle in depth
          and writing clean and efficient code. Collaborative team player with
          excellent technical abilities. Proficient in Javascript and Typescript
        </p>
        <Holder>
          <Holding>
            <h5>Education:</h5>
            <span>Yaba College Of Technolgy, Lagos. (HND 2023)</span>
          </Holding>
          <Holding>
            <h5>Certification:</h5>
            <span>Aptech Computer College, Lagos  (2021)</span>
          </Holding>
          <Holding>
            <h5>Email:</h5>
            <span>ebenezeraladesuyi@gmail.com</span>
          </Holding>
          <Holding>
            <h5>Mobile:</h5>
            <span>07036750857</span>
          </Holding>
        </Holder>
      </Right>
    </Container>
  );
};

export default About;

const Holding = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const Holder = styled.div`
  margin-left: 60px;

  @media screen and (max-width: 900px) {
    margin: 0;
    margin-left: 18px;
  }

  h5 {
    margin: 0;
    font-size: 19px;
  }
  span {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const Title = styled.div`
  margin-left: 60px;

  @media screen and (max-width: 900px) {
    margin-left: 18px;
  }
`;

const Right = styled.div`
  /* margin-right: 60px; */

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    margin-left: 20px;
  }

  p {
    width: 600px;
    font-size: 18px;
    margin-left: 60px;

    @media screen and (max-width: 900px) {
      font-size: 16px;
      width: 350px;
      margin: 0;
      margin-left: 18px;
      margin-top: 20px;
      /* text-align: center; */
    }
  }

  h2 {
    font-size: 130px;
    color: transparent;
    // -webkit-text-stroke: 1px #f5f5f5;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 100px;
    }
    @media screen and (min-width: 700px) and (max-width: 1000px) {
      font-size: 80px;
    }
    /* @media screen and (min-width: 700px) and (max-width: 1000px) {
      font-size: 190px;
    } */
  }

  h4 {
    position: absolute;
    top: 15%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 500px) {
      top: 49.5%;
    }

    @media screen and (min-width: 700px) and (max-width: 1000px) {
      top: 10%;
    }
  }
  h6 {
    margin: 0;
    font-size: 17px;

    @media screen and (max-width: 900px) {
      font-size: 15px;
    }
  }
`;

const Left = styled.div`
  width: 470px;
  height: 470px;
  border: 1px solid #827ae0;
  margin-left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-name: slideInFromLeft;
  animation-delay: 3s;

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      margin-left: -470px; /* Start position outside the left edge */
    }
    to {
      opacity: 1;
      margin-left: 60px; /* End position */
    }
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    height: 300px;
    margin: 0;
    animation: none;
    opacity: 1;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    width: 300px;
    height: 300px;
    margin: 0;
    margin-left: 40px;
    margin-top: 40px;
  }
`;
const ImgHold = styled.div`
  width: 90%;
  height: 90%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  margin-top: 40px;
  display: flex;
  position: relative;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* justify-content: space-between; */
  /* height: 00px; */
  /* background-color: red; */
`;
