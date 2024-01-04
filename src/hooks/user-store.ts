import { create } from "zustand";

interface UserStore {
  token: string;
  setToken: (token: string) => void;
}

const setToken = (token: string): string => {
  return token;
};

export const useUserStore = create<UserStore>((set) => ({
  token: "" as string,
  setToken: (token: string) =>
    set(() => ({
      token: setToken(token),
    })),
}));
