import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { User } from "../types/user";
import { useDisplayMessage } from "../hooks/useDisplayMessage";

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

    useEffect(() => {
        return () => {
            // コンポーネントがアンマウントされるときに状態更新を防ぐためのクリーンアップ
            setLoading(false);
            setIsSuccess(null);
        };
    }, []); // 空の依存配列で一度だけクリーンアップが実行される

    const handleLogin = async () => {
        setLoading(true);
        try {
            const res = await axios.get<User[]>(
                "https://jsonplaceholder.typicode.com/users",
            );
            const match = res.data.find((user) => String(user.id) === userId);
            setIsSuccess(!!match);
            if (match && String(match.id) === userId) {
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
            setLoading(false); // 非同期処理が完了した後の状態更新
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
