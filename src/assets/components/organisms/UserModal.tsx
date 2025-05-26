import {
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { User } from "../types/user";
import { memo, VFC } from "react";
import { BaseUserModal } from "../molcules/BaseUserModal";
import { BaseButton } from "../atoms/buttons/BaseButton";
import { useEditUser } from "../hooks/useEditUser";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    readOnly?: boolean;
};

export const UserModal: VFC<Props> = memo(
    ({ isOpen, onClose, user, readOnly }) => {
        const {
            editingUser,
            isReadOnly,
            handleChangeUser,
            handleSave,
            handleCancel,
        } = useEditUser({ user, readOnly, onClose });

        return (
            <>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>ユーザー情報</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            {editingUser ? (
                                <BaseUserModal
                                    user={editingUser}
                                    readOnly={isReadOnly}
                                    onChangeUser={handleChangeUser}
                                />
                            ) : (
                                <p>ユーザー情報がありません</p>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            {!isReadOnly && (
                                <HStack spacing={4}>
                                    <BaseButton
                                        bgColor="#62A8A8"
                                        onClick={handleSave}
                                    >
                                        保存
                                    </BaseButton>
                                    <BaseButton
                                        bgColor="none"
                                        onClick={handleCancel}
                                    >
                                        キャンセル
                                    </BaseButton>
                                </HStack>
                            )}
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        );
    },
);

UserModal.displayName = "UserModal";
