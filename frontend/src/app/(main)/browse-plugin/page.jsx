import React from 'react'

import ThreeDCard from './3dCard';
import BackgroundBoxes from './backgroundbox';
import { useRouter } from 'next/navigation';

const BrowsePlugin = () => {

    

    return (
        
        <div>
            <BackgroundBoxes title={'Welcome to the  browsing-plugin page'} description={'browse models'}/>
      
            <section className="">
                <div className="container px-6 ">

                    <div className="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3">
                        <div className=''>
                            <ThreeDCard title={'object detection model'} description={'browse model'} imageUrl={'/cardImg2.jpg'} link={'/user/pluginDetails/object-detection'} />
                        </div>
                        <div  className=''>
                            <ThreeDCard title={'Gesture recognition'} description={'browse model'} imageUrl={'/cardImg3.jpg'} link={'/user/pluginDetails/gesture-recognition'}/>
                        </div>
                        <div className=''>
                            <ThreeDCard title={'Face Detection'} description={'browse model'} imageUrl={'/cardImg7.jpg'} link={'/user/pluginDetails/image-classification'}/>
                        </div>
                        <div className=''>
                        <ThreeDCard title={'Toxicity detection'} description={'browse model'} imageUrl={'/cardImg5.jpg'} link={'/user/pluginDetails/toxicity-detection'}/>
                        </div>

                        <div className=''>
                        <ThreeDCard title={'Speech model'} description={'browse model'} imageUrl={'/cardImg6.jpg'} link={'/user/pluginDetails/speech-model'}/>
                         </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrowsePlugin;