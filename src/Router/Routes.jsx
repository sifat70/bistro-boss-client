import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManagedItems from "../Pages/Dashboard/ManagedItems/ManagedItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "order/:category",
        element: <Order></Order>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal users route
      {
        path: 'cart',
        element: <Cart></Cart>
      },

      // admin routes
      {
        path: "addItems",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: "managedItems",
        element: <ManagedItems></ManagedItems>
      },
      {
        path: "users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "updateItem/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);