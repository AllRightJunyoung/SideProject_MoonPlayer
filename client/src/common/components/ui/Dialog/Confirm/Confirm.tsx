import { Flex } from 'common/components/';
import * as Styled from './Confirm.styled';
import { useConfirm } from 'common/hooks';

const Confirm = () => {
  const { isOpen, confirmState, handleYesButton, handleNoButton } = useConfirm();

  return isOpen ? (
    <Styled.OverLay>
      <Styled.Layout direction="column" justifyContent="center" alignItems="center">
        <Styled.ConfirmAvatar src="images/avatar/login.png" />
        <Styled.ConfirmText color="white" textAlign="center">
          {confirmState.message}
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
