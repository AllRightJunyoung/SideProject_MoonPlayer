import styled from 'styled-components';

import { Flex, Text, HiddenText, Image } from 'shared/components';

export const Layout = styled(Flex)`
  padding: 0px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.16);
  gap: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
  height: 84px;
  overflow: hidden;
`;

export const Number = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  font-size: 16px;
  width: 16px;
`;

export const Title = styled(HiddenText)`
  flex: 1;
  font-size: 14px;
  max-height: 48px;
  color: rgba(255, 255, 255, 0.84);
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  @media (max-width: 414px) {
    display: none;
  }
`;
export const MusicImage = styled(Image)`
  width: 128px;
`;
