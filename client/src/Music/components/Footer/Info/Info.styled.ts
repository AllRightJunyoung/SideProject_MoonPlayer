import { Flex, Text, Image } from 'shared/components';
import styled from 'styled-components';

export const Layout = styled(Flex)`
  flex: 1;
  margin-left: 48px;
`;
export const Title = styled(Text)`
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
  margin: 0px 16px;
`;

export const InfoImage = styled(Image)`
  width: 56px;
  height: 56px;
  object-fit: cover;
`;
