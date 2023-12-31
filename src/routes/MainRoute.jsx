import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import ChefPage from "../pages/ChefPage/ChefPage";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=>fetch('https://bengali-chefs-server-mehadi-shuvo.vercel.app/chefs'),
        },
        {
          path:'/chef/:id',
          element:<PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
          loader: ({params})=>fetch(`https://bengali-chefs-server-mehadi-shuvo.vercel.app/chefs/${params.id}`)
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;