import React from 'react'
import { IconBrandLinkedin,IconBrandGithub} from '@tabler/icons-react';

const About = () => {
  return (
    <div className='relative bg-[#111827]'>
       <div className='team'>
        <section>
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <h1 className="text-4xl font-semibold tracking-tighter text-gray-900 lg:text-5xl">
                  Meet Our Team
                  <span className="block text-gray-400">Diverse. Skilled. United.</span>
                </h1>
                <p className="mt-4 text-base font-medium text-gray-500">
                  A group of passionate individuals working together to innovate and
                  excel in our industry.
                </p>
              </div>
              <ul role="list" className="grid gap-12 lg:grid-cols-2 lg:col-span-2">
                <li>
                  <div className="space-y-4">
                    <div className="aspect-[3/2] p-2 overflow-hidden border rounded-3xl">
                      <img
                        className="object-cover w-full h-full rounded-2xl  "
                        src='/myphoto2.jpeg'
                        alt=""
                      />
                    </div>
                    <div className="inline-flex items-start justify-between w-full">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-6 text-white">
                          Himanshu Gupta
                        </h3>
                        <p className="text-base text-gray-500">
                          MERN Stack Developer
                        </p>
                      </div>
                      <div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a href="https://github.com/guptaindia" className="text-gray-400 hover:text-gray-500">
                              <IconBrandLinkedin  
                                name="logo-linkedin"
                                role="img"
                                className="md hydrated"
                                aria-label="logo linkedin"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="www.linkedin.com/in/guptaindia" className="text-gray-400 hover:text-gray-500">
                              <span className="sr-only"> Twitter </span>
                              <IconBrandGithub
                                name="logo-github"
                                role="img"
                                className="md hydrated"
                                aria-label="logo github"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="space-y-4">
                    <div className="aspect-[3/2] p-2 overflow-hidden border rounded-3xl">
                      <img
                        className="object-cover w-full h-full rounded-2xl "
                        src='priphoto.jpeg'
                        alt=""
                      />
                    </div>
                    <div className="inline-flex items-start justify-between w-full">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium leading-6 text-white">
                          Priyanshi Diwedi
                        </h3>
                        <p className="text-base text-gray-500">MERN Stack Developer</p>
                      </div>
                      <div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a href="https://linkedin.com/in/priyanshi-dwivedi-726aa5279" className="text-gray-400 hover:text-gray-500">
                              <IconBrandLinkedin 
                                name="logo-linkedin"
                                role="img"
                                className="md hydrated"
                                aria-label="logo linkedin"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="https://github.com/priyanshidwivedi25" className="text-gray-400 hover:text-gray-500">
                              <IconBrandGithub
                                name="logo-github"
                                role="img"
                                className="md hydrated"
                                aria-label="logo github"
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default About;