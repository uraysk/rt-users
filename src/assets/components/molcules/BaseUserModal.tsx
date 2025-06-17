import { Stack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { memo, VFC } from "react";
import { User } from "../types/user";

type Props = {
    user: User;
    readOnly?: boolean;
    onChangeUser?: (field: keyof User, value: string) => void;
};

export const BaseUserModal: VFC<Props> = memo(
    ({ user, readOnly = false, onChangeUser }) => {
        const handleChange =
            (field: keyof User) => (e: React.ChangeEvent<HTMLInputElement>) => {
                if (onChangeUser && !readOnly) {
                    onChangeUser(field, e.target.value);
                }
            };
        return (
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel>名前</FormLabel>
                    <Input
                        value={user.name || ""}
                        type="text"
                        isReadOnly={readOnly}
                        onChange={handleChange("name")}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>ユーザーネーム</FormLabel>
                    <Input
                        value={user.username || ""}
                        type="text"
                        isReadOnly={readOnly}
                        onChange={handleChange("username")}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>メールアドレス</FormLabel>
                    <Input
                        value={user.email || ""}
                        type="email"
                        isReadOnly={readOnly}
                        onChange={handleChange("email")}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>TEL</FormLabel>
                    <Input
                        value={user.phone || ""}
                        type="tel"
                        isReadOnly={readOnly}
                        onChange={handleChange("phone")}
                    />
                </FormControl>
            </Stack>
        );
    },
);

BaseUserModal.displayName = "BaseUserModal";
