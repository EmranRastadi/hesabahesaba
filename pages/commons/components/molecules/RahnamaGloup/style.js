import styled from 'styled-components';
const Container = styled.div`
  width: 20px;
  height: 40px;
  left: 2101px;
  //left: 500px;
  position: absolute;
  top: 287px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;


  .protector{
    background: transparent;
    width: 180px;
    height: 0;
    position: absolute;
    top: 20px;
    left: -35px;
    border-right: solid 30px transparent;
    border-left: solid 30px transparent;
    border-top: solid 90px #111;
    border-radius: 10px;
    z-index: -1;
  }

  .protector:nth-child(2){
    top: 140px;
  }

  .protector:nth-child(3){
    top: 260px;
  }

  .red{
    background: red;
    background-image: radial-gradient(brown, transparent);
    background-size: 5px 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: 5s red infinite;
    border: dotted 2px red;
    box-shadow:
            0 0 20px #111 inset,
            0 0 10px red;
  }

  .yellow{
    background: yellow;
    background-image: radial-gradient(orange, transparent);
    background-size: 5px 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: dotted 2px yellow;
    animation: 5s yellow infinite;
    box-shadow:
            0 0 20px #111 inset,
            0 0 10px yellow;
  }

  .green{
    background: green;
    background-image: radial-gradient(lime, transparent);
    background-size: 5px 5px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: dotted 2px lime;
    box-shadow:
            0 0 20px #111 inset,
            0 0 10px lime;
    animation: 5s green infinite;
  }

  @keyframes red{
    0%{opacity: 1}
    20%{opacity: 1}
    40%{opacity: 1}
    60%{opacity: .1}
    80%{opacity: .1}
    100%{opacity: .1}
  }

  @keyframes yellow{
    0%{opacity: .1}
    20%{opacity: .1}
    40%{opacity: 1}
    50%{opacity: .1}
    60%{opacity: .1}
    80%{opacity: .1}
    86%{opacity: 1}
    100%{opacity: 1}
  }

  @keyframes green{
    0%{opacity: .1}
    40%{opacity: .1}
    60%{opacity: 1}
    80%{opacity: 1}
    83%{opacity: .1}
    100%{opacity: .1}
  }
  
  
  
  
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    li{
      width: 10px;
      height: 10px;
      border-radius: 50px;
      
      &:nth-child(1){
       background: darkred; 
      } 
      &:nth-child(2){
       background: yellow; 
      }
      &:nth-child(3){
       background: green; 
      }
    }
  }

  @-webkit-keyframes fanRotate{
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
 
`;

export { Container  };
