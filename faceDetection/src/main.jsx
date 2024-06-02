import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const element = document.getElementById('face-detection-plugin');
if (element) {
  const innerContent = element.innerHTML;
  ReactDOM.createRoot(element).render(
    <React.StrictMode>
      <App content={innerContent} />
    </React.StrictMode>,
  )
}