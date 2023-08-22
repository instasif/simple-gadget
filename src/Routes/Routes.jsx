import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from './../Pages/Home/Home';
import ProductsDetails from "../Pages/ProductDetails/ProductsDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/products/:id",
                element: <ProductsDetails />
            } 
        ]
    }
])