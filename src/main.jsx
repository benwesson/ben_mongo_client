import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Search } from './Search.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage.jsx'
import { UniqueUserPage } from './UniqueUserPage.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/search",element:<Search/>},
  {path:"/:id",element:<UniqueUserPage/>},
  {path:"*",element:<NotFoundPage/>}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
