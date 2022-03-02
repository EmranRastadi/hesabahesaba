import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  bottom: 15px;
  left: 0px;
  width: 170px;
  height: 170px;
  z-index: 999999999;
  .menu-item{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 125px;
    bottom: 0px;
  }
`;

const Luncher = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  cursor: pointer;
  z-index: 99;
  position: absolute;
  left: 35px;
  bottom: 20px;
  border-radius: 50%;
  box-shadow: 0 10px 30px 20px rgb(0 0 0 / 30%);
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #a9a8ae;
  right: 7px;
  top: 15px;
  &.active {
    transition: .3s all ease;
    -moz-transition: .3s all ease;
    -webkit-transition: .3s all ease;
    border-radius: 3px;
    border-bottom: 3px solid #a9a8ae;
    width: 35px;
    transform-origin: center;
    transform-box: view-box;
    transform: rotate( -409deg) translate3d(-14px,4px,16px);
    border-left: unset;
    border-right: unset;
    border-top: unset;
    height: 0px;
  }
`;
const Square = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 3px;
  border: 2px solid #f25461;
  left: 13px;
  top: 17px;
  position: absolute;
  transform: rotate(20deg);
  transition: .3s all ease;
  -moz-transition: .3s all ease;
  -webkit-transition: .3s all ease;

  &.active {
    transition: .3s all ease;
    -moz-transition: .3s all ease;
    -webkit-transition: .3s all ease;
    border-bottom: 3px solid #f25461;
    width: 35px;
    transform-origin: center;
    transform-box: view-box;
    transform: rotate( 400deg) translate3d(7px,9px,0px);
    border-left: unset;
    border-right: unset;
    border-top: unset;
    height: 0px;
  }
`;

const MenuItem =styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  left: 125px;
  bottom: 0px;
`

export {
    Container,
    Luncher,
    Circle,
    Square,
    MenuItem
}