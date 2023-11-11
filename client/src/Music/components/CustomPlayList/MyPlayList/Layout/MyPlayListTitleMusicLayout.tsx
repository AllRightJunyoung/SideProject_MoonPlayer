/* eslint-disable max-len */
import * as Styled from './MyPlayListTitleMusicLayout.styled';
import { useAppSelector } from 'shared/hooks/useReduxStore';
import uuid from 'react-uuid';
import MyPlayListMusicHeader from '../MyPlayListHeader';
import { Music } from 'shared/components';

const MyPlayListTitleMusicLayout = () => {
  const selectedPlayListStore = useAppSelector((state) => state.music.myPlayList.selected);
  const selectedTitle = selectedPlayListStore.title;
  const selectedPlayList = selectedPlayListStore.playList;
  return (
    <>
      <MyPlayListMusicHeader title={selectedTitle} />
      <Styled.Layout>
        {selectedPlayList.map((music, idx) => (
          <Music name={music.name} url={music.img_url} order={idx + 1} key={uuid()} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default MyPlayListTitleMusicLayout;
