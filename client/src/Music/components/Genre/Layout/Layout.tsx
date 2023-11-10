import { useEffect } from 'react';
import { getMusicGenre } from 'Music/store/feature/GenreListSlice';
import { useAppDispatch } from 'shared/hooks/useReduxStore';
import { GenreList_GET_URI } from 'Music/constants/api';

import './index.css';

import * as Styled from './Layout.styled';
import GenreSlider from '../GenreSlider/GenreSlider';

export const GenreLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMusicGenre(`${GenreList_GET_URI}`));
  }, []);
  return (
    <div>
      <GenreSlider />;
      <Styled.Pagination className="pagination" />
    </div>
  );
};

export default GenreLayout;
