/* eslint-disable max-len */
import { Music } from 'common/components';
import * as Styled from './MusicList.styled';
import { MusicListHeader } from '../MusicListHeader';

const playerDatas = [
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 101,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 102,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 103,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      // eslint-disable-next-line max-len
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 104,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 105,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 106,
  },
  {
    source_url: 'https://www.youtube.com/watch?v=0-q1KafFCLU',
    name: '[MV] IU(아이유) _ Celebrity',
    img_url:
      'https://i.ytimg.com/vi/0-q1KafFCLU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD6XIEo8_GZamiAXdYO90c7fx7WTg',
    id: 107,
  },
];
export const MusicList = () => {
  // 서버로부터 가져온 데이터 렌더링해야함

  return (
    <>
      <MusicListHeader title="나만의 플레이리스트" />
      <Styled.Layout>
        {playerDatas.map((data) => (
          <Music name={data.name} url={data.img_url} id={data.id} key={data.id} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default MusicList;
