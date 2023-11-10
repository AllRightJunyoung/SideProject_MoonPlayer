import * as Styled from './MyPlayListTitleItem.styled';
import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import { IconButton } from 'shared/components';
import { useAppSelector, useAppDispatch } from 'shared/hooks/useReduxStore';
import { selectMyPlayList } from 'Music/store/feature/MyPlayListSlice';
import { useDialog } from 'shared/hooks';

const MyPlayListTitleItem = ({ title, order }) => {
  const totalPlayList = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const currentMyPlayList = totalPlayList.filter((playList) => playList.order === order)[0];
  const newCurrentPlayList = {
    playList: currentMyPlayList.playList,
    title: currentMyPlayList.title,
  };

  const { onhandleMyPlayListUI } = useMusicPageUIControl();
  const dispatch = useAppDispatch();
  const { showConfirmMessage } = useDialog();

  const handleMyPlayListItem = () => {
    onhandleMyPlayListUI(false);
    dispatch(selectMyPlayList(newCurrentPlayList));
  };
  const handleRemoveButton = () => {
    showConfirmMessage('PlayListDelete');
    dispatch(selectMyPlayList(newCurrentPlayList));
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Number>{order}</Styled.Number>
      <Styled.Title onClick={handleMyPlayListItem}>{title}</Styled.Title>
      <IconButton onClick={handleRemoveButton} color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Styled.Layout>
  );
};

export default MyPlayListTitleItem;
