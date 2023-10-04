import styled from "styled-components";

const Intrested = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Wanna Work With Me?</h2>
        <p>
          I'm open to working on great projects. <br/> <br/>LET'S DO THIS
        </p>
        <a
          href="https://wa.me/2347036750857"
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          <button>Let's Talk</button>
        </a>
      </Wrapper>
    </Container>
  );
};

export default Intrested;

const Wrapper = styled.div`
  width: 90%;
  height: 280px;
  margin-bottom: 10px;
  box-shadow: 0 0 3px white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 40px;

    @media screen and (max-width: 500px) {
      font-size: 30px;
      width: 300px;
      text-align: center;
    }
  }

  button {
    padding: 15px 40px;
    border: none;
    background-color: #827ae0;
    border-radius: 30px;
    font-size: 17px;
    color: white;
    cursor: pointer;
  }
  p {
    width: 500px;
    font-size: 20px;
    text-align: center;
    font-weight: 700;

    @media screen and (max-width: 500px) {
      width: 300px;
      font-size: 14px;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 40px;
  background-color: #150E28;
  color: white;
`;
