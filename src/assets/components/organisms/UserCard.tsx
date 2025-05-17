import { FC, memo } from "react";
import { Text, Stack, Image } from "@chakra-ui/react";

import { BaseCard } from "../atoms/cards/BaseCard";

type Props = {
    imgUrl: string;
    userName: string;
    name: string;
};
export const UserCard: FC<Props> = memo(({ imgUrl, userName, name }) => {
    return (
        <BaseCard w="260px" h="300px" borderRadius="10px" shadow="md">
            <Stack textAlign="center">
                <Image
                    borderRadius="full"
                    boxSize="160px"
                    src={imgUrl}
                    alt={userName}
                    m="auto"
                    _hover={{ cursor: "pointer", opacity: 0.8 }}
                />
                <Text fontSize="lg" fontWeight="bold">
                    {userName}
                </Text>
                <Text fontSize="sm" color="gray.400">
                    {name}
                </Text>
            </Stack>
        </BaseCard>
    );
});

UserCard.displayName = "UserCard";
