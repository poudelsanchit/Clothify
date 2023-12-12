import React from 'react'
import NavBar from './Components/NavBar'
import Body from './Pages/Body'
import { Route, Routes } from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Sports from './Pages/Sports'
import New from './Pages/New'
import Sales from './Pages/Sales'
import Kids from './Pages/Kids'
import Card from './Components/Cards/Card'
import BottomNavBar from './Components/BottomNavBar'
import { useSelector, useDispatch } from 'react-redux'
import {decrement,increment} from './redux/Slices/counter/counterSlice'
import { addItemToCart, removeItemFromCart, clearCart } from './redux/Slices/Cart/cartSlice';
import Checkout from './Pages/Checkout'
import {Footer} from './Components/Footer/Footer'


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
      <Route path='/checkout' element={<Checkout />} />

    </Routes> 
    <Footer/>
      {/* <BottomNavBar/> */}
      {/* <div className="w-full h-screen  text-3xl  ">
        <div className="flex gap-10 justify-center items-center mt-10 ">

          <div > <div className='font-bold text-4xl pb-5'>Products Added :</div>  {cartItems.map((items)=>(<div className='text-md font-Poppins'>{items.name}</div>))}</div>
        </div>{" "}
      </div> */}
    </>
  );
}

export default App