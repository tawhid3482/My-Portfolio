import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'about',
        element:<About></About>,
        loader:()=>fetch('fakeSkill.json')
      }
    ],
  },
]);

export default Routers;
