import styled from 'styled-components';
import { Flex, Button, Avatar, Text } from 'shared/components';

export const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;

export const Layout = styled(Flex)`
  position: relative;
  width: 300px;
  height: fit-content;
  padding: 30px;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 7px;
`;
export const ConfirmButton = styled(Button)`
  font-size: 20px;
  padding: 10px;
  border: none;
`;
export const ConfirmAvatar = styled(Avatar)`
  width: 100px;
  height: 100px;
  margin: 50px;
`;
export const ConfirmText = styled(Text)`
  font-size: 22px;
`;
