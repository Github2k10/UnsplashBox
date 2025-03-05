import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from "./app/pages/Home/Home.jsx"
import Collections from "./app/pages/Collections/Collections.jsx"
import Search from './app/pages/Search/Search.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/collections",
    element: <Collections/>,
  },
  {
    path: "/search",
    element: <Search/>,
    children: [
      {
        path: ":search",
        element: <Search/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
