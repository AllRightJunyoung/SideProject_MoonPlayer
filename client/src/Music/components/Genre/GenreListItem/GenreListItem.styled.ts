import styled from 'styled-components';

import { Image } from 'common/components';

interface CardImageProps {
  disabled: boolean;
}

export const CardImage = styled(Image)<CardImageProps>`
  transition-duration: 0.4s;
  opacity: ${(props) => (!props.disabled ? '0.34' : '1')};
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  border-radius: 7px;

  cursor: pointer;
`;
