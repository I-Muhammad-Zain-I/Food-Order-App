import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OrderModalContextProvider } from './context/OrderModalContext.jsx'
import { ModalAppearContextProvider } from './context/ModalAppearContext.jsx'
import { ValidityContextProvider } from './context/ValidityContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ModalAppearContextProvider>
            <OrderModalContextProvider>
                <ValidityContextProvider>
                    <App />
                </ValidityContextProvider>
            </OrderModalContextProvider>
        </ModalAppearContextProvider>
    </React.StrictMode>,
)
