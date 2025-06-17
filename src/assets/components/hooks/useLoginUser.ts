import { createContext } from "react";
import { LoginUserContext } from "../atoms/context/LoginUserContext";
import { User } from "../types/user";

export type LoginUserContext = {
    loginUser: User | null;
    setLoginUser: (user: User | null) => void;
};

const defaulContextValue: LoginUserContext = {
    loginUser: null,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLoginUser: () => {},
};
export const useLoginUser = createContext<LoginUserContext>(defaulContextValue);
