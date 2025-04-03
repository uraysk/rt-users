import { Box, Text } from "@chakra-ui/react";
import {  memo } from "react";
import { BaseInput } from "../atoms/Input/BaseInput";

type Props = {
    title: string;
    placeholder: string;
};
export const InputText = memo(({ title, placeholder }: Props) => {
    return (
        <Box mb={4}>
            <Text fontSize="2xl" fontWeight="bold">
                {title}
            </Text>
            <BaseInput placeholder={placeholder} type="text" />
        </Box>
    );
});

InputText.displayName = 'InputText';
