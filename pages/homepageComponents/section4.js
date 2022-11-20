import SeedSale from "./seedSale.js";

// Homepage Section2 Section
export default function Section4()
{
    return (
        <>
            <section id="section4" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/20.jpg')]">
                <div className="grid grid-flow-row auto-rows-min sm:grid-flow-col justify-around">
                    <div className="text-left">
                        <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                            <h3 className="text-white font-bold">
                                🚀 Vestibulum venenatis vel elit  <br />
                                non congue.
                            </h3>
                            <p className="text-white"><strong>1) </strong> Pellentesque dapibus</p>
                            <p className="text-white"><strong>2) </strong> Luctus lacus et pharetra</p>
                            <p className="text-white"><strong>3) </strong> Curabitur laoreet</p>
                            <p className="text-white"><strong>4) </strong> Sagittis iaculis.</p>
                            <p className="text-white"><strong>5) </strong> Donec feugiat nunc nec volutpat gravida.</p>
                            <p className="text-white mb-5"><strong>6) </strong> Integer luctus orci sed sem</p>
                        </div>
                    </div>
                    <SeedSale />
                </div>
            </section>
        </>
    )
}