import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "react-toastify/dist/ReactToastify.css";
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>,
)
