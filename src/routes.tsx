import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
    },
    {
        path: "/another",
        element: <h1>Another</h1>,
    },
])


export default router