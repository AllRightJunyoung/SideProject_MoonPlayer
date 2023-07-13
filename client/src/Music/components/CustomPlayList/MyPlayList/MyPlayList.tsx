import * as Styled from './MyPlayList.styled';

import { MainHeader } from '../MainHeader';
import { MyPlayListItem } from './MyPlayListItem';
import { useAppSelector } from 'common/hooks/useReduxStore';

export const MyPlayList = () => {
  const myPlayListStore = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const myPlayListTitleList = myPlayListStore.map((playList) => ({
    order: playList.order,
    title: playList.title,
  }));

  return (
    <>
      <MainHeader title="MY  P L A Y L I S T" />
      <Styled.Layout>
        {myPlayListTitleList.map((playList) => (
          <MyPlayListItem title={playList.title} key={String(playList.order)} order={playList.order} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default MyPlayList;
