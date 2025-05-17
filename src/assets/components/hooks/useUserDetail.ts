import { useCallback, useState } from "react";
import axios from "axios";

import { useDisplayMessage } from "./useDisplayMessage";
import { User } from "../types/user";

type userReturn = {
    user: User[] | null;
    loading: boolean;
    getUser: () => void;
};

export const useUserDetail = (): userReturn => {
    const { showMessage } = useDisplayMessage();
    const [user, setUser] = useState<Array<User>>([]);
    const [loading, setLoading] = useState(false);

    const getUser = useCallback(() => {
        //Initializations
        setLoading(true);
        axios
            .get<User[]>("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUser(res.data))
            .catch(() => {
                showMessage({
                    title: "ERROR",
                    description: "ユーザ情報が取得できませんでした",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [showMessage]);

    return { user, loading, getUser };
};
