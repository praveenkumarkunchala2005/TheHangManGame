import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <div className="block md:hidden flex items-center justify-center h-screen text-center p-4">
        <h1 className="text-2xl font-bold text-red-600">
          This game is not supported in mobile devices. Please use a desktop or laptop.
        </h1>
      </div>
      <div className="hidden md:block">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
)
