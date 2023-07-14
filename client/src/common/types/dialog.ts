export type ConfirmType = 'Logout' | 'PlayListLoad' | 'PlayListSave' | 'PlayListDelete';
export type ConfirmMessageType = { [K in ConfirmType]: string };

export type ConfirmFailType = 'PlayListSaveFail';
export type ConfirMessageFailType = { [K in ConfirmFailType]: string };

export type DialogState = {
  alarm: {
    isOpen: boolean;
    message: string;
  };
  confirm: {
    isOpen: boolean;
    message: string;
    type: ConfirmType | '';
  };
  music: {
    isOpen: boolean;
    name: string;
    img_url: string;
  };
  deletePlayList: {
    title: string;
  };
};
