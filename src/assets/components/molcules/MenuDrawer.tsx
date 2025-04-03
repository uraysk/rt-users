import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerFooter,
    DrawerBody,
    Box,
    Button,
    Link as ChaLink,
} from "@chakra-ui/react";
import { memo } from "react";
import { Link as RRLink } from "react-router-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const MenuDrawer = memo(({ isOpen, onClose }: Props) => {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                    <Box mb={4}>
                        <ChaLink as={RRLink} to="/home/users" onClick={onClose}>
                            Users List
                        </ChaLink>
                    </Box>
                    <ChaLink as={RRLink} to="/home/setting" onClick={onClose}>
                        Setting
                    </ChaLink>
                </DrawerBody>
                <DrawerFooter>
                    <Button colorScheme="blue" onClick={onClose}>
                        Close
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
});
