import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/css/style.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext'
import { LangProvider } from './context/LangContext.jsx'
import { CartProvider } from 'react-use-cart'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <LangProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </LangProvider>
      </CartProvider>
    </ThemeProvider>
  </StrictMode>
)
