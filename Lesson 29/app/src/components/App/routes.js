import CardPage from "../pages/CardPage";
import CategoryPage from "../pages/CategoryPage";
import ProductsPage from "../pages/ProductsPage";


export const routes = [
    {key: 1, path: '/category', element:<CategoryPage />},
    {key: 2, path: '/card', element:<CardPage />},
    {key: 3, path: '/products', element:<ProductsPage />}

]