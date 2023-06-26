import styled from 'styled-components';

import { Flex, Text } from 'common/components';

export const Layout = styled(Flex)`
  margin: 0 auto;
  margin-bottom: 10px;
  padding-bottom: 15px;
`;

interface TitleProps {
  active: boolean;
}

export const Title = styled(Text)<TitleProps>`
  font-size: 16px;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 15px;
  color: ${(props) => (!props.active ? 'rgba(255, 255, 255, 0.64)' : 'white')};
  padding-left: 10px;
  font-weight: bold;
`;
