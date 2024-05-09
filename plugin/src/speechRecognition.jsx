import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { AnimatePresence, motion } from 'framer-motion';
import { IconMicrophone, IconRestore, IconPlayerPause} from '@tabler/icons-react';



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
        transition={{ duration: 0.6 }}
      >
        <p>{icon}</p>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p>{description}</p>
      </motion.div>
    )}
  </AnimatePresence>
}


const Dictaphone1 = () => {

  const [message, setMessage] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState({
    icon: <IconMicrophone size={50} />,
    title: '',
    description: '',
    centered: true
  })

  const triggerModal = (title, description, centered=true, icon = <IconMicrophone size={50} />) => {
    setModalOptions({
      icon,
      title,
      description,
      centered
    })
    setShowModal(true);
  }

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
    if (finalTranscript.includes('scroll down')) {
      window.scrollBy(0, window.innerHeight / 2);
      triggerModal('Move Down', 'page moving down');
    }  if (finalTranscript.includes('scroll up')) {
      window.scrollBy(0, -window.innerHeight / 2)
      triggerModal('Moving up', 'page moving up');
    } if (finalTranscript.includes('forward')){
      window.location.href='/'

      triggerModal('page moving forward','forward')
    }
    if(finalTranscript.includes('backward')){

      triggerModal('page moving background', 'back')
    }
    if(finalTranscript.includes('zoom in')){

      triggerModal('zooming in', 'zoom')
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
    <div className='fixed z-10 bg-gray-300 border-2 border-gray-900 rounded-lg'>
      <div >
        <span>
          listening:
          {' '}
          {listening ? 'on' : 'off'}
        </span>
        <div>
          <button className='border-2 rounded ml-1 border-gray-900' type="button" onClick={resetTranscript}><IconRestore/> </button>
          <button className='border-2 rounded mx-1 border-gray-900' type="button" onClick={listenContinuously}><IconMicrophone/></button>
          <button className='border-2 rounded mr-1 border-gray-900' type="button" onClick={SpeechRecognition.stopListening}><IconPlayerPause/></button>
        </div>

      </div>

      <InfoModal {...modalOptions} showModal={showModal} setShowModal={setShowModal} />

      <div>
        <span>{transcript}</span>
      </div>

    </div>
  );
};

export default Dictaphone1;