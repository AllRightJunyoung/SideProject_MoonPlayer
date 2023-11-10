import styled from 'styled-components';
import { Flex, Avatar, Text } from 'shared/components';

export const Layout = styled(Flex)`
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
  height: 100vh;
`;
export const Box = styled(Flex)`
  padding: 27px;
  box-shadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.5);
`;
export const Header = styled(Flex)`
  margin-bottom: 30px;
`;

export const CustomAvatar = styled(Avatar)`
  height: 100px;
  width: 100px;
`;

export const Title = styled(Text)`
  font-size: 40px;
  color: rgba(255, 255, 255, 0.64);
`;
