import { useToast } from "@chakra-ui/react";

type ToastOptions = {
    title: string;
    description: string;
    status: "success" | "error" | "warning" | "info";
    duration?: number;
    isClosable?: boolean;
    position?:
        | "top"
        | "top-right"
        | "top-left"
        | "bottom"
        | "bottom-right"
        | "bottom-left";
    variant?: "solid" | "subtle" | "left-accent" | "top-accent";
    colorScheme?: string;
};

type DisplayToast = {
    showMessage: (options: ToastOptions) => void;
};

export const useDisplayMessage = (): DisplayToast => {
    const toast = useToast();
    const showMessage = ({
        title,
        description,
        status,
        duration = 1000,
        isClosable = true,
        position = "top",
        variant = "solid",
    }: ToastOptions) => {
        toast({
            title,
            description,
            status,
            duration,
            isClosable,
            position,
            variant,
        });
    };

    return { showMessage };
};
