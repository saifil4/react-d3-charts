import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  colors: {
    brand: {
      blue: {
        100: "#E9F2FF",
        200: "#CCE0FF",
        300: "#85B8FF", 
        400: "#579DFF",
        500: "#388BFF",
        600: "#1D7AFC",
        700: "#0C66E4",
        800: "#0055CC"
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
