import { FC, memo } from "react";
import {
    Flex,
    Heading,
    Link as ChaLink,
    Box,
    useDisclosure,
} from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";
import { MenuButton } from "../atoms/menus/MenuButton";
import { MenuDrawer } from "../molcules/MenuDrawer";

export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex
            as="nav"
            bg="#62A8A8"
            color="gray.50"
            padding="30px"
            align="center"
            justify="space-between"
            alignItems="flex-end"
        >
            <Flex align="center" _hover={{ cursor: "pointer" }}>
                <Heading as={RRLink} to="/home">
                    User Manager
                </Heading>
            </Flex>

            {/* PC size */}
            <Flex
                display={{ base: "none", md: "flex" }}
                padding="0 5px"
                fontSize="sm"
                flexGrow={2}
            >
                <Box>
                    <ChaLink as={RRLink} to="/home/users" margin="0 10px">
                        Users List
                    </ChaLink>
                </Box>
                <ChaLink as={RRLink} to="/home/setting">
                    Setting
                </ChaLink>
            </Flex>

            {/* PS size hambuger*/}
            <MenuButton onOpen={onOpen} />
            <MenuDrawer isOpen={isOpen} onClose={onClose} />
        </Flex>
    );
});

Header.displayName = 'Header';