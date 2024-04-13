import React from 'react'
import classes from './browse.module.css';
import ThreeDCard from './3dCard';

const BrowsePlugin = () => {
    return (
        <div>
            <header className={classes.bg}>
                <div className="flex items-center justify-center text-center h-full backdrop-blur-md">
                    <div className='' >

                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            WELCOME TO AI PLUGIT
                        </h1>
                        <p className="max-w-lg mx-auto mt-4 text-white">
                            CHOOSE  THE  MODEL  GIVEN  BELOW
                        </p>
                    </div>
                </div>
            </header>
            <section className="">
                <div className="container px-6 ">

                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
                        <div>
                            <ThreeDCard title={'object detection model'} description={'browse model'} imageUrl={'/cardImg2.jpg'}/>
                        </div>
                        <div  className=''>
                            <ThreeDCard title={'Gesture recognition'} description={'browse model'} imageUrl={'/cardImg3.jpg'}/>
                        </div>
                        <div className=''>
                            <ThreeDCard title={'Image calssification'} description={'browse model'} imageUrl={'/cardImg4.jpg'}/>
                        </div>
                        <div className=''>
                        <ThreeDCard title={'Toxicity detection'} description={'browse model'} imageUrl={'/cardImg5.jpg'}/>
                        </div>

                        <div>
                        <ThreeDCard title={'Speech model'} description={'browse model'} imageUrl={'/cardImg6.jpg'}/>
                         </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrowsePlugin;