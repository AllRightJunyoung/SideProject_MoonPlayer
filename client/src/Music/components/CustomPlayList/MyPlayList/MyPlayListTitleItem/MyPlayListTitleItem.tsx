import useMusicPageUIControl from 'Music/hooks/useMusicPageUIController';
import * as Styled from './MyPlayListTitleItem.styled';
import { IconButton } from 'common/components';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import { selectMyPlayList } from 'Music/store/feature/MyPlayListSlice';

const MyPlayListTitleItem = ({ title, order }) => {
  const totalPlayList = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const { onhandleMyPlayListUI } = useMusicPageUIControl();

  const dispatch = useAppDispatch();

  const handleMyPlayListItem = () => {
    onhandleMyPlayListUI(false);
    const currentMyPlayList = totalPlayList.filter((playList) => playList.order === order)[0];
    const newCurrentPlayList = {
      playList: currentMyPlayList.playList,
      title: currentMyPlayList.title,
    };
    dispatch(selectMyPlayList(newCurrentPlayList));
  };

  return (
    <Styled.Layout direction="row" justifyContent="space-between" alignItems="center">
      <Styled.Number>{order}</Styled.Number>
      <Styled.Title onClick={handleMyPlayListItem}>{title}</Styled.Title>
      <IconButton color="rgba(255,255,255,0.64)" size="1x" name="trash" />
    </Styled.Layout>
  );
};

export default MyPlayListTitleItem;
