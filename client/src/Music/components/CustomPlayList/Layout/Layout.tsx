import * as Styled from './Layout.styled';

import { useRef } from 'react';
import useMusicPageUIControl from 'hooks/useMusicPageUIControl';
import { AddPlayList } from '../AddPlayList';
import { MyPlayList } from '../MyPlayList/Layout';

export const CustomPlayList = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpenAddMusicListUI, onhandleCloseCustomPlayListUI } = useMusicPageUIControl();

  return (
    <Styled.Overlay>
      <Styled.Layout direction="column" ref={modalRef}>
        <Styled.CustomIconButtom onClick={onhandleCloseCustomPlayListUI} name="close" color="white" size="2x" />
        {isOpenAddMusicListUI ? <AddPlayList /> : <MyPlayList />}
      </Styled.Layout>
    </Styled.Overlay>
  );
};
export default CustomPlayList;
