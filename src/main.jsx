import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OrderModalContextProvider } from './context/OrderModalContext.jsx'
import { ModalAppearContextProvider } from './context/ModalAppearContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalAppearContextProvider>
            <OrderModalContextProvider>
                <App />
            </OrderModalContextProvider>
        </ModalAppearContextProvider>
    </React.StrictMode>,
)
