import { Home } from "../assets/components/pages/Home";
import { Page404 } from "../assets/components/pages/Page404";
import { Setting } from "../assets/components/pages/Setting";
import { UsersList } from "../assets/components/pages/UsersList";

export const HomeRoutes = [
    {
        path: "",
        exact: true,
        children: <Home />,
    },
    {
        path: "/users",
        exact: false,
        children: <UsersList />,
    },
    {
        path: "/setting",
        exact: false,
        children: <Setting />,
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />,
    },
];
