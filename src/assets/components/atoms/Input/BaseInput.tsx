import { Input } from "@chakra-ui/react";
import { memo } from "react";

type Props = {
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export const BaseInput = memo(
    ({ placeholder, type, value, onChange }: Props) => {
        return (
            <Input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                size="lg"
                mt={8}
                mb={4}
                color="gray.500"
                borderColor="gray.300"
                _placeholder={{ color: "gray.400", opacity: 1 }}
            />
        );
    },
);

BaseInput.displayName = "BaseInput";
