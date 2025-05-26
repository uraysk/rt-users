import { useContext, useEffect, useState } from "react";
import { User } from "../types/user";
import { LoginUserContext } from "../atoms/context/LoginUserContext";

type EditUserProps = {
    user: User | null;
    readOnly?: boolean;
    onClose: () => void;
};

type EditUserReturn = {
    editingUser: User | null;
    isReadOnly?: boolean;
    handleChangeUser: (field: keyof User, value: string) => void;
    handleSave: () => void;
    handleCancel: () => void;
};

export const useEditUser = ({
    user,
    readOnly,
    onClose,
}: EditUserProps): EditUserReturn => {
    const { loginUser } = useContext(LoginUserContext);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    const isReadOnly =
        readOnly !== undefined ? readOnly : !(loginUser?.id === 10);

    useEffect(() => {
        setEditingUser(user);
    }, [user]);

    const handleChangeUser = (field: keyof User, value: string) => {
        if (editingUser) {
            setEditingUser({
                ...editingUser,
                [field]: value,
            });
        }
    };

    const handleSave = () => {
        console.log("保存されたユーザー情報:", editingUser);
        onClose();
    };

    const handleCancel = () => {
        setEditingUser(user);
        onClose();
    };
    return {
        editingUser,
        isReadOnly,
        handleChangeUser,
        handleSave,
        handleCancel,
    };
};
