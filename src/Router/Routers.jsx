import MainLayout from "../LayOut/MainLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Sai from "../Components/Sai";
import About from "../About";
import { createBrowserRouter } from "react-router-dom";

const Routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'demo',
                element:<Sai></Sai>
            },
            {
                path:'about',
                element:<About></About>
            }
        ]
    
        
    }
]) 
   

export default Routers;