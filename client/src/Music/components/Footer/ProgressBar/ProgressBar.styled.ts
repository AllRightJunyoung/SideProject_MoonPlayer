import { Flex } from 'common/components';
import styled from 'styled-components';

export const Layout = styled(Flex)`
  position: relative;
  color: rgba(255, 255, 255, 0.64);
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
export const Box = styled.div`
  /* position: absolute; */
  flex: 1;
  height: 5px;
  overflow: hidden;
  @media screen and (max-width: 1199px) {
    height: 15px;
  }
`;
