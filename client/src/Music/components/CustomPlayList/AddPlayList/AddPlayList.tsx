import * as Styled from './AddPlayList.styled';

import { useAppSelector } from 'common/hooks/useReduxStore';
import AddPlayListHeader from '../Header/MainHeader/MainHeader';

import { Music, Flex, IconButton } from 'common/components';
import { useDialog } from 'common/hooks';

export const AddPlayList = () => {
  const playerSelector = useAppSelector((state) => state.music.player);
  const { showConfirmMessage } = useDialog();

  const handleSaveButton = () => {
    showConfirmMessage('Save');
  };

  const currentPlayerMusics =
    playerSelector.list.length > 0 ? (
      playerSelector.list.map(({ name, img_url }, index) => (
        <Music name={name} url={img_url} key={index} id={++index} />
      ))
    ) : (
      <Styled.EmptyText>재생 목록이 비어있습니다.</Styled.EmptyText>
    );

  return (
    <>
      <AddPlayListHeader title="나만의 플레이리스트 추가" />
      <Styled.Layout direction="column" justifyContent="center">
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Styled.InputBox direction="row" alignItems="center" gap="15px">
            <Styled.Input placeholder="최소 4자~10자이내에 입력해주세요." />
            <IconButton name="save" size="2x" color="white" onClick={handleSaveButton}></IconButton>
          </Styled.InputBox>
        </Flex>
        <Styled.Title>재생목록</Styled.Title>
        <Styled.PlayListBox>{currentPlayerMusics}</Styled.PlayListBox>
      </Styled.Layout>
    </>
  );
};
export default AddPlayList;
