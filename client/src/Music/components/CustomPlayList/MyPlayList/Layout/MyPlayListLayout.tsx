/* eslint-disable max-len */
import { useMusicPageUIController } from 'Music/hooks';
import { MusicList } from '../MusicList/MusicList';
import MyPlayList from '../MyPlayList';

export const MyPlayListLayout = () => {
  // DataList를 렌더링할지 MusicList 렌더링할지 결정한다
  const { isOpenMyPlayListUI } = useMusicPageUIController();
  return <>{isOpenMyPlayListUI ? <MyPlayList /> : <MusicList />}</>;
};
export default MyPlayListLayout;
