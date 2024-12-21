import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact-Us'
import Enquiry from './components/Enquiry'
let routers=createBrowserRouter([
  {
    path:'/',element:<Header/>
  },
  {
    path:'signup/',element:<Signup/>
  },
  {
    path:'about/',element:<About/>
  },
  {
    path:'contact/',element:<Contact/>
  }
  ,{
    path:'enquiry/',element:<Enquiry/>
  }

])
createRoot(document.getElementById('root')).render(


  <StrictMode>
  <RouterProvider router={routers} />
  </StrictMode>,
)
