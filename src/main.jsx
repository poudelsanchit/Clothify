import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';

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


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-yw31n3ff483vqzp1.us.auth0.com"
  clientId="PuDTuMAegDY1fRZbwFGUiiIZl0MknZm9"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}>
      <BrowserRouter>
      <ChakraProvider  theme={theme}>
      <App />
      </ChakraProvider>
      </BrowserRouter>
  </Auth0Provider>
)
