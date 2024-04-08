'use client'
import React from 'react'
// import { CopyBlock } from 'react-code-blocks';
 import { CodeBlock, dracula } from 'react-code-blocks';
//import classes from './plugin.detail.css';

const pluginDetails = () => {
  return (
    <div>
      <header className='bg-blue-200 my-8 py-8'>
        <div>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold text-gray-500 capitalize lg:text-3xl dark:text-white'>
            Plugin Details</h1>
            <p className='max-w-lg mx-auto mt-4 text-black'>
              various Plugins are available for the usage
            </p>
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
    <span className="inline-block rounded bg-blue-600 p-2 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
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


        <div className='col-span-3 bg-blue-400 display-flex border-double border-4 border-gray-500'>
          <h1 className='text-center font-bold lg:text-3xl'>code blocks</h1>
      {<CodeBlock
        text={'<div>something lorem</div>'}
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