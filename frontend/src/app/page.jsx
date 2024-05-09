import React from 'react'
import Wavyground from './wavy-background';
import Navbar from './(main)/navbar';
import CardHoverEffectDemo from './card-hover-effect';


const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='relative bg-[#111727]'>

      </div>
      <Wavyground title={'Rapidly use modern AI model without ever leaving your code.'} description={'A javascript framework packed with models like gesture, semantic, speech and object detection that can be composed to build on your code, directly on website.'}/>
      <h1 className='text-2xl md:text-4xl lg:text-5xl text-black font-bold inter-var text-center'>Features</h1>
      <CardHoverEffectDemo/>
    </div>
  )
}

export default Home