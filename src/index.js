import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { App } from "./app";
import { Body } from "./components/Body/Body";
import { MenuPage } from "./pages/MenuPage/MenuPage";

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Body />,
         },
         {
            path: "/contact",
            element: <ContactPage />,
         },
         {
            path: "/restaurant/:resId",
            element: <MenuPage />,
         },
      ],
   },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
