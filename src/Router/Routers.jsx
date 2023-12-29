import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";

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
          // console.log(data)
          return data
        }
      },
      
      {
        path:'blog',
        element:<Blogs></Blogs>,
      },
      {
        path:'project',
        element:<Projects></Projects>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ],
  },
]);

export default Routers;
