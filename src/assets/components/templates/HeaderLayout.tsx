import { FC, memo, ReactNode } from "react";
import { Header } from "../atoms/layout/Header";

type Props = {
    children: ReactNode;
};

export const HeaderLayout: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    );
});

HeaderLayout.displayName="HeaderLayout";