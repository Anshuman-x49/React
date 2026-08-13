import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import AppRoute from './app/routes/AppRoute.tsx'
import { store } from './app/store/store.tsx'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppRoute />
    </Provider>
)
