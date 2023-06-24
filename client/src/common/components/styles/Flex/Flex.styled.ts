import styled from 'styled-components';
import type { FlexProps } from './Flex.types';
export const Flex = styled.div<FlexProps>(
  ({ direction = 'row', justifyContent, alignItems, gap }) => `
    display: flex;
    flex-direction:${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap:${gap}
  `
);

export default Flex;
