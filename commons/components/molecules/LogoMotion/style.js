import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;

  .logoCircle {
    position: absolute;
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 15px solid #a6a8ab;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.1;
  }

  .logoSquare {
    width: 200px;
    position: absolute;
    top: 0px;
    left:40px;
    height: 200px;
    border-radius: 15px;
    border: 15px solid #f2515c;
    bottom: 0;
    margin: auto;
    transform: rotate(20deg);
    opacity: 0.1;
  }

  @media screen and (min-width: 660px) {
    .logoCircle {
      width: 500px;
      height: 500px;
      border: 30px solid #a6a8ab;
      left: 200px;
    }

  
    .logoSquare {
      border: 30px solid #f2515c;
      right: 200px;

      width: 420px;
      height: 420px;
    }
  }
  @media screen and (min-width: 1028px) {
    .logoCircle {
      width: 700px;
      left: 300px;
      height: 700px;
      border: 35px solid #a6a8ab;
    }

  
    .logoSquare {
      width: 600px;
      
      height: 600px;
      right: 300px;
      border: 40px solid #f2515c;

    }
  }
`;


export {
    Main
}