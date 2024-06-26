import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    brand: {
      blue: {
        300: "#85B8FF", 
        400: "#579DFF",
        500: "#388BFF",
      }
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
