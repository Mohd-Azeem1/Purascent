import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login.jsx'
import Collection from './Components/Collection.jsx'
import Cart from './Components/Cart/Cart.jsx'
import SignUp from './Components/SignUp.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
      <Route path='collection' element={<Collection />}/>
      <Route path='cart' element={<Cart />}/>
    </Route>       
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
