import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.js';
const colors = { 
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  poudel: {
    100: '#fafafa',
    200: '#f7f7f7',
  },

}

const theme = extendTheme({ colors })


ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-yw31n3ff483vqzp1.us.auth0.com"
    clientId="PuDTuMAegDY1fRZbwFGUiiIZl0MknZm9"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <PersistGate loading={null} persistor={persistor}>
            <Auth0Provider
              domain="dev-7fkeu02ef45va3vu.us.auth0.com"
              clientId="SSyKLuqgUdhfzE4WPlD7EZXumbWyemAd"
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <App />
            </Auth0Provider>
          </PersistGate>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </Auth0Provider>
);
