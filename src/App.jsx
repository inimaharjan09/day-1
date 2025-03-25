import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';


import RootLayout from './components/RootLayout.jsx';
import Contact1 from './pages/contact/Contact1.jsx';


export default function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact1/>
        },

      ]
    },
  


  ]);



  return <RouterProvider router={router} />
}