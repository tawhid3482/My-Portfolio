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
        loader:async ()=> {
          const res = await fetch('/data.json')
          const data = await res.json()

          // const data = {}
          console.log(data)
          return data
        }
      },
      {
        path:'about',
        element:<About></About>,
        loader:async ()=> {
          const res = await fetch('/data.json')
          const data = await res.json()

          // const data = {}
          console.log(data)
          return data
        }
      }
    ],
  },
]);

export default Routers;
