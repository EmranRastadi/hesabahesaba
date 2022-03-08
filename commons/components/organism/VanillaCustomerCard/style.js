import styled from "styled-components";

const CardContainer = styled.div`
  .boxter{
    width: 180px;
    height: 200px;
    box-shadow: 20px 20px 50px rgba(0 0 0 / 50%);
    border-radius: 5px;
    background: rgba(255 255 255 , 10%);
    overflow: hidden;
    display: flex;
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    backdrop-filter: blur(5px);
    border-top:1px solid rgba(255 255 255 / 10%);
    border-left:1px solid rgba(255 255 255 / 10%);
    .img-container{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 150px;
      img{
        transform: scale(0.5);
      }
    }
  }
 
`;

export {
    CardContainer
}