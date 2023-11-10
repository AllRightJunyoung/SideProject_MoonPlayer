import styled from 'styled-components';
import { Text, ScrollBox } from 'shared/components';

export const Layout = styled(ScrollBox)`
  width: 40%;
  height: 100vh;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: linear-gradient(rgba(0, 0, 0, 0.24), rgba(0, 0, 0, 0.12));
  border-radius: 7px;
  padding: 15px;
  margin-top: 15px;
  @media (max-width: 1199px) {
    width: 100%;
  }
`;
export const PlayerText = styled(Text)`
  color: rgba(255, 255, 255, 0.64);
  padding-left: 5px;
  font-size: 18px;
`;
