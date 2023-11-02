import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Fevorite from "../Pages/Fevorite/Fevorite";
import Login from "../Pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/fevorite",
        element: <Fevorite></Fevorite>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader: () => fetch("/phones.json"),
      },
    ],
  },
]);

export default router;
