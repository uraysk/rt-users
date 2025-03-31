import { Box, Text} from "@chakra-ui/react";
import { FC, memo } from "react";
import { BaseInput } from "../atoms/Input/BaseInput";

type Props ={
    title:string
    placeholder:string
}
export const InputText:FC<Props> = memo (({title, placeholder}) => {
    return (
        <Box mb={4}>
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
            <BaseInput placeholder={placeholder} type="text"/>
        </Box>
    )
})