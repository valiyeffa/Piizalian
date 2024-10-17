import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../src/assets/css/style.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>
)