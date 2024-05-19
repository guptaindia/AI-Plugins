import regeneratorRuntime from 'regenerator-runtime';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GestureRecognitionPlugin from './GestureRecognition.jsx';
import Dictaphone1 from './speechRecognition.jsx';
import { ObjectDetection } from '@tensorflow-models/coco-ssd';
import ObjDetect from './objectDetection.jsx';
import ToxicityPlugin from './toxicityDetection.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


let gestureEle = document.getElementById('gesture-recognition-plugin');
if (gestureEle) {
  const innerContent = gestureEle.innerHTML;
  ReactDOM.createRoot(gestureEle).render(<GestureRecognitionPlugin content = {innerContent}/>)
}

let voiceEle = document.getElementById('voice-recognition');
if (voiceEle) {
  const innerContent = voiceEle.innerHTML;
  ReactDOM.createRoot(voiceEle).render(<Dictaphone1 content={innerContent}/>)
}

let objectdetect = document.getElementById('object-detection-plugin');
if (objectdetect) {
  const innerContent = objectdetect.innerHTML;
  ReactDOM.createRoot(objectdetect).render(<ObjDetect content={innerContent}/>)
}

const toxicityElement = document.getElementById('toxicity-plugin');

if (toxicityElement) {

  let inputElement = document.getElementById('text-input');
  let buttonElement = document.getElementById('trigger');
  let outputElement = document.getElementById('output');

  let innerHTML = { __html: toxicityElement.innerHTML };

  ReactDOM.createRoot(toxicityElement).render(
    <ToxicityPlugin
      inputElement={inputElement}
      buttonElement={buttonElement}
      outputElement={outputElement}
    >
      <div dangerouslySetInnerHTML={innerHTML} />
    </ToxicityPlugin>
  );
}