import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./layout/layout";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import CalendarPage from "./components/pages/CalendarPage";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Admission from "./components/pages/Admission";
import Teachers from "./components/home/Teachers";
import EventDetail from "./components/home/event/EventDetail";
import Result from "./components/pages/Result";
import Contact from "./components/pages/Contact";
import WelcomePage from "./components/pages/WelcomePage";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/celender',
        element: <CalendarPage />
      },
      {
        path: "/event/:id",
        element: <EventDetail />
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/welcome',
        element: <WelcomePage />
      },
      {
        path: '/signin',
        element: <Signin />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/admission',
        element: <Admission />
      },
      {
        path: '/teachers',
        element: <Teachers />
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
