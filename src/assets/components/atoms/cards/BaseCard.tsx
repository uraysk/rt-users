import { FC, memo, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
};
export const BaseCard: FC<Props> = memo(({ children }) => {
    return (
        <Flex
            direction="column"
            boxShadow="md"
            bg="white"
            color="black"
            borderRadius="3px"
            p={4}
            width="400px"
        >
            {children}
        </Flex>
    );
});
