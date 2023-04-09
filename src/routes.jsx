import Landing from "./pages/landing/Landing";
import LandingLayout from "./layouts/Landing";

import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'


export const Router = () => {

  const router = createBrowserRouter(
    [
      {
    path: "/",
    element: <LandingLayout />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
    ],
    },
    ]
  );
  return <RouterProvider router={router} />;
}

