import * as Styled from './Layout.styled';

import { useRef } from 'react';
import useMusicPageUIController from 'Music/hooks/useMusicPageUIController';
import { AddPlayListLayout } from '../AddPlayList/Layout';
import { MyPlayListLayout } from '../MyPlayList';

export const CustomPlayListLayout = () => {
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
export default CustomPlayListLayout;
