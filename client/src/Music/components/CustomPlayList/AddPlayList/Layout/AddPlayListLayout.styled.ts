import styled from 'styled-components';
import { ScrollBox, Flex, Text, Music } from 'common/components';

export const PlayListBox = styled(ScrollBox)`
  height: 30vh;
  padding-right: 10px;
`;
export const Layout = styled(Flex)`
  h3 {
    font-size: 16px;
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
export const InputBox = styled(Flex)`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 18px;
  outline: none;
  border: none;
  color: white;
  background: transparent;
  padding: 5px;
`;
export const EmptyText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);

  font-size: 20px;
`;

export const Title = styled(Text)`
  font-size: 20px;
`;
