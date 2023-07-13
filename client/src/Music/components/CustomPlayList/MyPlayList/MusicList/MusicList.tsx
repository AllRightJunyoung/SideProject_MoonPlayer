/* eslint-disable max-len */
import { Music } from 'common/components';
import * as Styled from './MusicList.styled';
import { MusicListHeader } from '../MusicListHeader';
import { useAppSelector } from 'common/hooks/useReduxStore';
import uuid from 'react-uuid';
export const MusicList = () => {
  const selectedPlayListStore = useAppSelector((state) => state.music.myPlayList.selected);
  const selectedTitle = selectedPlayListStore.title;
  const selectedPlayList = selectedPlayListStore.playList;
  return (
    <>
      <MusicListHeader title={selectedTitle} />
      <Styled.Layout>
        {selectedPlayList.map((music, idx) => (
          <Music name={music.name} url={music.img_url} order={idx + 1} key={uuid()} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default MusicList;
