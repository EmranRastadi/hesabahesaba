import { Industry, Loading, Navbar } from '../../organism';
import { AnimationSlider, MyCustomer, MyIssue } from '../../templates';
import { Container } from './style';
import { Menu } from '../../molecules';

export default function Luncher() {
  return (
    <Container>
      <AnimationSlider/>
      <Industry/>
      <MyCustomer/>
      <MyIssue/>
      <Menu/>
    </Container>
  );
}