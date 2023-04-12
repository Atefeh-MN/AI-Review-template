import Landing from "./pages/landing/Landing";
import LandingLayout from "./layouts/Landing";
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";

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
      {
         path: "/blog",
        element: <div>blog</div>,
      },
      {
         path: "/about",
        element: <div>about us</div>,
      },
      {
         path: "/pricing",
        element: <div>pricing</div>,
      },
    ],
    },
    {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <div>hiii dashboard</div>,
      },
    
    ],
    },
    {
        element: <AuthLayout />,
        children: [
          {
            path: "signIn",
            element: <div>sign in</div>,
          },
          {
            path: "signOut",
          },
          {
            path: "signUp",
             element: <div>sign up</div>,
          },
        ],
      },
    ]
  );
  return <RouterProvider router={router} />;
}

