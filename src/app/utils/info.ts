import { SetStateAction, createContext, useContext, Dispatch } from 'react';

type Info = { key: string; keyword: string };

const InfoContext = createContext({
  info: {
    key: '',
    keyword: '',
  },
  setInfo: (() => {}) as Dispatch<SetStateAction<Info>>,
});

const useInfoContext = () => {
  return useContext(InfoContext);
};

export { InfoContext, useInfoContext };
