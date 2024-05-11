import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routers from "./Router/Routers";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <Toaster position="top-right" />
      <RouterProvider router={Routers} />
    </SkeletonTheme>
  </React.StrictMode>
);
