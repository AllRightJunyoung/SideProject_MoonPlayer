import { handleNextPlayMusic, handlePrevPlayMusic, handleShuffleMusics } from 'store/feature/music/PlayerSlice';
import { nextSelctedMusic, prevSelctedMusic, shuffleMusic } from 'Music/utils/player';

import { useAppDispatch, useAppSelector } from 'common/hooks/useReduxStore';

const useSelectMusicPlayer = () => {
  const dispatch = useAppDispatch();
  const playerSelector = useAppSelector((state) => state.music.player);
  const handlePrevPlayingMusic = () =>
    dispatch(handlePrevPlayMusic(prevSelctedMusic(playerSelector.list, playerSelector.playingMusic)));

  const handleNextPlayingMusic = () =>
    dispatch(handleNextPlayMusic(nextSelctedMusic(playerSelector.list, playerSelector.playingMusic)));
  const handleShuffleMusic = () => dispatch(handleShuffleMusics(shuffleMusic(playerSelector.list)));

  return { handlePrevPlayingMusic, handleNextPlayingMusic, handleShuffleMusic };
};
export default useSelectMusicPlayer;
