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
          {/* <h4>
            I'm{" "}
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px white",
                fontFamily: "sans-serif",
              }}
            >
              Ebenezer
            </span>
          </h4> */}
          <h6 style={{color:"#827ae0"}}>A MERN-Stack Software Engineer.</h6>
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
    font-size: 14px;
    color: #827ae0;
  }

  span {
    font-size: 13px;
    margin-left: 10px;

    @media-screen and (max-width: 500px) {
      font-size: 11px;
    }
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

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    width: 600px;
    font-size: 18px;
    margin-left: 60px;

    @media screen and (max-width: 900px) {
      font-size: 16px;
      width: 300px;
      margin: 0;
      // margin-left: 18px;
      margin-top: 20px;
      text-align: center; 
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
      font-size: 70px;
      text-align: center;
      margin-left: -15px;
    }
    @media screen and (min-width: 700px) and (max-width: 1000px) {
      font-size: 80px;
    }
  }

  h4 {
    position: absolute;
    top: 15%;
    margin-left: 20px;
    font-size: 27px;
    margin: 0;

    @media screen and (max-width: 500px) {
      top: 39.5%;
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
  border: 2px solid #827ae0;
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
  display: flex;
  position: relative;
  background-color: #150E28;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow:hidden;
  color: white;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* justify-content: space-between; */
  /* height: 00px; */
  /* background-color: red; */
`;
