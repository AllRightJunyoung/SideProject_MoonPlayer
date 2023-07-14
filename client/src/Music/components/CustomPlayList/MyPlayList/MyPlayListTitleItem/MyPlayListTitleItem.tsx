import * as Styled from './MyPlayListTitleItem.styled';
import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import { IconButton } from 'common/components';
import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';
import { selectMyPlayList } from 'Music/store/feature/MyPlayListSlice';
import { useContext } from 'react';
import { DiaLogContext } from 'common/context/dialog';

const MyPlayListTitleItem = ({ title, order }) => {
  const totalPlayList = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const { onhandleMyPlayListUI } = useMusicPageUIControl();
  const dispatch = useAppDispatch();
  const dialogCtx = useContext(DiaLogContext);

  const handleMyPlayListItem = () => {
    onhandleMyPlayListUI(false);
    const currentMyPlayList = totalPlayList.filter((playList) => playList.order === order)[0];
    const newCurrentPlayList = {
      playList: currentMyPlayList.playList,
      title: currentMyPlayList.title,
    };
    dispatch(selectMyPlayList(newCurrentPlayList));
  };
  const handleRemoveButton = () => {
    dialogCtx.showConfirm('PlayListDelete');
    dialogCtx.setDeletePlayListDialog(title);
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
