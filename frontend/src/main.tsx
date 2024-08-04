import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./globals.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import RootLayout from "./pages/base";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
