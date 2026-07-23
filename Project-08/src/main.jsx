import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import "./index.css"
import { ProductProvider } from "./contexts/ProductContext"

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <AppRoutes />
  </ProductProvider>
)
