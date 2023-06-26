import { Line } from 'rc-progress';
import type { ProgressBarProps } from './ProgressBar.types';
import * as Styled from './ProgressBar.styled';

// hover시 툴팁보이게
export const ProgressBar = ({ currentTime, endTime, elapsedTime }: ProgressBarProps) => {
  return (
    <Styled.Layout direction="row" alignItems="center">
      <Styled.Box>
        <Line strokeWidth={1} strokeLinecap="square" percent={elapsedTime} strokeColor={'#bF2b3C'} />
      </Styled.Box>
    </Styled.Layout>
  );
};

export default ProgressBar;
