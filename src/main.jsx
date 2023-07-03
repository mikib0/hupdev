import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { Careers, Company, Contact, Faqs, Home, Projects, Services } from './routes';

 const router = createHashRouter([
   {
     path: '/',
     element: <App />,
     errorElement: <h1>Error! 💀</h1>,
     id: 'root',
     children: [
       { index: true, element: <Home /> },
       { path: 'projects', element: <Projects /> },
       { path: 'services', element: <Services /> },
       { path: 'company', element: <Company /> },
       { path: 'careers', element: <Careers /> },
       { path: 'faqs', element: <Faqs /> },
     ],
   },
   { path: 'contact', element: <Contact /> },
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
