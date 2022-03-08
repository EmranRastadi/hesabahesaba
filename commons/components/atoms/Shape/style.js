import styled from 'styled-components';

const Container = styled.div`
  .container{
    width: ${props => props?.theme?.shape?.width};
    height: ${props => props?.theme?.shape?.height};
    position: absolute;
    opacity: 1;
  }
`;

export {
  Container
}