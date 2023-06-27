/* eslint-disable max-len */
import DataList from '../DataList/DataList';
import { useMusicPageController } from 'Music/hooks';
import { MusicList } from '../MusicList/MusicList';
export const MyPlayListLayout = () => {
  // DataList를 렌더링할지 MusicList 렌더링할지 결정한다
  const { isOpenMyPlayListOptionUI } = useMusicPageController();
  return <>{isOpenMyPlayListOptionUI ? <DataList /> : <MusicList />}</>;
};
export default MyPlayListLayout;
