import styled from 'styled-components';

import { Flex, Avatar } from 'common/components';

export const Layout = styled(Flex)`
  padding: 24px 48px;
  background: linear-gradient(rgba(0, 0, 0, 0.64), transparent);
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: 0 8px;
`;

export const NavigationAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;
export const FlexBox = styled(Flex)`
  gap: 20px;
  margin-top: 15px;
  padding-right: 30px;
`;
