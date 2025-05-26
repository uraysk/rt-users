import { createContext } from "react";
import { User } from "../../types/user";

type Props = {
    loginUser: User | null;
    setLoginUser: (user: User | null) => void;
};

export const LoginUserContext = createContext<Props>({
    loginUser: null,
    //next-line以下で何のエラーを無効にするか指定する
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setLoginUser: () => {},
});
