'use client'
import React from 'react'
// import { CopyBlock } from 'react-code-blocks';
 import { CodeBlock, dracula } from 'react-code-blocks';
//import classes from './plugin.detail.css';

const pluginDetails = () => {
  return (
    <div>
      <header className=''>
        <div className="bg-gray-100  sm:py-8 lg:p-4">
          <div className="mx-auto max-w-screen-2x1 px-4 md:px-8 ">
            <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12 bg-gradient-to-r from-purple-500 to-pink-500">
              <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                Introducing
              </p>
              <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
                Revolutionary way to build the web
              </h2>
              <p className="mx-auto max-w-screen-md text-center text-gray-600 md:text-lg">
                This is a section of some simple filler text, also known as placeholder
                text. It shares some characteristics of a real written text but is
                random or otherwise generated.
                
              </p>
            </div>
          </div>
        </div>

      </header>
      <div className='bg-orange-400 grid grid-cols-5 divide-x '>

        <div className='col-span-2 bg-blue-200 border-solid border-4 border-gray-950'>
          <h1 className='text-center font-bold lg:text-3xl'>Plugin details </h1>
          <div>
          <>
  {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}
  <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
    <span className="inline-block rounded  p-2 text-white">
      <img className='h-20 m-auto' src="\detail-icon.webp"/>
    </span>
    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h3>
    </a>
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
      dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
      sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
      voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
      Molestias explicabo corporis voluptatem?
    </p>
    <a
      href="#"
      className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more
      <span
        aria-hidden="true"
        className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        →
      </span>
    </a>
  </article>
</>

          </div>
        </div>


        <div className='col-span-3 bg-white display-flex border-double border-4 border-gray-500'>
          <h1 className='text-center font-bold lg:text-3xl'>code blocks</h1>
      {<CodeBlock
        text={'<div>something </div>'}
        language={'html'}
        showLineNumbers={true}
        theme={dracula}
      />}
        </div>
      </div>


    </div>
  )
}

export default pluginDetails