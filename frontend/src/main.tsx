import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./globals.css";
import HomePage from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
