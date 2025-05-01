import { memo, VFC } from "react";
import { LoginCard } from "../organisms/LoginCard";
import { useLogin } from "../hooks/useLogin";

export const Login: VFC = memo(() => {
    const { userId, setUserId, handleLogin, isSuccess, loading } = useLogin();
    return (
        <>
            <LoginCard
                userId={userId}
                onChangeUserId={(value) => setUserId(value)}
                onLogin={handleLogin}
                loading={loading}
            />
        </>
    );
});

Login.displayName = "Login";
