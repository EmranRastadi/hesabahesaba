import {
  Abr,
  TowCar,
  Separ,
  Ghalb,
  Ambulanse,
  GhalbBadBadak,
  KeshtiAval,
} from '../../molecules';
import { Container } from './style';

export default function ShapeAnim() {
  return (
    <Container>
      <Abr />
      <TowCar />
      <Separ />
      <Ghalb />
      <Ambulanse />
      <GhalbBadBadak />
      <KeshtiAval />
    </Container>
  );
}
