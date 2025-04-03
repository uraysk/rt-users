import { FC, memo, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BaseCard } from "../atoms/cards/BaseCard";

type Props = {
    title: string;
    children: ReactNode;
};
export const TitleCard: FC<Props> = memo(({ children, title }) => {
    return (
        <BaseCard>
            <Box mb={2} borderBottom="1px solid #ddd" pb={2} align="center">
                <Text fontSize="2xl" fontWeight="bold">
                    {title}
                </Text>
            </Box>
            {children}
        </BaseCard>
    );
});
