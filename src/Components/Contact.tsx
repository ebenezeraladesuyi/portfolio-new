import styled from "styled-components";

const Contact = () => {
  return (
    <Container id="contact">
      <h2>Contact</h2>
      <h4>Reach Me...</h4>
      <Holder>
        <Left>
          <h3>
            <span>Lagos</span>, Nigeria
          </h3>
          <p>34,Labaka Street, Amukoko</p>
          <h6>ogbonnafinbarr@gmail.com</h6>
          <h6>+234 80 875 1413</h6>
        </Left>
        <Right>
          <Card>
            <InpHold>
              <input type="text" placeholder="Input name" />
              <input type="text" placeholder="Input email" />
            </InpHold>
            <Input type="text" placeholder="Subject (Optional)" />
            <textarea placeholder="Message..."></textarea>
            <Buthold>
              <button>Contact Me</button>
            </Buthold>
          </Card>
        </Right>
      </Holder>
    </Container>
  );
};

export default Contact;

const Buthold = styled.div`
  width: 90%;

  button {
    width: 120px;
    height: 45px;
    border-radius: 30px;
    font-size: 16px;
    color: white;
    border: none;
    background-color: #827ae0;
    margin-top: 20px;
  }
`;

const Input = styled.input`
  width: 88%;
  height: 38px;
  border: 1px solid #f5f5f5;
  outline: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  padding-left: 10px;
  margin-top: 20px;
`;

const InpHold = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  input {
    width: 44%;
    height: 38px;
    border: 1px solid #f5f5f5;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding-left: 10px;
  }
`;

const Card = styled.div`
  width: 550px;
  min-height: 200px;
  /* background-color: white; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  textarea {
    resize: none;
    width: 88%;
    height: 100px;
    border: 1px solid #f5f5f5;
    outline: none;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    padding-left: 10px;
    margin-top: 20px;
  }
`;

const Holder = styled.div`
  width: 90%;
  min-height: 200px;
  margin-top: 40px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  /* background-color: gold; */

  h3 {
    font-size: 49px;
    margin: 0;
    margin-bottom: 15px;

    span {
      color: #827ae0;
    }
  }
`;

const Right = styled.div``;
const Left = styled.div`
  p {
    margin: 0;
    font-size: 29px;
    margin-bottom: 80px;
  }
  h6 {
    margin: 0;
    margin-bottom: 20px;
    font-size: 27px;
    font-weight: lighter;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  margin-top: 60px;
  position: relative;

  background-color: #f5f5f5;
  margin-bottom: 20px;

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    margin-top: 20px;
  }

  h4 {
    position: absolute;
    top: 15%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;
  }
`;
