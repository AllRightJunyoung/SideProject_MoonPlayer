import type { MusicItemType } from 'Music/types';
// 한글 숫자만 허용

export const myPlayListInputValidation = (input: string) => {
  if (checkMyPlayListInputLength(input) && checkMyPlayListInputText(input)) {
    return true;
  } else {
    alert('특수문자만 들어갔는지,글자가 4개이상 10개이하인지 확인하시오');
    return false;
  }
};

export const myPlayListLengthValidation = (playList: MusicItemType[]) => {
  if (playList.length) return true;
  alert('재생목록에 음악이 존재하지않습니다!');
  return false;
};

const checkMyPlayListInputText = (input: string) => {
  const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]*$/;
  return regex.test(input);
};

const checkMyPlayListInputLength = (input: string) => {
  return input.length >= 4 && input.length <= 10;
};
