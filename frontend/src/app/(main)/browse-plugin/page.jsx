import React from 'react'
import classes from './browse.module.css';

const BrowsePlugin = () => {
    return (
        <div>
            <header className={classes.bg}>
                <div className="flex items-center justify-center text-center h-full backdrop-blur-md">
                    <div className={classes.text} >

                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            WELCOME TO AI PLUGIT
                        </h1>
                        <p className="max-w-lg mx-auto mt-4 text-white">
                            CHOOSE  THE  MODEL  GIVEN  BELOW
                        </p>
                    </div>
                </div>
            </header>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1644018335954-ab54c83e007f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    All the features you want to know
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                                    veritatis sint autem nesciunt, laudantium quia tempore delect
                                </p>
                                <p className="mt-3 text-sm text-blue-500">21 October 2019</p>
                            </div>
                        </div>
                        <div  className={classes.property}>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96 justify-center"
                                src="https://cdn.slidesharecdn.com/ss_thumbnails/nikppt-140322073227-phpapp01-thumbnail.jpg?width=640&height=640&fit=bounds"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    GESTURE RECOGNIZATION MODEL
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    
                                </p>
                                <p className="mt-3 text-sm text-blue-500">9 APRIL 2024</p>
                            </div>
                        </div>
                        <div className={classes.property}>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://deeplobe.ai/wp-content/uploads/2023/03/Image-classification-1.png"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                 IMAGE CLASSIFICATION MODEL
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    
                                </p>
                                <p className="mt-3 text-sm text-blue-500">9 APRIL 2024</p>
                            </div>
                        </div>
                        <div className={classes.property}>
                           <div  className=" d-flex justify-content-center">
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96  "
                                src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/333042351/original/97538d92dbbc4779cf760f8d09ad87d30db21793/help-you-with-object-detection-or-classification-python.jpeg"
                                alt=""
                                
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    OBJECT DETECTION MODEL
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm"></p>
                                    
                                <p className="mt-3 text-sm text-blue-500">9 APRIL 2024</p>
                            </div>
                        </div>
                        </div>
                        <div  className= {classes.property}>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96  "
                                src="https://cdn.dribbble.com/users/7894989/screenshots/17625161/media/4a2e45c401ac919ce55ee9a8c01012ff.jpg?resize=400x300&vertical=center"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    USE SPEECH MODEL
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                  
                                </p>
                                <p className="mt-3 text-sm text-blue-500 ">9 APRIL 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrowsePlugin;