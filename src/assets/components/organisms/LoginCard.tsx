import { memo } from "react"
import {Flex} from "@chakra-ui/react"

import { BaseButton } from "../atoms/buttons/BaseButton"
import { TitleCard } from "../molcules/TitleCard"
import { BaseInput } from "../atoms/Input/BaseInput"

export const LoginCard = memo(()=>{
    return(
            <Flex justify="center" align="center" height="100vh" p={4}>
                <TitleCard title="User Manager">
                    <BaseInput placeholder="User ID" />
                    <BaseButton bgColor="teal.400">Login</BaseButton>
                </TitleCard>   
            </Flex>   
    )
}) 