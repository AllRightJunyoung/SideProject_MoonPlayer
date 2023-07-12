import type { MusicItemType } from 'Music/types';
// 한글 숫자만 허용

export const myPlayListInputValidation = (input: string) => {
  if (checkMyPlayListInputLength(input)) {
    return true;
  } else {
    alert('입력한 제목이 30글자 이내인지 확인하시오!');
    return false;
  }
};

export const myPlayListLengthValidation = (playList: MusicItemType[]) => {
  if (playList.length) return true;
  alert('재생목록에 음악이 존재하지않습니다!');
  return false;
};

const checkMyPlayListInputLength = (input: string) => {
  return input.length <= 30;
};
