import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  float : right;
  padding : 5px 10px;
  margin-right : 10px;
  position: relative;
  font-size : 14px;
  line-height: 3.4;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s all ease;
  -webkit-transition: 0.3s all ease;
  -moz-transition: 0.3s all ease;
  &:hover{
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
    color : #f25461;
    font-size: 16px;
  }
  &:hover  .after{
    width : 100%;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
  }
  .after{
    position: absolute;
    bottom: 0px;
    height: 3px;
    //width: 0px;
    left : 0;
    right : 0;
    width: 0px;
    margin : 0 auto;
    background: #f25461;
    transition: 0.3s all ease;
    -webkit-transition: 0.3s all ease;
    -moz-transition: 0.3s all ease;
  }
`;

export {
    Container
}