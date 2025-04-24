import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import PhoneDetails from "../pages/PhoneDetails";


const router = createBrowserRouter ([
    
    {
      path: '/',
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=> {
            return fetch('phones.json')
          },
           
        },
        {
          path: '/favorites',
          Component: Favorite,
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/phone-details',
          element: <PhoneDetails></PhoneDetails>
        }
      ]
    },
    {
      path: 'about',
      element: <p> this is naim vai</p>
    },
  ])
  export default router