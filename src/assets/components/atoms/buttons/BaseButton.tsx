import { memo, ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    children: ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    bgColor?: string;
    isLoading?: boolean;
};
export const BaseButton = memo(({ children, onClick, type = "button", isLoading=false, bgColor }: Props)  => {
        return (
            <Button
                onClick={onClick}
                type={type}
                disabled={isLoading}
                bg={bgColor || "blue.500"}
                color="white"
                _hover={{ bg: bgColor ? "gray.600" : "blue.600" }}
            >
                {isLoading ? "Loading..." : children}
            </Button>
        );
    },
);

BaseButton.displayName = 'BaseButton';
