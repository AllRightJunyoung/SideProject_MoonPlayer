import * as Styled from './AddPlayListLayout.styled';

import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';

import { Music, Flex, IconButton } from 'common/components';
import { useDialog } from 'common/hooks';
import { useRef } from 'react';
import { handleAddPlayListInput } from 'Music/store/feature/MusicUISlice';
import { myPlayListInputValidation, myPlayListLengthValidation } from 'Music/utils/validation';
import CustomPlayListHeader from '../../CustomPlayListHeader';

export const AddPlayListLayout = () => {
  const dispatch = useAppDispatch();
  const playerList = useAppSelector((state) => state.music.player.list);
  const { showConfirmMessage, showAlarmMessage } = useDialog();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveButton = () => {
    if (!inputRef.current?.value) return;
    const inputValue = inputRef.current.value;
    if (!myPlayListLengthValidation(playerList)) {
      showAlarmMessage('재생목록이 존재하지 않습니다.');
      return;
    }

    if (!myPlayListInputValidation(inputValue)) return;

    dispatch(handleAddPlayListInput(inputValue));
    showConfirmMessage('PlayListSave');
  };

  const currentPlayerMusics =
    playerList.length > 0 ? (
      playerList.map(({ name, img_url }, index) => <Music name={name} url={img_url} key={index} order={++index} />)
    ) : (
      <Styled.EmptyText>재생 목록이 비어있습니다.</Styled.EmptyText>
    );

  return (
    <>
      <CustomPlayListHeader title="MY P L A Y L I S T ADD" />
      <Styled.Layout direction="column" justifyContent="center">
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Styled.InputBox direction="row" alignItems="center" gap="15px">
            <Styled.Input placeholder="30자 이내에서 입력해주세요!" ref={inputRef} />
            <IconButton name="save" size="2x" color="white" onClick={handleSaveButton}></IconButton>
          </Styled.InputBox>
        </Flex>
        <Styled.Title>재생목록</Styled.Title>
        <Styled.PlayListBox>{currentPlayerMusics}</Styled.PlayListBox>
      </Styled.Layout>
    </>
  );
};
export default AddPlayListLayout;
