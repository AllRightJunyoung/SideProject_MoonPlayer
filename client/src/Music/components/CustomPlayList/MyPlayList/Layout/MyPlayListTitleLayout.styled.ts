import { ScrollBox, Text } from 'shared/components';
import styled from 'styled-components';

export const Layout = styled(ScrollBox)`
  height: 42vh;
  margin-top: 20px;
  h3 {
    font-size: 20px;
    margin-right: 10px;
  }
  div {
    font-size: 16px;
  }
  img {
    width: 64px;
    height: 64px;
  }
`;

export const MyPlayListTitleText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  padding-left: 5px;
  font-size: 18px;
`;
