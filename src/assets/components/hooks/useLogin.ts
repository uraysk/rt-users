import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/user";
import { useDisplayMessage } from "../hooks/useDisplayMessage";
import { LoginUserContext } from "../atoms/context/LoginUserContext";

type loginInfo = {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: () => Promise<void>;
    isSuccess: boolean | null;
    loading: boolean;
};

export const useLogin = (): loginInfo => {
    const [userId, setUserId] = useState<string>("");
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { showMessage } = useDisplayMessage();
    const { setLoginUser } = useContext(LoginUserContext);

    useEffect(() => {
        return () => {
            setLoading(false);
            setIsSuccess(null);
        };
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const res = await axios.get<User[]>(
                "https://jsonplaceholder.typicode.com/users",
            );
            const match = res.data.find((user) => String(user.id) === userId);
            setIsSuccess(!!match);
            if (match && String(match.id) === userId) {
                setLoginUser(match);
                history.push("/Home");
                showMessage({
                    title: "Success!!",
                    description: "ログインできました！おめ〜🎉",
                    status: "success",
                });
            } else {
                showMessage({
                    title: "Failed...",
                    description: "IDが間違ってるので入れません🧐",
                    status: "error",
                });
            }
        } catch (error) {
            console.error("ログインエラー: ", error);
            setIsSuccess(false);
        } finally {
            setLoading(false);
        }
    };
    return {
        userId,
        setUserId,
        handleLogin,
        isSuccess,
        loading,
    };
};
