import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes'
import "./index.css"
import { ProductProvider } from "./contexts/ProductContext"
import { UserProvider } from "./contexts/UserContext"

createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </ProductProvider>
)

