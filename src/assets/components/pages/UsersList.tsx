import { memo, useEffect, VFC } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";

import { UserCard } from "../organisms/UserCard";
import { useUserDetail } from "../hooks/useUserDetail";

export const UsersList: VFC = memo(() => {
    const { getUser, user, loading } = useUserDetail();
    useEffect(() => {
        getUser();
        //↓直下のコードにESLintを反映しない
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {loading ? (
                <Center h="100vh">
                    <Spinner />
                </Center>
            ) : (
                <Wrap p={{ base: 4, md: 10 }} gap="20px" justify="center">
                    {user?.map((user) => (
                        <WrapItem key={user.id}>
                            <UserCard
                                imgUrl="https://picsum.photos/200/300"
                                userName={user.username}
                                name={user.name}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
        </>
    );
});

UsersList.displayName = "UsersList";
