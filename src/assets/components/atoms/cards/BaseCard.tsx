import { FC, memo, ReactNode } from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
} & FlexProps;
export const BaseCard: FC<Props> = memo(({ children, ...props }) => {
    return (
        <Flex
            direction="column"
            boxShadow="md"
            bg="white"
            color="black"
            borderRadius="3px"
            p={4}
            {...props}
        >
            {children}
        </Flex>
    );
});

BaseCard.displayName = "BaseCard";
