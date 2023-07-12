import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import {
  Careers,
  Company,
  Contact,
  Home,
  Projects,
  Services,
  UrbanDrive,
  FAQs,
  Error,
  CareerDescription
} from './routes';

import {loader as careerDescriptionLoader} from './routes/careerdescription'

 const router = createHashRouter([
   {
     path: '/',
     element: <App />,
     errorElement: <Error />,
     id: 'root',
     children: [
       { index: true, element: <Home /> },
       { path: 'projects', element: <Projects /> },
       { path: 'services', element: <Services /> },
       { path: 'company', element: <Company /> },
       { path: 'faqs', element: <FAQs /> },
       {
         path: 'careers',
         children: [
           { index: true, element: <Careers /> },
           {
             path: ':id',
             element: <CareerDescription />,
             loader: careerDescriptionLoader,
           },
         ],
       },
       { path: 'urbandrive', element: <UrbanDrive /> },
     ],
   },
   { path: 'contact', element: <Contact /> },
 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
