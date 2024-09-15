import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './componenets/Home/home';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import User from './componenets/User/User';
import GitHub, { githubInfoLoader } from './componenets/Github/Github';

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element : <About/>
//       },
//       {
//         path:"contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />  
      <Route path='about' element={<About/>} />  
      <Route path='contact' element={<Contact/>} />  
      <Route path='user/:userid' element={<User/>} />  
      <Route loader={githubInfoLoader}
      path='github' 
      element={<GitHub/>} />  


    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
