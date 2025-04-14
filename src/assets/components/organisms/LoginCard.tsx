import { FC, memo } from "react";
import { Flex } from "@chakra-ui/react";

import { BaseButton } from "../atoms/buttons/BaseButton";
import { TitleCard } from "../molcules/TitleCard";
import { BaseInput } from "../atoms/Input/BaseInput";

type Props = {
    userId: string;
    onChangeUserId: (value: string)=> void;
    onLogin:()=> Promise<void>;
    loading: boolean;
}
export const LoginCard:FC<Props> = memo(({userId, onChangeUserId, onLogin, loading}) => {
    return (
        <Flex justify="center" align="center" height="100vh" p={4}>
            <TitleCard title="User Manager">
                <BaseInput placeholder="ユーザーIDを入力してください" type="text" value={userId} onChange={(e)=>onChangeUserId(e.target.value)}/>
                <BaseButton bgColor="teal.400" onClick={onLogin} isLoading={loading} >Login</BaseButton>
            </TitleCard>
        </Flex>
    );
});

LoginCard.displayName="LoginCard";

