import type {
  RegisterMyPlayListType,
  MusicItemType,
  GenreListItemType,
  GenreMusicType,
  MyPlayListType,
  RequestMyPlayListType,
} from 'Music/types';
import {
  MyPLAYLIST_CREATE_URI,
  GenreList_GET_URI,
  MyPLAYLIST_GET_URI,
  MyPLAYLIST_DELETE_URI,
} from 'Music/constants/api';
import { Get, Post, Delete } from 'shared/utils/axios';

export const registerMyPlayList = async (data: RegisterMyPlayListType): Promise<MusicItemType[]> => {
  const playList = await Post<MusicItemType[]>(`${MyPLAYLIST_CREATE_URI}`, data);
  return playList;
};

export const getMyPlayList = async (token: RequestMyPlayListType): Promise<MyPlayListType[]> => {
  const myPlayListNameList = await Post<MyPlayListType[]>(MyPLAYLIST_GET_URI, token);
  return myPlayListNameList;
};

export const getGenreData = async (url: string): Promise<GenreListItemType[]> => {
  const genreList = await Get<GenreListItemType[]>(url);
  return genreList;
};
export const getByMusicListId = async (id: number): Promise<GenreMusicType> => {
  const genreMusicList = await Get<GenreMusicType>(`${GenreList_GET_URI}/${id}`);
  return genreMusicList;
};
export const deleteMyPlayListByTitle = async (param: string): Promise<string> => {
  const url = `${MyPLAYLIST_DELETE_URI}/${param}`;
  const deletedMyPlayListTitle = await Delete<string>(url);
  return deletedMyPlayListTitle;
};
