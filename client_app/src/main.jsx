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
import ManageLibreby from './views/ManageLibrary/ManageLibreby.jsx';
import ListCategoryLove from './views/ListCategoryBooks/ListCategoryLove.jsx';
import ListCategoryFinancial from './views/ListCategoryBooks/ListCategoryFinancial.jsx';
import ListCategoryHealth from './views/ListCategoryBooks/ListCategoryHealth.jsx';
import ListCategoryCrimes from './views/ListCategoryBooks/ListCategoryCrimes.jsx';
import ListCategoryGame from './views/ListCategoryBooks/ListCategoryGame.jsx';
import ManagePersonalLibrary from './views/ManagePersonalLibrary/ManagePersonalLibrary.jsx';
import SpecificBook from './views/SpecificBook/SpecificBookCaroline.jsx';
import SpecificBookCaroline from './views/SpecificBook/SpecificBookCaroline.jsx';

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
    path: "/manageLibrery",
    element: <ManageLibreby />,
  },
  {
    path: "/managePersonalLibrary",
    element: <ManagePersonalLibrary />,
  },
  {
    path: "/specificBoock/Caroline",
    element: <SpecificBookCaroline />,
  },
  {
    path: "/categoryLove",
    element: <ListCategoryLove />,
  },
  {
    path: "/categoryFinancial",
    element: <ListCategoryFinancial />,
  },
  {
    path: "/categoryHealth",
    element: <ListCategoryHealth />,
  },
  {
    path: "/categoryCrimes",
    element: <ListCategoryCrimes />,
  },
  {
    path: "/categoryGames",
    element: <ListCategoryGame />,
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
