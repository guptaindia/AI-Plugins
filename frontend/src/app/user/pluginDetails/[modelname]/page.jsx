'use client'
import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks';
import classes from '../plugin.module.css';
import BackgroundBoxes from '../backgroundbox';
import Navbar from '@/app/(main)/navbar';
import { useParams } from 'next/navigation';

const pluginContent = {
  'object-detection': {
    title: "Object Detection",
    code: `<div id="object-detection-plugin">
    <script>
    callBack = (value) => {
      console.log(value);
    } 
    </script>
  </div>
  <script type="module" src="http://localhost:5000/main.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>`,
    image: '/cardImg2.jpg',
    description: 'An object detection model is a computer vision algorithm designed to identify and locate multiple objects within an image or a video frame. It involves both classification (identifying what object or objects are present) and localization (drawing bounding boxes around the detected objects). ',
    features: [
      'Real-Time Object Detection',
      'Bounding Box Visualization',
      'Cross-Browser Compatibility',
      'Multiple Object Recognition',
    ]
  },
  'gesture-recognition': {
    title: "Gesture Recognition",
    image: '/cardImg3.jpg',
    code: ` <div id="gesture-recognition-plugin">
    <script>
    callBack = (value) => {
      console.log(value);
    }
  </script>
  </div>
  <script type="module" src="http://localhost:5000/main.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>`,
    description: 'Gesture recognition is the process of understanding human gestures through computational algorithms, typically using computer vision or machine learning techniques. It involves interpreting movements of the body, hands, fingers, or face to recognize specific gestures that convey meaning or commands',
    features: [
      'Gesture Mapping to Actions',
      'Camera Integration',
      'Range of Supported Gestures',
      'Real-time Feedback',
    ]
  },
  'Face-Detection': {
    title: "Face-Detection",
    image: '/cardImg4.jpg',
    code: `<div id="face-detection-plugin">
    <script>
      callBack = (value) => {
        console.log(value);
      }
    </script>
  </div>
  <script type="module" src="http://localhost:5000/face.js"></script> `,
    description:'Face detection is a branch of computer vision technology that allows computers to identify and locate human faces in digital images or videos. It acts like a digital bloodhound, sniffing out faces in a crowd, regardless of their orientation or position. This technology forms the foundation for many applications, from unlocking your smartphone with a selfie to enhancing security systems.',
    features: [
      'Attention Detection',
      'Facial Landmark Detection',
      'Face locater',
      'Face position detection',
    ]
  },

  'toxicity-detection': {
    title: "toxicity-detection",
    image: '/cardImg5.jpg',
    code: `<div id="toxicity-plugin">
    <input type="text" id="text-input">
    <button id="trigger">Make Prediction</button>
    <p id="output"></p>
    <script>
      callBack = (value) => {
        console.log(value);
      }
    </script>
  </div>`,
    description: 'Toxicity detection, also known as toxic comment classification, is the task of identifying and flagging inappropriate, offensive, or harmful content within text data. This is particularly relevant in online platforms where user-generated content can include abusive language, hate speech, harassment, or other forms of harmful communication. The goal of toxicity detection is to automatically classify text inputs into categories like "toxic" or "non-toxic" based on their content.',
    features: [
      'Text Input Interface:',
      'Toxicity Classification',
      'Probability Scores',
      'Real-time Analysis',
    ]
  },

  'speech-model': {
    title: "speech-model",
    image: '/cardImg6.jpg',
    code: ` <div id="voice-recognition">
    <script>
    callBack = (value) => {
      console.log(value);
    }
  </script>
  </div>
  <script type="module" src="http://localhost:5000/main.js"></script>
  <script src="https://cdn.tailwindcss.com"></script> `,
    description: 'A speech model, in the context of artificial intelligence and machine learning, refers to a system designed to process and understand spoken language. This encompasses various tasks related to speech recognition, speech synthesis, and natural language processing (NLP).',
    features: [
      'Real-time Speech-to-Text Conversion',
      'Natural Language Understanding',
      'Controls on voice commands',
      'Real-time Processing',
    ]
  },
}

const pluginDetails = () => {

  const { modelname } = useParams();

  return (
    <div>
      <BackgroundBoxes title={pluginContent[modelname].title} description={pluginContent[modelname].description} />


      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className={`flex flex-col justify-start ${classes.detailColumn} pt-12`}>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {pluginContent[modelname].title}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">

              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              Features
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                {
                  pluginContent[modelname].features.map(
                    feature => (

                      <li className="flex">
                        <span className="mr-1">
                          <svg
                            className="w-5 h-5 mt-px text-deep-purple-accent-400"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                          >
                            <polygon
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              fill="none"
                              points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    )
                  )
                }
              </ul>
            </div>
          </div>
          <div className={classes.detailColumn}>
            <CopyBlock
              customStyle={{
                height: '60vh',
                width: '120vh'
              }}
              text={pluginContent[modelname].code}
              language={'html'}
              showLineNumbers={true}
              theme={dracula}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default pluginDetails