import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import App from "../App";
import Increment from "./Increment";
import ClassComponent from "./ClassComponent";
import CakeGallery from "./CakeGallery";
import Conditional from "./Conditional";
import Support from "./Support";
import SupportFromApp from "./SupportFromApp";
import SupportFromRest from "./SupportFomRest";
import CakeDetails from "./CakeDetails";
import Error from "./Error";
import LifeCycle from "./LifeCycle";
import Product from "./Products";
import Users from "./Users";
import Forms from "./Forms";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/increment",
        element: <Increment />,
      },
      {
        path: "/classcomp",
        element: <ClassComponent />,
      },
      {
        path: "/cake",
        element: <CakeGallery />,
      },
      {
        path: "/cakedetails/:id/:img",
        element: <CakeDetails />,
      },
      {
        path: "/conditional",
        element: <Conditional />,
      },
      {
        path: "/lifecycle",
        element: <LifeCycle />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/forms",
        element:<Forms />,
      },
      {
        path: "/support",
        element: <Support />,
        children: [
          {
            path: "/support/app",
            element: <SupportFromApp />,
          },
          {
            path: "/support/restaurant",
            element: <SupportFromRest />,
          },
        ],
      },
    ],
  },
]);

export default Router;
