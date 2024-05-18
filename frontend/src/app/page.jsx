import React from 'react'
import Wavyground from './wavy-background';
import Navbar from './(main)/navbar';

// import CardHoverEffectDemo from './card-hover-effect';
import { WobbleCardDemo } from './wobble-card';
// import UserNavbar from './user/user-navbar';


const Home = () => {
  return (
    <div className=''>
      <Navbar/>
      {/* <UserNavbar/> */}
      <div className='relative bg-[#111827]'>

      </div>
      <Wavyground title={'Rapidly use modern AI model without ever leaving your code.'} description={'A javascript framework packed with models like gesture, semantic, speech and object detection that can be composed to build on your code, directly on website.'}/>
      <h1 className='text-2xl md:text-4xl lg:text-5xl text-black font-bold inter-var text-center'>Features</h1>
      {/* <CardHoverEffectDemo/> */}
      <WobbleCardDemo/>
      <div className='faq'>
        <section>
          <div className="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div>
              <p className="text-4xl font-semibold tracking-tighter text-gray-900">
                Frequently Asked Questions
              </p>
              <p className="mt-4 text-base font-medium text-gray-500">
                Answers to commonly asked questions about our platform.
              </p>
            </div>
            <dl className="grid gap-12 mt-12 lg:grid-cols-2">
              <div>
                <dt className="text-lg font-medium text-black">
                  What kind of support can I expect?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  We offer comprehensive support including live chat, email, and phone.
                  Our support team is available 24/7 to assist with any issues or
                  questions you might have.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-black">
                  How secure is my payment information?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  Your payment information is extremely secure. We use industry-standard
                  encryption and comply with PCI standards to ensure your details are
                  protected.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-black">
                  Can I cancel my subscription at any time?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  Yes, you can cancel your subscription at any time. There are no
                  cancellation fees, though no refunds are provided for partial months.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-black">
                  How often are platform updates released?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  We regularly update the platform to introduce new features and
                  improvements. Major updates are released quarterly, while minor
                  updates and bug fixes are rolled out as needed.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-black">
                  Is there a community or forum where I can discuss with other users?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  Yes, we have a community forum where users can share tips, ask
                  questions, and connect with others. It's a great place to learn from
                  fellow users and contribute your own insights.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-black">
                  Do you offer training or resources for new users?
                </dt>
                <dd className="mt-2 text-base font-medium text-gray-500">
                  Absolutely! We provide a comprehensive knowledge base, video
                  tutorials, and live webinars to help you get started and make the most
                  out of our platform.
                </dd>
              </div>
            </dl>
          </div>
        </section>
      <div className='newsletter'>
        <section>
          <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
            <div className="p-2 border bg-gray-50 rounded-3xl">
              <div className="p-10 bg-white border shadow-lg md:p-20 rounded-3xl">
                <div className="grid items-end grid-cols-1 lg:grid-cols-2">
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase">
                      ❖ windstatic
                    </span>
                    <p className="mt-8 text-4xl font-semibold tracking-tighter text-black text-balance">
                      Subscribe for the latest updates
                    </p>
                    <p className="mx-auto mt-4 text-sm font-medium text-gray-500 text-balance">
                      Join our community to receive updates, design tips, and exclusive
                      access to our newest and most elegant themes. Your journey to a
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
        <div className="px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <p className="text-2xl font-bold uppercase">windstatic</p>
              <p className="mt-2 text-sm font-medium text-gray-500 lg:w-4/5">
                A set of
                <em className="text-accent-600" /> elements, templates &amp; layouts
                <span className="lg:block">
                  {" "}
                  made with Tailwind CSS and Alpine.js
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
                      href="https://twitter.com/lexingtonthemes"
                      className="hover:text-black"
                    >
                      @lexingtonthemes
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Mike_Andreuzza"
                      className="hover:text-black"
                    >
                      @Mike_Andreuzza
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
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
              </div>
            </div>
          </div>
          <div
            className="flex flex-col pt-12 md:flex-row md:items-center md:justify-between"
            x-data="{ year: new Date().getFullYear() }"
          >
            <span className="text-sm font-medium text-gray-500">
              Copyright © <span x-text="year">2024</span>
              <a
                aria-label="Michael Andreuzza"
                href="#_"
                className="mx-2 text-blue-500 hover:text-gray-500"
              >
                michael andreuzza
              </a>
              Since 1985
            </span>
          </div>
        </div>
      </footer>

      </div>

    </div>

  )
}

export default Home