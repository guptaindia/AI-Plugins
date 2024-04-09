import React from 'react'
import classes from './browse.module.css';

const BrowsePlugin = () => {
    return (
        <div>
            <header className={classes.bg}>
                <div className="flex items-center justify-center text-center h-full backdrop-blur-md">
                    <div>

                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            From the blog
                        </h1>
                        <p className="max-w-lg mx-auto mt-4 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis
                            sint autem nesciunt, laudantium quia tempore delect
                        </p>
                    </div>
                </div>
            </header>               
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">

                    <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
                        <div>
                            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                                <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                        <p className="dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                    </div>
                                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50" fdprocessedid="i7etku">Read more</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    How to use sticky note for problem solving
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                                    veritatis sint autem nesciunt, laudantium quia tempore delect
                                </p>
                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    How to use sticky note for problem solving
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                                    veritatis sint autem nesciunt, laudantium quia tempore delect
                                </p>
                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    How to use sticky note for problem solving
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                                    veritatis sint autem nesciunt, laudantium quia tempore delect
                                </p>
                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="relative z-10 object-cover w-full rounded-md h-96"
                                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                alt=""
                            />
                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <a
                                    href="#"
                                    className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
                                >
                                    How to use sticky note for problem solving
                                </a>
                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                                    veritatis sint autem nesciunt, laudantium quia tempore delect
                                </p>
                                <p className="mt-3 text-sm text-blue-500">20 October 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BrowsePlugin;