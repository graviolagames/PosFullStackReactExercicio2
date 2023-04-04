import {Movies} from "./views/Movies";
import {
    createBrowserRouter,
    RouterProvider
}from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Movies/>,
    },
]);

export const ApplicationRoutes = () => <RouterProvider router={router}/>