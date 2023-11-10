import styled from 'styled-components';
import type { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>(
  ({ color, fontSize, fontColor, fontWeight = 700 }) => `
  font-size: ${fontSize};
  background-color:${color};
  color: ${fontColor};
  font-weight: ${fontWeight};
  box-shadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px';

  &:hover {
    cursor: pointer;
    opacity:0.7;
  }
`
);

export default Button;
