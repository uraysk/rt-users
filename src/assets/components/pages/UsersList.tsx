import { memo, useCallback, useEffect, useState, VFC } from "react";
import { Wrap, WrapItem, Spinner, Center } from "@chakra-ui/react";

import { UserCard } from "../organisms/UserCard";
import { useUserDetail } from "../hooks/useUserDetail";
import { UserModal } from "../organisms/UserModal";
import { User } from "../types/user";

export const UsersList: VFC = memo(() => {
    const { getUser, user, loading } = useUserDetail();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const onClickUser = useCallback((user: User) => {
        setSelectedUser(user);
        setIsOpen(true);
    }, []);

    useEffect(() => {
        getUser();
        //↓直下のコードにESLintを反映しない（hooksの依存配列）
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
                                onClick={() => onClickUser(user)}
                            />
                        </WrapItem>
                    ))}
                </Wrap>
            )}
            <UserModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                user={selectedUser}
            />
        </>
    );
});

UsersList.displayName = "UsersList";
