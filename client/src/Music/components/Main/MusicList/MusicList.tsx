import * as Styled from './MusicList.styled';
import { useEffect } from 'react';
import { getMusicList } from 'Music/store/feature/PlayListSlice';
import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';
import { MainHeader } from '../Header/MainHeader';
import { MusicListItem } from '../MusicListItem';

const MusicList = () => {
  const dispatch = useAppDispatch();
  const { music_list } = useAppSelector((state) => state.music.playList.genre);

  useEffect(() => {
    if (music_list.length) return;
    dispatch(getMusicList(1));
  }, []);

  return (
    <Styled.Layout>
      <MainHeader title="M U S I C" />
      {music_list &&
        music_list.map(({ name, id, img_url, source_url }) => (
          <MusicListItem key={id} id={id} name={name} img_url={img_url} source_url={source_url}></MusicListItem>
        ))}
    </Styled.Layout>
  );
};

export default MusicList;
