import * as Styled from './MyPlayListTitleLayout.styled';
import { useAppSelector } from 'shared/hooks/useReduxStore';
import { useMusicPageUIController } from 'Music/hooks';
import MyPlayListTitleMusicLayout from './MyPlayListTitleMusicLayout';
import MyPlayListTitleItem from '../MyPlayListTitleItem/MyPlayListTitleItem';
import CustomPlayListHeader from '../../CustomPlayListHeader';

const MyPlayListTitleLayout = () => {
  const { isOpenMyPlayListTitleListUI } = useMusicPageUIController();
  const myPlayListStore = useAppSelector((state) => state.music.myPlayList.totalPlayList);
  const myPlayListTitleList = myPlayListStore.map((playList) => ({
    order: playList.order,
    title: playList.title,
  }));

  console.log(myPlayListTitleList);
  return (
    <>
      {isOpenMyPlayListTitleListUI ? (
        <>
          <CustomPlayListHeader title="MY  P L A Y L I S T" />
          <Styled.Layout>
            {myPlayListTitleList.length > 0 ? (
              myPlayListTitleList.map((playList) => (
                <MyPlayListTitleItem title={playList.title} key={String(playList.order)} order={playList.order} />
              ))
            ) : (
              <Styled.MyPlayListTitleText>목록이 비어있습니다.</Styled.MyPlayListTitleText>
            )}
          </Styled.Layout>
        </>
      ) : (
        <MyPlayListTitleMusicLayout />
      )}
    </>
  );
};

export default MyPlayListTitleLayout;
