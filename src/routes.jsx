import Landing from "./pages/landing/Landing";
import LandingLayout from "./layouts/Landing";
import { createBrowserRouter, RouterProvider, Routes } from 'react-router-dom'
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import SignInPage from "./pages/auth/SignIn";
import SignUpPage from "./pages/auth/SignUp";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";
import ResetPasswordPage from "./pages/auth/ResetPassword";
import Pricing from "./pages/Pricing";
import Default from "./pages/dashboards/Default";
import Social from "./pages/dashboards/Social";

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
        element: <Pricing/>,
      },
    ],
    },
    {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <Default />,
      },
      {
        path: "analytics",
        element: <div>Analytics</div> ,
      },
      {
        path: "saas",
        element: <div>sass</div>,
      },
      {
        path: "social",
        element: <Social />,
      },
      {
        path: "crypto",
        element: <div>Crypto</div>,
      },
    ],
  },
   {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
    ]
  );
  return <RouterProvider router={router} />;
}

