import { memo, ReactNode } from "react";
import { Header } from "../organisms/Header";

export const HeaderLayout = memo(({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
});

HeaderLayout.displayName="HeaderLayout";