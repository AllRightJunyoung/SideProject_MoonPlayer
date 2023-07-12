import type { RequestMyPlayListType, MusicItemType, GenreItemType, PlayListType } from 'Music/types';
import { MyPLAYLIST_POST_URI, GenreList_GET_URI } from 'Music/constants/api';
import { Get, Post } from 'common/utils/axios';

export const postMyPlayList = async (data: RequestMyPlayListType): Promise<MusicItemType[]> => {
  const playList = await Post<MusicItemType[]>(`${MyPLAYLIST_POST_URI}`, data);
  console.log(playList);
  return playList;
};

export const getGenreData = async (url: string): Promise<GenreItemType[]> => {
  const genreList = await Get<GenreItemType[]>(url);
  return genreList;
};
export const getByMusicListId = async (id: number): Promise<PlayListType> => {
  const genreMusicList = await Get<PlayListType>(`${GenreList_GET_URI}/${id}`);
  return genreMusicList;
};
