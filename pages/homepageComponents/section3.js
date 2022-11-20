// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faCircleDown
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';

export default function Section3()
{
    return (
        <>
            <section id="section3" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/13.jpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h2 className="text-white font-bold">🌍 Rhoncus odio</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["eget.", "sodales.", "nisl."],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <p className="text-white mb-10"> viverra sed. In sit amet mollis dolor. <br/>
                        Phasellus ultrices, arcu vitae pretium rhoncus <br/>
                        augue est sodales mauris, sit amet venenatis sapien diam<br/>
                        id nisi. Interdum et malesuada fames ac ante ipsum.</p>
                        <a href="/whitepaper/whitepaper.pdf"
                            target="_blank"
                            className="bg-slate-300 text-black hover:bg-red-600 active:bg-red-900 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            <span>primis in faucibus <FontAwesomeIcon icon={faCircleDown} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}