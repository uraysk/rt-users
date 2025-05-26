import { memo, ReactNode, useState, VFC } from "react";
import { User } from "../../types/user";
import { LoginUserContext } from "../context/LoginUserContext";
type Props = {
    children: ReactNode;
};
export const LoginUserProvider: VFC<Props> = memo(({ children }) => {
    const [loginUser, setLoginUser] = useState<User | null>(null);

    return (
        <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
            {children}
        </LoginUserContext.Provider>
    );
});

LoginUserProvider.displayName = "LoginUserProvider";
