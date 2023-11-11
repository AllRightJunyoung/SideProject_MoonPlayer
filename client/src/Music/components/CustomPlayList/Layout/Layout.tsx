import * as Styled from './Layout.styled';

import { useRef } from 'react';
import useMusicPageUIController from 'Music/hooks/useMusicPageUIController';
import { MyPlayListLayout } from '../MyPlayList';
import { AddMyPlayListLayout } from '../AddMyPlayList/Layout/AddMyPlayListLayout';

export const CustomPlayListLayout = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpenAddMusicListUI, onhandleCloseCustomPlayListUI } = useMusicPageUIController();

  return (
    <Styled.Overlay>
      <Styled.Layout direction="column" ref={modalRef}>
        <Styled.CustomIconButtom onClick={onhandleCloseCustomPlayListUI} name="close" color="white" size="2x" />
        {isOpenAddMusicListUI ? <AddMyPlayListLayout /> : <MyPlayListLayout />}
      </Styled.Layout>
    </Styled.Overlay>
  );
};
export default CustomPlayListLayout;
