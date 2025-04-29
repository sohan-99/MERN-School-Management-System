import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./components/pages/ErrorPage";
import Layout from "./layout/layout";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import CalendarPage from "./components/pages/CalendarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/celender',
        element: <CalendarPage />
      },
    
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
