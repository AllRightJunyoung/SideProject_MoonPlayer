import { useEffect } from 'react';
import { fetchmusicGenre } from 'Music/store/feature/GenreSlice';
import { useAppDispatch } from 'common/hooks/useReduxStore';

import './index.css';

import * as Styled from './Layout.styled';
import GenreSlider from '../GenreSlider/GenreSlider';

export const GenreLayout = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchmusicGenre('http://localhost:4001/api/music/genre/'));
  }, []);
  return (
    <div>
      <GenreSlider />;
      <Styled.Pagination className="pagination" />
    </div>
  );
};

export default GenreLayout;
