import styled from 'styled-components';
import { Image, Text, Button, Flex } from 'common/components';

export const FormButton = styled(Button)`
  font-size: 20px;
  display: flex;
  width: 100%;
  align-items: center;
  height: 60px;
  border: none;
  width: 100%;
  margin: 10px;
  > :nth-child(2) {
    margin: 0 auto;
  }
`;

export const Layout = styled(Flex)`
  width: 400px;
`;
export const Icon = styled(Image)`
  width: 30px;
  height: 30px;
`;
export const ButtonText = styled(Text)`
  font-size: 24px;
`;
