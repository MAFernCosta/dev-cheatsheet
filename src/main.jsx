import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router";
import './index.css'
import App from './App.jsx';
import Linuxbash from './cheatsheets/linuxbash';
import Home from './home.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {index: true, element:<Home/>},
      {path: "linuxbash", element:<Linuxbash />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
