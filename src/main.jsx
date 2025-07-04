import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./components/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "checkout", element: <Checkout />},
      ],
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
