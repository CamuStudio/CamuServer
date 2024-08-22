import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Lessons from "./pages/Lessons/Lessons.jsx";

const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/lesson", element: <Lessons />},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
