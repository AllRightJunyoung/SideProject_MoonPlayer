export const PlayerControlModule_INIT = {
  playing: false, // 재생중인지
  ismuted: false, // 음소거인지
  controls: true, // 기본으로 제공되는 컨트롤러 사용할건지
  volume: 50, // 볼륨크기
  playbackRate: 1.0, // 배속
  played: 0, // 재생의 정도 (value)
  seeking: false, // 재생바를 움직이고 있는지
  duration: 0, // 전체 시간
  music: { source_url: '', name: '', img_url: '', id: 0 },
  isrepeat: false,
  currentTime: '00:00',
  endTime: '00:00',
};
