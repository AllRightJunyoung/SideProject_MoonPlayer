import React from 'react';
import type { IconButtonProps, ButtonProps } from './IconButton.types';
import Icon from '../Icon';
import styled from 'styled-components';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ onClick, name, size, color, active, className }, ref) => {
    return (
      <Button ref={ref} className={className} onClick={onClick} active={active}>
        <Icon name={name} size={size} color={color} />
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

const Button = styled.button<ButtonProps>(
  ({ active = false }) => `
  background: none;
  border:0;
  cursor:pointer;
  pointer-events:${active ? 'none' : 'auto'};
  opacity:${active ? 0.5 : 1};
  &:hover {
    transform: scale(1.16);
  }
  `
);
export default IconButton;
