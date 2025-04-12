import React, { useState } from "react";
import  axios  from "axios";
import { User } from "../types/user";

type loginInfo = {
    userId: string;
    setUserId: React.Dispatch<React.SetStateAction<string>>;
    handleLogin: () => Promise<void>;
    isSuccess: boolean | null;
    loading: boolean;
}

export const useLogin = ():loginInfo => {
    const [userId, setUserId] = useState<string>("");
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async() =>{
        setLoading(true);
        try{
            const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
            const match = res.data.find((user)=> String(user.id) === userId);
            setIsSuccess(!!match);
        }
        catch(error)
        {
            console.error("ログインエラー: ", error);
            setIsSuccess(false);
        }
        finally{
            setLoading(false);
        }
        
    }
    return {
        userId,
        setUserId,
        handleLogin,
        isSuccess,
        loading,
      };
}

