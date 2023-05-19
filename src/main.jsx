import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { HashRouter, RouterProvider, createHashRouter } from 'react-router-dom'
import About from './components/about.jsx'
import GameDevelopment from './components/GameDevelopment.jsx'


const router = createHashRouter([
  {
    path: "/",
    element : <About/>,
  },
  {
    path:"/GameDevP",
    element: <GameDevelopment/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
