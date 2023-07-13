import * as Styled from './MyPlayListLayout.styled';

import CustomPlayListHeader from '../../CustomPlayListHeader';
import { useAppSelector } from 'common/hooks/useReduxStore';

import MyPlayListTitleItem from '../MyPlayListTitleItem/MyPlayListTitleItem';
import { useMusicPageUIController } from 'Music/hooks';
import MyPlayListTitleMusic from '../MyPlayListTitleMusic';

const MyPlayListLayout = () => {
  const { isOpenMyPlayListTitleListUI } = useMusicPageUIController();
  const myPlayListStore = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const myPlayListTitleList = myPlayListStore.map((playList) => ({
    order: playList.order,
    title: playList.title,
  }));

  return (
    <>
      {isOpenMyPlayListTitleListUI ? (
        <>
          <CustomPlayListHeader title="MY  P L A Y L I S T" />
          <Styled.Layout>
            {myPlayListTitleList.map((playList) => (
              <MyPlayListTitleItem title={playList.title} key={String(playList.order)} order={playList.order} />
            ))}
          </Styled.Layout>
        </>
      ) : (
        <MyPlayListTitleMusic />
      )}
    </>
  );
};

export default MyPlayListLayout;
