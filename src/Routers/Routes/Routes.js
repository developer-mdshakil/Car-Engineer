import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Home from "../../Pages/Home/Home/Home";
import Orders from "../../Pages/Orders/Orders";
import SignIN from "../../Pages/SignIN/SignIN";
import SignUP from "../../Pages/SignUP/SignUP";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: '/orders',
                element: <Orders></Orders>,
            }
        ]
    }
])