import React from 'react'

import Wavyground from './wavy-background';
import Navbar from './(main)/navbar';
;

const Home = () => {
  return (
    <div className=''>
      <Wavyground title={'Rapidly use modern AI model without ever leaving your code.'} description={'A javascript framework packed with models like gesture, semantic, speech and object detection that can be composed to build on your code, directly on website.'}/>
      <h1 className='bg-neutral-900 text-center text-white font-bold text-5xl h-svh'>Features</h1>
    </div>
  )
}

export default Home