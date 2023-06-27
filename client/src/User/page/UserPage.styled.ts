import styled from 'styled-components';
import { Flex, Button, Text } from 'common/components';

export const Layout = styled(Flex)`
  height: 100vh;
`;

export const FlexBox = styled(Flex)`
  margin: 0 auto;
`;

export const TextArea = styled.textarea`
  width: 600px;
  height: 500px;
  font-size: 20px;
  resize: none;
`;
export const CustomButton = styled(Button)`
  width: 100%;
  height: 100px;
  font-size: 25px;
  margin: 10px;
`;
export const CustomText = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.title};
`;
