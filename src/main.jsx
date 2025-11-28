import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx';

import Home from './home.jsx';
import MdCheatSheet from './mdcheatsheet.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
     // { path: "linuxbash", element: <Linuxbash /> },
      { path: "mdcheatsheet/:path", element: <MdCheatSheet /> },
      { path: "mdcheatsheet/sql/:path", element: <MdCheatSheet section={"SQL"}/>}
    ]
  }
], { basename: "/dev-cheatsheet" }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
