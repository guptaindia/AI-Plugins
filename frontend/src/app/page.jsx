'use client'
import React from 'react'
import Wavyground from './wavy-background';
import Navbar from './(main)/navbar';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { IconBrandLinkedin,IconBrandGithub} from '@tabler/icons-react';

// import CardHoverEffectDemo from './card-hover-effect';
import { WobbleCardDemo } from './wobble-card';
// import UserNavbar from './user/user-navbar';


const Home = () => {

  onSubmit: (values) => {
    console.log(values);
    fetch('http://localhost:5000/email/add', {
              method: 'POST',
              body : JSON.stringify(values),
              headers : {
                  'Content-Type' : 'application/json'
              }

          })
          .then((res) => {
              if(res.status === 200){
                  toast.success('\Subscribed');
              }else {
                  toast.error('error in subscribing')
              }
          }).catch((err) => {
              console.log(err);
              toast.error('error')
          });
  }

  return (
    <div className=''>
      <Navbar/>
      <div className='relative bg-[#111827]'>

      <Wavyground title={'Rapidly use modern AI model without ever leaving your code.'} description={'A javascript framework packed with models like gesture, semantic, speech and object detection that can be composed to build on your code, directly on website.'}/>
      {/* <h1 className='text-2xl md:text-4xl lg:text-5xl text-black font-bold inter-var text-center'>Features</h1> */}
      <WobbleCardDemo/>
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
                        className="object-cover w-full h-full rounded-2xl grayscale filter "
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
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <IconBrandLinkedin  
                                name="logo-linkedin"
                                role="img"
                                className="md hydrated"
                                aria-label="logo linkedin"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
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
                        className="object-cover w-full h-full rounded-2xl grayscale filter"
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
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
                              <IconBrandLinkedin 
                                name="logo-linkedin"
                                role="img"
                                className="md hydrated"
                                aria-label="logo linkedin"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#_" className="text-gray-400 hover:text-gray-500">
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
              </ul>
            </div>
          </div>
        </section>

      </div>
      <div className='faq'>
        <section>
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div>
              <p className="text-4xl font-semibold tracking-tighter text-gray-200">
                Frequently Asked Questions
              </p>
              <p className="mt-4 text-base font-medium text-gray-500">
                Answers to commonly asked questions about our platform.
              </p>
            </div>
            <dl className="grid gap-12 mt-12 lg:grid-cols-2">
              <div>
                <dt className="text-lg font-medium text-gray-200">
                  Who can use it?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
                Developers can significantly enhance their applications' functionality,
                 improve user experiences, ensure safety and compliance, and drive innovation across various industries.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-200">
                Are your AI plugins compatible with all website platforms?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
                Our AI plugins are designed to be compatible with most major website platforms, its is just a html code with some javascript so it can work on any platform which uses these.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-200">
                How do I install an AI plugin on my website?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
              Generally, you will need to copy the code, paste it to your website platform, and use the functionality by using the callbacks provided on the console.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-200">
                Can I customize the AI plugins to fit my website’s design and functionality?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
                Yes, our AI plugins are highly customizable. You can adjust their appearance, behavior, and integration points to match your website’s design and functionality. Detailed customization options are provided in the plugin documentation.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-200">
                Are there any limitations to the AI features provided by your plugins?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
                While our AI plugins are powerful, they do have some limitations based on the current state of AI technology and specific use cases.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-200">
                Can I use your AI plugins for real-time data analysis?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-400">
                  Absolutely! Yes, many of our AI plugins support real-time data analysis, allowing you to process and analyze data as it is generated on your server.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      <div className='newsletter'>
        <section className=''>
          <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="p-2  rounded-3xl bg-gray-600">
              <div className="p-10 bg-white border shadow-lg md:p-20 rounded-3xl bg-gray-200">
                <div className="grid items-end grid-cols-1 lg:grid-cols-2">
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase">
                      ❖ BRAINYBOLT
                    </span>
                    <p className="mt-8 text-4xl font-semibold tracking-tighter text-black text-balance">
                      Subscribe for the latest updates
                    </p>
                    <p className="mx-auto mt-4 text-sm font-medium text-gray-500 text-balance">
                      Join our community to receive updates, design tips, and exclusive
                      access to our newest and most elegant code. Your journey to a
                      sophisticated digital presence begins here.
                    </p>
                  </div>
                  <form className="w-full max-w-xs mt-8 lg:ml-auto">
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        name="email"
                        id="email-address"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        aria-describedby="emailHelp"
                        required=""
                        className="block w-full h-12 px-4 py-2 duration-200 border rounded-lg appearance-none bg-chalk border-zinc-300 text-accent-500 placeholder-zinc-300 focus:border-zinc-300 focus:outline-none focus:ring-zinc-300 sm:text-sm"
                        fdprocessedid="r6t0j"
                      />
                      <span id="emailHelp" className="sr-only">
                        Please enter your email address to subscribe.
                      </span>
                      <button
                        type="submit"
                        aria-label="Primary action"
                        className="inline-flex items-center justify-center w-full h-12 gap-3 px-5 py-3 font-medium text-white duration-200 bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
                        fdprocessedid="vg55m"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="px-16 py-12 mx-auto md:px-12 lg:px-32 max-w-8xl bg-gray-400">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
            <svg
              class="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
              <p className="text-2xl font-bold uppercase text-black">BrainyBolts</p>
              <p className="mt-2 text-sm font-medium text-gray-800 lg:w-4/5">
                A set of
                <em className="text-accent-600 text-gray-800"/> AI plugins for powered web
                <span className="lg:block">
                  made with love
                </span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 text-sm font-medium text-gray-500 lg:grid-cols-3 lg:mt-0 xl:col-span-2">
              <div>
                <h3 className="text-base text-black">Information</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a href="#_" className="hover:text-black">
                      License
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base text-black">Socials</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a
                      href="https://twitter.com"
                      className="hover:text-black"
                    >
                      <IconBrandLinkedin/>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      className="hover:text-black"
                    >
                      <IconBrandGithub/>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="mt-12 md:mt-0">
                <h3 className="text-base text-black">Premium Themes</h3>
                <ul role="list" className="mt-4 space-y-2">
                  <li>
                    <a
                      href="https://lexingtonthemes.com/"
                      className="hover:text-black"
                    >
                      Lexington Themes
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
          <div
            className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between"
            x-data="{ year: new Date().getFullYear() }"
          >
            <span className="text-sm font-medium text-gray-800">
              Copyright © <span x-text="year">2024</span>
              <a
                aria-label="BRAINYBOLTS"
                href="/"
                className="mx-2 text-blue-500 hover:text-gray-500"
              >
                BRAINYBOLTS
              </a>
            </span>
          </div>
        </div>
      </footer>

      </div>
      </div>
    </div>

  )
}

export default Home