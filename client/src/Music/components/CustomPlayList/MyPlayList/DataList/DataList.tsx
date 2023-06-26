import * as Styled from './DataList.styled';

import { MainHeader } from '../../Header/MainHeader';
import { DataListItem } from '../DataListItem';

const datas = [
  { title: '안녕하세요', id: 1 },
  { title: '안녕하세요', id: 2 },
  { title: '안녕sdfsdf', id: 3 },
  { title: '안녕sdfsdf', id: 4 },
  { title: '안녕sdfsdf', id: 5 },
  { title: '안녕sdfsdf', id: 6 },
  { title: '안녕sdfsdf', id: 7 },
];

// 서버로부터 데이터 페칭해서 렌더링
export const DataList = () => {
  return (
    <>
      <MainHeader title="나만의 플레이리스트 목록" />
      <Styled.Layout>
        {datas.map((data) => (
          <DataListItem title={data.title} key={data.id} id={data.id} />
        ))}
      </Styled.Layout>
    </>
  );
};

export default DataList;
