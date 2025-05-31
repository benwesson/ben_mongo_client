import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.jsx'
import { Search } from './Search.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage.jsx'

const router = createBrowserRouter([
  {path:"/",element:<App/>},
  {path:"/search",element:<Search/>},
  {path:"*",element:<NotFoundPage/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
