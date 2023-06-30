export interface MusicItemType {
  readonly source_url: string;
  readonly name: string;
  readonly img_url: string;
  readonly id: number;
}

export interface GenreItemType {
  genre_name: string;
  image_url: string;
  genre_id: number;
}

export interface PlayerControlModuleType {
  playing: boolean;
  ismuted: boolean; // 음소거인지
  controls: boolean; // 기본으로 제공되는 컨트롤러 사용할건지
  volume: number; // 볼륨크기
  playbackRate: number; // 배속
  played: number; // 재생의 정도 (value)
  seeking: boolean; // 재생바를 움직이고 있는지
  duration: number; // 전체 시간
  music: MusicItemType;
  isrepeat: boolean;
  currentTime: string;
  endTime: string;
}
export interface PlayListType {
  genre_title: string;
  genre_id: number;
  music_list: MusicItemType[];
}