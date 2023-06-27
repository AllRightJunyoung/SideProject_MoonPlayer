import { useEffect, useRef } from 'react';

import ReactPlayer from 'react-player/lazy';
import useSelectMusicPlayer from './useSelectMusicPlayer';
import { useAppSelector, useAppDispatch } from 'common/hooks/useReduxStore';
import {
  handleRepeatMusicModule,
  handlePlayMusicModule,
  handleVolumeMusicModule,
  handleProgressBarModule,
  handlePlaySelectedMusicModlue,
} from 'store/feature/music/PlayerSlice';

const usePlayerController = () => {
  const dispatch = useAppDispatch();
  const playerRef = useRef<ReactPlayer>(null);
  const playerSelector = useAppSelector((state) => state.music.player);
  const playerModuleSelector = useAppSelector((state) => state.music.player.playerControlModuleState);

  const { handlePrevPlayingMusic, handleNextPlayingMusic, handleShuffleMusic } = useSelectMusicPlayer(); //음악을 고르는 훅

  // 현재 재생시간
  const currentTime =
    playerRef && playerRef.current ? Math.floor(playerRef.current.getCurrentTime()).toString() : '00:00';
  // 영상 총길이
  const endTime = playerRef && playerRef.current ? Math.floor(playerRef.current.getDuration()).toString() : '00:00';
  const volume = parseFloat((playerModuleSelector.volume / 100).toString());

  useEffect(() => {
    // 음악이 바뀌면 재생모듈안에있는 음악도 바껴야함
    if (!playerSelector.playingMusic.id) return;
    dispatch(
      handlePlaySelectedMusicModlue({
        ...playerModuleSelector,
        playing: true,
        music: playerSelector.playingMusic,
        currentTime,
        endTime,
      })
    );
  }, [playerSelector.playingMusic.id]);

  const handleRepeatMusicHandler = () => {
    dispatch(handleRepeatMusicModule({ ...playerModuleSelector, isrepeat: !playerModuleSelector.isrepeat }));
  };

  const handlePlayMusicHandler = () => {
    dispatch(handlePlayMusicModule({ ...playerModuleSelector, playing: !playerModuleSelector.playing }));
  };

  const handleMusicVolumeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleVolumeMusicModule({ ...playerModuleSelector, volume: +event.currentTarget.value }));
  };

  const handleProgressBarHandler = () => {
    dispatch(handleProgressBarModule({ ...playerModuleSelector, currentTime, endTime }));
  };

  const handleEndedMusicHandler = () => handleNextPlayingMusic();

  const musicPlayer = (
    <ReactPlayer
      ref={playerRef}
      style={{ opacity: 0 }}
      width="1px"
      height="1px"
      volume={volume}
      url={playerModuleSelector.music && playerModuleSelector.music.source_url}
      playing={playerModuleSelector.playing}
      loop={playerModuleSelector.isrepeat}
      onEnded={handleEndedMusicHandler}
      onProgress={handleProgressBarHandler}
    ></ReactPlayer>
  );
  return {
    musicPlayer,
    playerModuleSelector,
    handleRepeatMusicHandler,
    handlePlayMusicHandler,
    handleMusicVolumeHandler,
    handleShuffleMusic,
    handlePrevPlayingMusic,
    handleNextPlayingMusic,
  };
};

export default usePlayerController;
