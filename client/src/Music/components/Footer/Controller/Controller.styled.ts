import styled from 'styled-components';
import { Flex } from 'shared/components';

export const Layout = styled(Flex)`
  padding: 0px 10px;
  color: gray;
  cursor: pointer;

  > :nth-child(2) {
    justify-content: center;
    @media (max-width: 414px) {
      gap: 5px;
    }
  }
`;
export const PlayBox = styled(Flex)`
  margin: 8px 10px;
`;
export const OptionBox = styled(Flex)`
  margin: 8px 5px;
  gap: 3px;
  @media (max-width: 414px) {
    flex-direction: column;
  }
`;
