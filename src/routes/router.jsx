import { createBrowserRouter } from "react-router-dom";

import MainLayaout from "../layouts/MainLayout";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayaout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);


