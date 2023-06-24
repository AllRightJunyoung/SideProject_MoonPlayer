import styled from 'styled-components';
import type { CSSObject } from 'styled-components';

const HiddenText = styled.div<CSSObject>(
  ({ width = '50%', fontSize = '16px', color = 'white', textAlign = 'start', cursor = 'default' }) => `
    width: ${width};
    font-size:${fontSize};
    color:${color};
    font-weight: 700;
    text-align:${textAlign};
    cursor: ${cursor};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `
);
export default HiddenText;
