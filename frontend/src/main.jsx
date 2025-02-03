import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './UserContext.jsx'  // وارد کردن UserProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>  {/* افزودن UserProvider */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
