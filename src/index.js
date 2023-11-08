import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CourseDetail from './components/CourseDetail';
import Dashboard from './components/Dashboard';
import Courses from './components/Courses';

const router = createBrowserRouter([
    {
      path: "/", 
      element: <App/>, 
      children: [{path: "/", element: <Courses/>},
                {path: "/CourseDetail", element: <CourseDetail/>},
                {path: "/Dashboard", element: <Dashboard/>}
                ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
