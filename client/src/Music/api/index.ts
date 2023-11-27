import type {
  PostUserPlayListType,
  MusicItemType,
  GenreListItemType,
  RequestGenreMusicType,
  ResponseGenreMusicType,
  MyPlayListType,
} from 'Music/types';
import {
  USER_PLAYLIST_POST_URI,
  GenreList_GET_URI,
  USER_PLAYLIST_GET_URI,
  USER_PLAYLIST_DELETE_URI,
} from 'Music/constants/api';
import { Get, Post, Delete } from 'shared/utils/axios';

export const postUserPlayList = async (data: PostUserPlayListType): Promise<MusicItemType[]> => {
  const playList = await Post<MusicItemType[]>(`${USER_PLAYLIST_POST_URI}`, data);
  return playList;
};

export const getUserPlayList = async (): Promise<MyPlayListType[]> => {
  const myPlayListNameList = await Get<MyPlayListType[]>(USER_PLAYLIST_GET_URI);
  return myPlayListNameList;
};

export const getGenreData = async (url: string): Promise<GenreListItemType[]> => {
  const genreList = await Get<GenreListItemType[]>(url);
  return genreList;
};
export const getByMusicListId = async (obj: RequestGenreMusicType): Promise<ResponseGenreMusicType> => {
  const { id, size, page } = obj;
  const genreMusicList = await Get<ResponseGenreMusicType>(`${GenreList_GET_URI}/${id}?size=${size}&page=${page}`);
  return genreMusicList;
};
export const deleteMyPlayListByTitle = async (param: string): Promise<string> => {
  const url = `${USER_PLAYLIST_DELETE_URI}/${param}`;
  const deletedMyPlayListTitle = await Delete<string>(url);
  return deletedMyPlayListTitle;
};
