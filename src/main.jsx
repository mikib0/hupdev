import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'

 const router = createHashRouter([
   {
     path: '/',
     element: <App />,
     errorElement: <h1>Error! 💀</h1>,
     id: 'root',
     children: [],
   },
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
