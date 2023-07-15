import { cloneDeep } from 'lodash';
import type { MusicItemType } from 'Music/types';

export const selectPrevMusic = (playerItems: readonly MusicItemType[], music: MusicItemType) => {
  const prevMusicIndex = playerItems.findIndex((item) => music.name === item.name) - 1;
  return prevMusicIndex < 0 ? playerItems[playerItems.length - 1] : playerItems[prevMusicIndex];
};
export const selectNextMusic = (playerItems: readonly MusicItemType[], music: MusicItemType) => {
  const nextMusicIndex = playerItems.findIndex((item) => music.name === item.name) + 1;
  return nextMusicIndex < playerItems.length ? playerItems[nextMusicIndex] : playerItems[0];
};

export const shuffleMusic = (playerItems: MusicItemType[]) => {
  const newPlayerItems = cloneDeep(playerItems);
  for (let index = newPlayerItems.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    swapArray(newPlayerItems, index, randomIndex);
  }
  return newPlayerItems;
};
export const formatMusicTime = (seconds: number) => {
  if (isNaN(seconds)) {
    return '00:00';
  }
  const date = new Date(seconds * 1000);
  const minute: number = date.getUTCMinutes();
  const second: string = pad(date.getUTCSeconds() as number);

  return `${minute}:${second}`;
};
const pad = (num: number) => ('0' + num).slice(-2);
const swapArray = (newPlayerItems: MusicItemType[], index: number, randomIndex: number) =>
  ([newPlayerItems[index], newPlayerItems[randomIndex]] = [newPlayerItems[randomIndex], newPlayerItems[index]]);
