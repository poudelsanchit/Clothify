import React from 'react'
import NavBar from './Components/Header/NavBar.jsx'
import Body from './Pages/Body'
import { Route, Routes } from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Sports from './Pages/Sports'
import New from './Pages/New'
import Sales from './Pages/Sales'
import Kids from './Pages/Kids'
import Card from './Components/Cards/Card'
import { useSelector, useDispatch } from 'react-redux'
import {decrement,increment} from './redux/Slices/counter/counterSlice'
import { addItemToCart, removeItemFromCart, clearCart } from './redux/Slices/Cart/cartSlice';
import Shipping from './Components/Payments/Cart/Cart.jsx'
import {Footer} from './Components/Footer/Footer'
import Billing from './Components/Payments/Checkout.jsx'


const App = () => {
  const count = useSelector((state) => state.counter.value)
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<Body/>} />
      <Route path='/men' element={<Men/>} />
      <Route path='/women' element={<Women/>} />
      <Route path='/kids' element={<Kids/>} />
      <Route path='/sports' element={<Sports/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/sales' element={<Sales/>} />
      <Route path='/shoes/:id' element={<Card />} />
      <Route path='/test' element={<New />} />
      <Route path='/cart' element={<Shipping />} />
      <Route path='/checkout' element={<Billing />} />


    </Routes>  
    <Footer/>
   
    </>
  );
}

export default App