import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage/LandingPage.jsx'
import WithLoading from './Components/WithLoading.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <WithLoading> <LandingPage></LandingPage></WithLoading>
  </React.StrictMode>,
)
