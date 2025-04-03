import { Input } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
    placeholder: string;
    type?: string;
};
export const BaseInput = memo(({ placeholder, type }: Props) => {
    return (
        <Input
            placeholder={placeholder}
            type={type}
            size="lg"
            mt={8}
            mb={4}
            color="gray.500"
            borderColor="gray.300"
            _placeholder={{ color: "gray.400", opacity: 1 }}
        />
    );
});

BaseInput.displayName = "BaseInput";