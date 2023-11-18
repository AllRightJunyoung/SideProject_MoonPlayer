import { memo } from 'react';
import Alarm from './Alarm/Alarm';
import Confirm from './Confirm/Confirm';

const Dialog = () => {
  return (
    <>
      <Alarm />
      <Confirm />
    </>
  );
};

export default memo(Dialog);
