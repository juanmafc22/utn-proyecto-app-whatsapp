import React from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    /* BrowserRouter habilita las herramientas de react-router */
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
