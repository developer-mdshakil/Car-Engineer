import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SignIN from "../../Pages/SignIN/SignIN";
import SignUP from "../../Pages/SignUP/SignUP";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIN></SignIN>
            },
            {
                path: '/signup',
                element: <SignUP></SignUP>
            }
        ]
    }
])