import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GestureRecognitionPlugin from './GestureRecognition.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// let gestureEle = document.getElementById('gesture-recognition-plugin');
// if (gestureEle) {
//   ReactDOM.createRoot(gestureEle).render(<GestureRecognitionPlugin />)
// }