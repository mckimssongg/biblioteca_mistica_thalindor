
import MainLayout from '../layouts/MainLayout';
import { Login, Home, SearchPage, Registration, ErrorPage, ManagePersonalLibrary } from '../views/index';

export const routes = [
    {
      path: "/",
      element: <MainLayout />, 
      children: [ // Rutas que comparten el layout MainLayout
        {
          path: "/",
          element: <Home />,
          private: false,
        },
        {
          path: "/search",
          element: <SearchPage />,
          private: false,
        },
        {
          path: "/managePersonalLibrary",
          element: <ManagePersonalLibrary />,
          private: false,
        },
        
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "*",
      element: <ErrorPage/>,
    },
]
