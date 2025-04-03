import { Route, Switch } from "react-router-dom";
import { Login } from "../assets/components/pages/Login";
import { HomeRoutes } from "./HomeRoutes";
import { HeaderLayout } from "../assets/components/templates/HeaderLayout";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route
                path="/home"
                render={({ match: { url } }) => (
                    <Switch>
                        {HomeRoutes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                <HeaderLayout>{route.children}</HeaderLayout>
                            </Route>
                        ))}
                    </Switch>
                )}
            />
        </Switch>
    );
};
