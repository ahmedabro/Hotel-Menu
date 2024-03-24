import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Favorites from './pages/Favorites'
import './index.css'
import './App.css'
import SideNavbar from "./components/SideNavbar";
import RandomMeal from "./pages/RandomMeal";
import Meals from "./pages/Meals";
import { FavoriteProvider } from "./contexts/FavoriteContext";
import Footer from "./components/Footer";



const router = createBrowserRouter([
  {
    path: "/",
    element: <><SideNavbar /> <Home /> <Footer /></>
  },
  {
    path: "/about",
    element: <><SideNavbar /> <About /> <Footer /></>
  },
  {
    path: "/menu",
    element: <><SideNavbar /> <Menu /> <Footer /></>
  },
  {
    path: "/favorites",
    element: <><SideNavbar /> <Favorites /> <Footer /></>
  },
  {
    path: "/random-meal",
    element: <><SideNavbar /> <RandomMeal /> <Footer /></>
  },
  {
    path: "/meals/:category",
    element: <><SideNavbar /> <Meals /> <Footer /></>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </React.StrictMode>,
)
