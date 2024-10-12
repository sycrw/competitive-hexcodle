import * as React from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {Home} from './routes/Home.tsx';
import './index.css';
import {Layout} from './routes/Layout.tsx';
import {Game} from './routes/Game.tsx';

const router = createBrowserRouter(createRoutesFromElements([
  <>
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/game/:gameId" element={<Game/>}/>
    </Route>
  </>,
]));

createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  );
