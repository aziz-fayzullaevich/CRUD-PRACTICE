import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../../layout/layout';
import { ROUTES } from './routes';
import { Products } from '../../../pages/products/products';
import { Users } from '../../../pages/users/users';
import { Posts } from '../../../pages/posts/posts';

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <Layout />,
        children: [
            {
                path: ROUTES.PRODUCTS,
                element: <Products />,
            },
            {
                path: ROUTES.USERS,
                element: <Users />,
            },
            {
                path: ROUTES.POSTS,
                element: <Posts />,
            },
            //   {
            //     path: ROUTES.PRODUCTS_SHOW,
            //     element: <ProductShow />,
            //   },
            {
                index: true,
                element: <Navigate to={ROUTES.PRODUCTS} replace />,
            }
        ],
    },
]);