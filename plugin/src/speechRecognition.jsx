import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMicrophone,IconPlayerStopFilled, IconPlayerPause, IconPlayerRecordFilled } from '@tabler/icons-react';


const InfoModal = ({ icon, title, description, showModal, setShowModal, centered = false, duration = 2000 }) => {

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [showModal, duration]);

  return <AnimatePresence>
    {showModal && (
      <motion.div
        className={` ${centered ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' : 'top-10 left-10'} flex flex-col items-center gap-3 column fixed z-30 bg-slate-600 opacity-25 text-white text-center p-10 rounded-xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.0 }}
      >
        <p>{icon}</p>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
      </motion.div>
    )}
  </AnimatePresence>
}


const Dictaphone1 = ({content}) => {

 

  // console.log(content);
  const [message, setMessage] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState({
    icon: <IconMicrophone size={50} />,
    title: '',
    description: '',
    centered: true
  })

  const triggerModal = (title, description, centered = true, icon = <IconMicrophone size={50} />) => {
    setModalOptions({
      icon,
      title,
      description,
      centered
    })
    setShowModal(true);
  }

  useEffect(() => {
    if(content){
      // console.log(content);
      const script =  content.split('\n').slice(2, -2).join('\n');
      // console.log(script);
      eval(script);
      // console.log(a);
      // callBack('my value');
    }
  }, [])
  

  const commands = [
    {
      command: 'reset',
      callback: () => resetTranscript()
    },
    {
      command: 'shut up',
      callback: () => setMessage('I wasn\'t talking.')
    },
    {
      command: 'Hello',
      callback: () => setMessage('Hi there!')
    },
  ]
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
  } = useSpeechRecognition({ commands });


  useEffect(() => {
  // callBack(finalTranscript);
    if (finalTranscript.includes('scroll down')) {
      callBack('scroll down');
      window.scrollBy(0, window.innerHeight / 2);
      triggerModal('Move Down', 'page moving down');
      resetTranscript()
    } if (finalTranscript.includes('scroll up')) {
      callBack('scroll up');
      window.scrollBy(0, -window.innerHeight / 2)
      triggerModal('Moving up', 'page moving up');
      resetTranscript()
    } if (finalTranscript.includes('forward')) {
      callBack('forward');
      history.forward()
      triggerModal('page moving forward', 'forward')
      resetTranscript()
    }
    if (finalTranscript.includes('backward')) {
      callBack('previous page');
      history.back()
      triggerModal('page moving background', 'backward')
      resetTranscript()
    }
  }, [finalTranscript]);

  useEffect(() => {
    document.body.addEventListener('keydown', (e) => {
      console.log(e.code);
      if (e.code === 'Space' && e.ctrlKey)
        SpeechRecognition.startListening({ continuous: true })
    })
  }, [])


  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
  }
  const listenContinuously = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-GB',
    });
  };

  

  return (
    <>
      <div className='fixed z-10 bg-black text-white border-2 border-gray-900 rounded-lg px-5 py-2'>
        <div className='flex'>
          {listening ? <IconPlayerRecordFilled onClick={() => { SpeechRecognition.stopListening() }} color='red' /> : <IconPlayerStopFilled color='red'/>}
          <div>
            <button className='pl-2 pr-2' type="button" onClick={listenContinuously}><IconMicrophone /></button>
            <button className='pr-2' type="button" onClick={SpeechRecognition.stopListening}><IconPlayerPause /></button>
          </div>

        </div>

        <InfoModal {...modalOptions} showModal={showModal} setShowModal={setShowModal} />
      </div>
      <div className='fixed z-10 bottom-3 bg-slate-700 text-white p-2'>
        {transcript}
      </div>
    </>
  );
};

export default Dictaphone1;