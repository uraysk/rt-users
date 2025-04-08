import { memo } from "react";
import { Flex, Heading, Link as ChaLink, Box} from "@chakra-ui/react";
import { Link as RRLink } from "react-router-dom";

export const Header = memo(() =>{
    return(
        <Flex as="nav" bg="#62A8A8" color="gray.50" padding="30px" align="center" alignItems="flex-end">

            <Heading as={RRLink} to="/home">User Manager</Heading>

            {/* PC size */}
            <Flex display={{base:"none", md:"flex"}} padding="0 5px" flexDirection="row">
                <Box><ChaLink as={RRLink} to="/home/users" margin="0 10px">Users List</ChaLink></Box>
                <ChaLink as={RRLink} to="/home/setting">Setting</ChaLink>
            </Flex>
            {/* PS size hambuger*/}   
        </Flex>
)})