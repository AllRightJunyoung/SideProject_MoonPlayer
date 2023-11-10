import * as Styled from './Alarm.styled';
import { useDialog } from 'shared/hooks';

const Alarm = () => {
  const { alarm, closeAlarmMessage } = useDialog();

  return alarm.isOpen ? (
    <Styled.Layout>
      <Styled.Box direction="column" justifyContent="center" alignItems="center">
        <Styled.AlarmAvatar src="/images/avatar/login.png" />
        <Styled.AlarmText color="white" textAlign="center">
          {alarm.message}
        </Styled.AlarmText>
        <Styled.AlarmButton fontColor="white" color="gray" onClick={closeAlarmMessage}>
          확인
        </Styled.AlarmButton>
      </Styled.Box>
    </Styled.Layout>
  ) : (
    <></>
  );
};
export default Alarm;
