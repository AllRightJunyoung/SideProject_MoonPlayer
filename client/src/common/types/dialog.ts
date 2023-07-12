export type ConfirmType = 'Logout' | 'PlayListLoad' | 'PlayListSave' | 'PlayListSaveFail';
export type ConfirMessageType = { [K in ConfirmType]: string };

export type DialogState = {
  alarm: {
    isOpen: boolean;
    message: string;
  };
  confirm: {
    isOpen: boolean;
    message: string;
    type: 'Logout' | 'Load' | 'Save' | '';
  };
  music: {
    isOpen: boolean;
    name: string;
    img_url: string;
  };
};
