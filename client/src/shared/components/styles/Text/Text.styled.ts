import styled from 'styled-components';
import type { TextProps } from './Text.types';
const Text = styled.p<TextProps>(
  ({ color = 'white', textAlign = 'start', fontSize = '16px', fontWeight = 700 }) => `
  color:${color};
  text-align:${textAlign};
  font-size:${fontSize};
  font-weight:${fontWeight};
`
);

export default Text;
