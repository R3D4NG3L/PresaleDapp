import Typewriter from 'typewriter-effect';

export default function Section9()
{
    return (
        <>
            <section id="section9" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/15.jpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h2 className="text-white font-bold">Aliquam consectetur dapibus convallis.</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["NULLAM"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 600000
                                }}
                            />
                        </h4>
                        <div className="container mx-auto w-fit">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="text-white text-lg font-semibold text-gray-900 dark:text-white">
                                        4th Quarter 202X
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Suspendisse dignissim felis eget varius rhoncus.<br/>
                                        Pellentesque posuere eleifend lobortis.<br/>
                                        Pellentesque interdum euismod rutrum. <br/>
                                        Donec suscipit felis ut justo aliquet, <br/>
                                        eget egestas mauris imperdiet.
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="text-white text-lg font-semibold text-gray-900 dark:text-white">
                                        1st Quarter 202X
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Quisque consectetur justo in pellentesque scelerisque. <br/>
                                        Vestibulum molestie accumsan tortor, <br/>
                                        vel luctus massa pellentesque id
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="text-white text-lg font-semibold text-gray-900 dark:text-white">
                                        2nd Quarter 202X
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                        Coming soon
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}