'use client'
import React from 'react'
// import { CopyBlock } from 'react-code-blocks';
import { CodeBlock, dracula } from 'react-code-blocks';
import classes from './plugin.module.css';
import BackgroundBoxes from './backgroundbox';

const pluginDetails = () => {
  return (
    <div>
        <BackgroundBoxes title={' Revolutionary way to build the web'} description={'This is a section of some simple filler text, also known as placeholdertext. It shares some characteristics of a real written text but is random or otherwise generated.'}/>

      {/* <header className=''>
        <div className="bg-gray-100  sm:py-8 lg:p-4">
          <div className="mx-auto max-w-screen-2x1 px-4 md:px-8 ">
            <div className="bg-gradient-to-l hover:bg-gradient-to-r rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12 bg-gradient-to-r from-purple-500 to-pink-500">
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

      </header> */}
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className={`flex flex-col justify-start ${classes.detailColumn} pt-12`}>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                The quick, brown fox
                <br className="hidden md:block" />
                jumps over{' '}
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                  <span className="relative inline-block text-deep-purple-accent-400">
                    a lazy dog
                  </span>
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              Features
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
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
                  A slice of heaven
                </li>
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
                  Disrupt inspire
                </li>
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
                  Preliminary thinking
                </li>
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
                  A slice of heaven
                </li>
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
                  Disrupt inspire
                </li>
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
                  Preliminary thinking
                </li>
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
                  A slice of heaven
                </li>
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
                  Disrupt inspire
                </li>
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
                  Preliminary thinking
                </li>
              </ul>
              <ul className="space-y-3">
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
                  Flipboard curmudgeon
                </li>
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
                  Storage shed
                </li>
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
                  Satoshi Nakamoto
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.detailColumn}>
            <CodeBlock
              customStyle={{
                height: '60vh'
              }}
              text={
                `<div>
    <h1>Something </h1>
    <h1>Something else</h1>
</div>`
              }
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