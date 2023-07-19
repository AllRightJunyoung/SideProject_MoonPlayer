import styled from 'styled-components';
import { Flex, Text, IconButton } from 'common/components';

export const Layout = styled(Flex)`
  margin: 15px;
`;
export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.64);
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
export const CustomIconButton = styled(IconButton)`
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;
export const IconButtonBox = styled(Flex)`
  margin: 10px;
`;
