import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/Error/ErrorPage";
import ChefPage from "../pages/ChefPage/ChefPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element: <Home></Home>,
          loader: ()=>fetch('http://localhost:3000/chefs'),
        },
        {
          path:'/chef/:id',
          element:<PrivateRoute><ChefPage></ChefPage></PrivateRoute>,
          loader: ({params})=>fetch(`http://localhost:3000/chefs/${params.id}`)
        },
        {
          path:'login',
          element: <Login></Login>
        },
        {
          path:'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;