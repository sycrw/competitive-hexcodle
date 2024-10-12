import * as React from "react";
import {createRoot} from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Home} from './routes/home.tsx';
import './input.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
]);


createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
