import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Cart from './components/Cart.jsx'
import Store from './store/Store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComp from './components/HomeComp.jsx'
const router=createBrowserRouter([
  {path:"/",
    element:<App/>,
    children:[{
      path:"products",
      element:<HomeComp/>
    },

    {
      path:"cart",
      element:<Cart/>
    },
  ]
  }
]
)
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
<RouterProvider router={router} />
  </Provider>
  
)