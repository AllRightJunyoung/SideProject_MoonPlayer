import * as Styled from './Volume.styled';

import { IconButton } from 'common/components';
import type { VolumeProps } from './Volume.types';

export const Volume = ({ onVolume, volume }: VolumeProps) => {
  return (
    <Styled.Layout direction="row" alignItems="center">
      <IconButton name="volume" size="1x" color="white" />
      <Styled.VolumeSlider onChange={onVolume} volume={volume} trackColor="gray" thumbColor="white" />
    </Styled.Layout>
  );
};
export default Volume;
