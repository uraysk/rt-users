import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { memo } from "react";

type Props = {
    onOpen: () => void;
};
export const MenuButton = memo(({ onOpen }: Props) => {
    return (
        <IconButton
            display={{ base: "flex", md: "none" }}
            flexDirection="column"
            alignItems="flex-end"
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            onClick={onOpen}
            aria-label="Open Menu"
            marginLeft="15%"
        />
    );
});

MenuButton.displayName="MenuButton";