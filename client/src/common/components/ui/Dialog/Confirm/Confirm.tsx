import { useContext } from 'react';
import { Flex } from 'common/components/';
import * as Styled from './Confirm.styled';
import { DiaLogContext } from 'context/Dialog';
import { confirmMessage } from '../../constants';
import useLogin from 'hooks/useLogin';

const Confirm = () => {
  const dialogCtx = useContext(DiaLogContext);
  const { signOut } = useLogin();
  const confirm = dialogCtx.state.confirm;

  const handleYesButton = () => {
    dialogCtx.closeConfirm();
    const confirmType = confirm.type;
    if (confirmType === '') return;
    return confirmType === 'Logout' ? handleLogout() : confirmType === 'Load' ? handleLoadMusic() : handleSaveMusic();
  };
  const handleNoButton = () => {
    dialogCtx.closeConfirm();
  };

  const handleLogout = () => {
    dialogCtx.showAlarm(confirmMessage.Logout);
    signOut();
  };

  const handleLoadMusic = () => {
    dialogCtx.showAlarm(confirmMessage.Load);
  };
  const handleSaveMusic = () => {
    dialogCtx.showAlarm(confirmMessage.Save);
  };

  return confirm.isOpen ? (
    <Styled.OverLay>
      <Styled.Layout direction="column" justifyContent="center" alignItems="center">
        <Styled.ConfirmAvatar src="images/avatar/login.png" />
        <Styled.ConfirmText color="white" textAlign="center">
          {confirm.message}
        </Styled.ConfirmText>
        <Flex direction="row" gap="50px">
          <Styled.ConfirmButton fontColor="white" color="gray" onClick={handleYesButton}>
            YES
          </Styled.ConfirmButton>
          <Styled.ConfirmButton fontColor="white" color="gray" onClick={handleNoButton}>
            No
          </Styled.ConfirmButton>
        </Flex>
      </Styled.Layout>
    </Styled.OverLay>
  ) : (
    <></>
  );
};

export default Confirm;
