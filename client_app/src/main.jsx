import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './views/Login/Login.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './views/Home/Home.jsx';
import SearchPage from './views/SearchPage/SearchPage.jsx';
import Registration from './views/Registration/Registration.jsx';
import ErrorPage from './views/ErrorPage/ErrorPage.jsx';
import ManagePersonalLibrary from './views/ManagePersonalLibrary/ManagePersonalLibrary.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
