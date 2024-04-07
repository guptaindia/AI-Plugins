'use client'
import React from 'react'
// import { CopyBlock } from 'react-code-blocks';
// import { CodeBlock, dracula } from 'react-code-blocks';

const pluginDetails = () => {
  return (
    <div>
      <header className='bg-white'>
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


      {/* <CodeBlock
        text={'<div>something</div>'}
        language={'html'}
        showLineNumbers={true}
        theme={dracula}
      /> */}
    </div>
  )
}

export default pluginDetails