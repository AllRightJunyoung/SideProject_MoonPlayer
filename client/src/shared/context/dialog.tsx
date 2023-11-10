/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import { DialogState, ConfirmType, ConfirmMessageType } from '../types/dialog';

const DEFAULT_STATE: DialogState = {
  alarm: {
    isOpen: false,
    message: '',
  },
  confirm: {
    isOpen: false,
    message: '',
    type: '',
  },
};
const confirmMessage: ConfirmMessageType = {
  Logout: '로그아웃 하시겠습니까?',
  PlayListLoad: '재생목록을 가져오시겠습니까?',
  PlayListSave: '현재 재생목록을 저장하시겠습니까?',
  PlayListDelete: '선택한 플레이리스트를 삭제하시겠습니까?',
};

export const DiaLogContext = createContext({
  state: DEFAULT_STATE,
  showAlarm: function (message: string) {},
  closeAlarm: function () {},
  showConfirm: function (type: ConfirmType) {},
  closeConfirm: function () {},
});
export const DiaLogContextProvider = (props) => {
  const [activeDialog, setActiveDialog] = useState<DialogState>(DEFAULT_STATE);

  const showAlarmHandler = (message: string) => {
    setActiveDialog((prev) => ({
      ...prev,
      alarm: {
        isOpen: true,
        message,
      },
    }));
  };

  const closeAlarmHandler = () => {
    setActiveDialog((prev) => ({
      ...prev,
      alarm: {
        isOpen: false,
        message: '',
      },
    }));
  };

  const showConfirmHandler = (type: ConfirmType) => {
    const confirmMsg = confirmMessage[type];
    setActiveDialog((prev) => ({
      ...prev,
      confirm: {
        isOpen: true,
        message: confirmMsg,
        type: type,
      },
    }));
  };
  const closeConfirmHandler = () => {
    setActiveDialog((prev) => ({
      ...prev,
      confirm: {
        isOpen: false,
        message: '',
        type: '',
      },
    }));
  };

  const context = {
    state: activeDialog,
    showAlarm: showAlarmHandler,
    closeAlarm: closeAlarmHandler,
    showConfirm: showConfirmHandler,
    closeConfirm: closeConfirmHandler,
  };
  return <DiaLogContext.Provider value={context}>{props.children}</DiaLogContext.Provider>;
};
