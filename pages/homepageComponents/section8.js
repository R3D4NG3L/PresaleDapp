import Typewriter from 'typewriter-effect';

export default function Section8()
{
    return (
        <>
            <section id="section8" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/26.jpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h2 className="text-white font-bold">Donec lobortis tristique mauris?</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["SED TEMPUS ELIT"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 600000
                                }}
                            />
                        </h4>
                        <p className="text-white mb-10">
                            Donec a ipsum ut dui eleifend iaculis eu sed eros.<br />
                            Donec id risus tristique, pretium diam at, molestie dolor. <br />
                            Nullam rhoncus, metus vel efficitur placerat, risus urna cursus urna, vitae commodo lacus ligula et elit.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}