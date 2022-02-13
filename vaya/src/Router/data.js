import HomePage from "../Screens/HomePage";
import Login from "../Screens/Login";
import ProductInfo from "../Screens/ProductInfo";
import ProductsPage from "../Screens/ProductsPage";

export const authRoute = [
    { path: '/login', element: <Login /> },
    { path: '/', element: <HomePage /> },
    { path: '/productspage', element: <ProductsPage /> },
    { path: '/productinfo/:id', element: <ProductInfo /> },
]
