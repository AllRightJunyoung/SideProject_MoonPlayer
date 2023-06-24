import styled from 'styled-components';
import type { CSSObject } from 'styled-components';

export const ScrollBox = styled.div<CSSObject>(
  ({ color = 'rgba(255,255,255,0.24)', radius = '7px' }) => `
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    opacity: 0;

  }
  &::-webkit-scrollbar-thumb {
    height: 5%;
    background: ${color};
    border-radius: ${radius};
  }

  // 파이어폭스
  scrollbar-width:thin;
  scrollbar-color:${color};
`
);
export default ScrollBox;