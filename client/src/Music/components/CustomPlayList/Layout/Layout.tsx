import * as Styled from './Layout.styled';

import { useRef } from 'react';
import useMusicPageUIController from 'Music/hooks/useMusicPageUIController';
import { AddPlayListLayout } from '../AddPlayListLayout';
import { MyPlayListLayout } from '../MyPlayList/Layout';

export const CustomPlayList = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpenAddMusicListUI, onhandleCloseCustomPlayListUI } = useMusicPageUIController();

  return (
    <Styled.Overlay>
      <Styled.Layout direction="column" ref={modalRef}>
        <Styled.CustomIconButtom onClick={onhandleCloseCustomPlayListUI} name="close" color="white" size="2x" />
        {isOpenAddMusicListUI ? <AddPlayListLayout /> : <MyPlayListLayout />}
      </Styled.Layout>
    </Styled.Overlay>
  );
};
export default CustomPlayList;
