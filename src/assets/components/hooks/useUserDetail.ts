import { useEffect, useState } from "react";
import { User } from "../types/user";
import axios from "axios";

type userDetails = {
    user: User | null;
    loading: boolean;
    error: string | null;
};
export const useUserDetail = (userId: string): userDetails => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!userId) return;
        const fetchUser = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await axios.get<User[]>(
                    "https://jsonplaceholder.typicode.com/users",
                );
                const foundUser = res.data.find(
                    (user) => String(user.id) === userId,
                );
                if (foundUser) {
                    setUser(foundUser);
                } else {
                    setUser(null);
                    setError("ユーザーが見つかりません");
                }
            } catch (error) {
                setError("取得に失敗しました");
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [userId]);

    return {
        user,
        loading,
        error,
    };
};
