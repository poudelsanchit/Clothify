import React from 'react'
import NavBar from './Components/Header/NavBar.jsx'
import Body from './Pages/Body'
import { Route, Routes, useLocation } from 'react-router-dom'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Sports from './Pages/Sports'
import New from './Pages/New'
import Sales from './Pages/Sales'
import Kids from './Pages/Kids'
import Card from './Components/Cards/Card'
import { useSelector, useDispatch } from 'react-redux'
import Shipping from './Components/Payments/Cart/Cart.jsx'
import { Footer } from './Components/Footer/Footer'
import Billing from './Components/Payments/Checkout.jsx'
import Contributors from './Pages/Contributers.jsx'
import Favorites from './Pages/Favorites.jsx'
import Admin from './Components/Admin/Admin.jsx'


const App = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch()
  const routes = [
    {
      path: "/",
      component: <Body />,
    },
    {
      path: "/men",
      component: <Men />,
    },
    {
      path: "/women",
      component: <Women />,
    },
    {
      path: "/kids",
      component: <Kids />,
    },
    {
      path: "/sports",
      component: <Sports />,
    },
    {
      path: "/new",
      component: <New />,
    },
    {
      path: "/sales",
      component: <Sales />,
    },
    {
      path: "/:type/:id",
      component: <Card />,
    },
    {
      path: "/cart",
      component: <Shipping />,
    },
    {
      path: "/checkout",
      component: <Billing />,
    },
    {
      path: "/contributers",
      component: <Contributors />,
    },
    {
      path: "/favorites",
      component: <Favorites />,
    },
    {
      path: "/admin",
      component: <Admin />,
    },
  ];
  const currentPath = useLocation();
  return (
    <>
      {
        currentPath.pathname === '/admin' ? null :
          <NavBar />
      }
      <Routes>
        {
          routes.map(({ path, component }) => {
            return <Route path={path} element={component} />
          })
        }
      </Routes>
      <Footer />

    </>
  );
}

export default App