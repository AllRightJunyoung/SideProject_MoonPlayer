import type {
  RegisterMyPlayListType,
  MusicItemType,
  GenreItemType,
  PlayListType,
  MyPlayListType,
  RequestMyPlayListType,
} from 'Music/types';
import {
  MyPLAYLIST_CREATE_URI,
  GenreList_GET_URI,
  MyPLAYLIST_GET_URI,
  MyPLAYLIST_DELETE_URI,
} from 'Music/constants/api';
import { Get, Post, Delete } from 'common/utils/axios';

export const registerMyPlayList = async (data: RegisterMyPlayListType): Promise<MusicItemType[]> => {
  const playList = await Post<MusicItemType[]>(`${MyPLAYLIST_CREATE_URI}`, data);
  return playList;
};

export const getMyPlayList = async (token: RequestMyPlayListType): Promise<MyPlayListType[]> => {
  const myPlayListNameList = await Post<MyPlayListType[]>(MyPLAYLIST_GET_URI, token);
  return myPlayListNameList;
};

export const getGenreData = async (url: string): Promise<GenreItemType[]> => {
  const genreList = await Get<GenreItemType[]>(url);
  return genreList;
};
export const getByMusicListId = async (id: number): Promise<PlayListType> => {
  const genreMusicList = await Get<PlayListType>(`${GenreList_GET_URI}/${id}`);
  return genreMusicList;
};
export const deleteMyPlayListByTitle = async (param: string): Promise<string> => {
  const url = `${MyPLAYLIST_DELETE_URI}/${param}`;
  const deletedMyPlayListTitle = await Delete<string>(url);
  return deletedMyPlayListTitle;
};
