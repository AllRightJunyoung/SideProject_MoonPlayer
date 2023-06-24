import styled from 'styled-components';
import { CSSObject } from 'styled-components';

const Image = styled.img<CSSObject>`
  object-fit: fill;
  max-width: 100%;
  box-shadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px';
`;

export default Image;
