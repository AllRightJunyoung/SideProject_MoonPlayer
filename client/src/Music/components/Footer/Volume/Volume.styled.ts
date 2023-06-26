import { Flex } from 'common/components';
import styled from 'styled-components';

export const Layout = styled(Flex)`
  color: gray;
  justify-content: flex-end;
  margin: 10px;
  > :nth-child(1) {
    margin-right: 20px;
  }
`;

interface VolumeSliderProps {
  volume: string;
  trackColor: string;
  thumbColor: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const VolumeSlider = styled.input.attrs<VolumeSliderProps>(({ volume }) => ({
  type: 'range',
  min: '1',
  max: '100',
  value: volume,
}))<VolumeSliderProps>`
  border-radius: 7px;
  cursor: pointer;
  -webkit-appearance: none;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 8px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -1.5px;
  }

  /* 파이어폭스 */
  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: ${({ trackColor }) => trackColor};
    cursor: pointer;
  }

  &::-moz-range-thumb {
    height: 8px;
    width: 30px;
    border-radius: 7px;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
    margin-top: -1.5px;
  }
`;

VolumeSlider.defaultProps = {
  thumbColor: 'white',
  trackColor: 'gray',
};
