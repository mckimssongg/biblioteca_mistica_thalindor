import MainLayout from './layouts/MainLayout.jsx';
import { Login, Home, SearchPage, Registration, ErrorPage, ManagePersonalLibrary } from './views';

export const routes = [
    {
      path: "/",
      element: <MainLayout />, 
      children: [ // Rutas que comparten el layout MainLayout
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/managePersonalLibrary",
          element: <ManagePersonalLibrary />,
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
