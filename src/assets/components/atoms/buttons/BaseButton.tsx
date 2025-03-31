import { FC, memo, ReactNode } from "react"
import { Button } from "@chakra-ui/react"

type Props = {
    children:ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" |"reset";
    bgColor?: string;
}
export const BaseButton:FC<Props> = memo(({children, onClick, type="button", bgColor})=>{    
    return(
        <Button onClick={onClick} type={type} bg={bgColor || "blue.500"} color="white" _hover={{ bg: bgColor ? "gray.600" : "blue.600" }}  >{children}</Button>
    )
})