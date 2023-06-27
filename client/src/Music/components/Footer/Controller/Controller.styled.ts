import styled from 'styled-components';
import { Flex } from 'common/components';

export const Layout = styled(Flex)`
  padding: 0px 10px;
  color: gray;
  cursor: pointer;
  > :nth-child(2) {
    justify-content: center;
  }
`;
export const FlexBox = styled(Flex)`
  margin: 15px;
`;