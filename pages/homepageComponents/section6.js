// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faTelegram
} from "@fortawesome/free-brands-svg-icons";

// Homepage Section2 Section
export default function Section6()
{
    return (
        <>
            <section id="section6" className="flex items-center justify-center h-fit min-h-screen bg-fixed bg-center bg-cover bg-[url('/images/bg/24.jpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit mt-[10%] px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h5 className="uppercase text-red-600 font-bold">
                            Pellentesque iaculis consequat sem:
                        </h5>
                        <h5 className="lowercase text-white font-bold">
                            sed ultrices neque posuere et.
                        </h5>
                        <p className="text-white mb-5">
                            Ut tristique, dui non hendrerit scelerisque, massa nisi pulvinar elit, <br />
                            non pretium lorem orci at erat. Phasellus imperdiet blandit ex, <br />
                            vitae blandit lacus porttitor ut.
                        </p>
                        <a href="https://t.me/R3D4NG3L"
                            target="_blank"
                            className="bg-slate-300 mt-5 text-black hover:bg-red-600 active:bg-red-900 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            <span>Suspendisse <FontAwesomeIcon icon={faTelegram} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}