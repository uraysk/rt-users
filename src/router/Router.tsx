import { Route, Switch } from "react-router-dom"
import { Login } from "../assets/components/pages/Login"
import { HomeRoutes } from "./HomeRoutes"

export const Router = () =>{
    return(
        <Switch>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route 
                path="/home"
                render={({ match : { url } }) =>(
                    <Switch>
                        {HomeRoutes.map((route)=>(
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                {route.children}
                            </Route>  
                        ))}
                    </Switch>
                )}
             />
        </Switch>
    )};