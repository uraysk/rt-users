import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { LoginUserProvider } from "./assets/components/atoms/providers/LoginUserProvider";

export default function App() {
    return (
        <ChakraProvider>
            <LoginUserProvider>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </LoginUserProvider>
        </ChakraProvider>
    );
}
