import {Navigate, useRoutes} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {AuthPage} from "../pages/AuthPage/AuthPage";
import {useAppSelector} from "../store";

export const AppRouter = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const routes = (isAuth: boolean) => [
        {
            path: '/*',
            element: isAuth ? <MainPage/> : <Navigate to="/auth"/>,
        },

        {
            path: '/auth',
            element: !isAuth ? <AuthPage/> : <Navigate to="/"/>,
        },
    ];

    const routing = useRoutes(routes(isAuth))

    return (
        <>
            {routing}
        </>
    )
}
