import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fontSize?: string;
  fontColor?: string;
  fontWeight?: number;
  color?: string;
}
