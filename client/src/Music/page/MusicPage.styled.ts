import styled from 'styled-components';
import { Flex } from 'shared/components';
export const Layout = styled(Flex)`
  position: relative;

  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(
    333deg,
    rgba(12, 12, 56, 1) 0%,
    rgba(45, 34, 76, 1) 36%,
    rgba(36, 18, 95, 1) 73%,
    rgba(38, 64, 92, 1) 100%
  );
`;
