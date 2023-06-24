import type { ButtonHTMLAttributes } from 'react';
import { CSSObject } from 'styled-components';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  color?: string;
}
