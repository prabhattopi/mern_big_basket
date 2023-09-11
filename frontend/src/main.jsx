import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './context/auth/auth';
import { ItemProvider } from './context/item/item.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <ItemProvider>
        <ToastContainer />
       <App />

        </ItemProvider>
    </AuthProvider>



 
)
