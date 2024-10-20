import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './component/Home/Home.jsx';
import About from './component/About/About.jsx';
import Services from './component/Services/Services.jsx';
import Contact from './component/Contact/Contact.jsx';
import Login from './component/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: "contact",
        element: < Contact />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path:"login",
        element: <Login />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
