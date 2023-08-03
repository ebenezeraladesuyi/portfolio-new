import { styled } from "styled-components";
import pics from "../assets/Finbarr.jpg";
import saveAs from "file-saver";

const Hero = () => {
  const handleDownload = () => {
    const filename = "finbarrcv.docx";

    const fileURL = process.env.PUBLIC_URL + "/" + filename;

    saveAs(fileURL, filename);
  };
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
          <Button onClick={handleDownload}>Download cv</Button>
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
`;

const Left = styled.div`
  margin-top: 70px;
  h1 {
    font-size: 60px;
    /* color: transparent; */
  }
  p {
    width: 500px;
    margin: 0;
    font-size: 19px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #f5f5f5;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;

  justify-content: space-between;
  /* margin-top: 80px; */
`;
