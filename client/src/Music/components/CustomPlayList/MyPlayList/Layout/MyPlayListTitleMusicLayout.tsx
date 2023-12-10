/* eslint-disable max-len */
import * as Styled from './MyPlayListTitleMusicLayout.styled';
import { useAppSelector } from 'shared/hooks/useReduxStore';
import MyPlayListMusicHeader from '../MyPlayListHeader';
import MusicItem from 'Music/components/MusicItem';
import { memo } from 'react';

const MyPlayListTitleMusicLayout = () => {
  const selectedPlayListStore = useAppSelector((state) => state.music.myPlayList.selected);
  const selectedTitle = selectedPlayListStore.title;
  const selectedPlayList = selectedPlayListStore.playList;
  return (
    <>
      <MyPlayListMusicHeader title={selectedTitle} />
      <Styled.Layout>
        {selectedPlayList.map((music, idx) => (
          <MusicItem name={music.name} url={music.img_url} order={idx + 1} key={idx + 1} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default memo(MyPlayListTitleMusicLayout);
