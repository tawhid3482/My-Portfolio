import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster 
     position="top-right"
    />
    <RouterProvider router={Routers} />
  </React.StrictMode>
);
