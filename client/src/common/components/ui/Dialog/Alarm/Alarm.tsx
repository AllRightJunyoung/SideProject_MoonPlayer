import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';
import * as Styled from './Alarm.styled';

const Alarm = () => {
  const dialogCtx = useContext(DiaLogContext);
  const alarm = dialogCtx.state.alarm;
  return alarm.isOpen ? (
    <Styled.Layout>
      <Styled.Box direction="column" justifyContent="center" alignItems="center">
        <Styled.AlarmAvatar src="/images/avatar/login.png" />
        <Styled.AlarmText color="white" textAlign="center">
          {alarm.message}
        </Styled.AlarmText>
        <Styled.AlarmButton fontColor="white" color="gray" onClick={dialogCtx.closeAlarm}>
          확인
        </Styled.AlarmButton>
      </Styled.Box>
    </Styled.Layout>
  ) : (
    <></>
  );
};
export default Alarm;
