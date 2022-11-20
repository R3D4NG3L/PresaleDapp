// Import the FontAwesomeIcon component
import Typewriter from 'typewriter-effect';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const data = {
    labels: ['Vault', 'Liquidity Pool', 'Seed Sale', 'Presale', 'Presale 2', 'Presale 3', 'Joint Venture', 'Marketing', 'Team', 'Staff'],
    datasets: [
        {
            label: '%',
            data: [51.01, 17.45, 1, 3, 11, 13, 1, 1.29, 1, 0.25],
            backgroundColor: [
                'rgba(3,22,52)',
                'rgba(3,54,73)',
                'rgba(3,101,100)',
                'rgba(205,179,128)',
                'rgba(232,221,203)',
                'rgba(138,155,15)',
                'rgba(248,202,0)',
                'rgba(233,127,2)',
                'rgba(189,21,80)',
                'rgba(73,10,61)',
            ],
            borderColor: [
                'rgba(3,22,52)',
                'rgba(3,54,73)',
                'rgba(3,101,100)',
                'rgba(205,179,128)',
                'rgba(232,221,203)',
                'rgba(138,155,15)',
                'rgba(248,202,0)',
                'rgba(233,127,2)',
                'rgba(189,21,80)',
                'rgba(73,10,61)',
            ],
            hoverOffset: 4,
            borderWidth: 1,
        },
    ],
};

export default function Section7()
{
    return (
        <>
            <section id="section7" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/23.jpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h2 className="text-white font-bold">Nulla posuere tempus</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["MAGNA A PORTA"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 600000
                                }}
                            />
                        </h4>
                        <p className="text-white mb-10">
                            Maecenas condimentum leo nec enim scelerisque, vel pellentesque nulla efficitur.<br />
                            Cras vel neque vitae ante convallis vehicula ut sit amet enim.
                        </p>
                        <h5 className="ml-[3%] bg-slate-300 text-black hover:bg-slate-400 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            Tokenomics<br />
                        </h5>
                        <h5 className="uppercase text-red-300 font-bold">Total supply: 1,000,000
                        </h5>
                        <div className="tokenomicsDiv">
                            <Doughnut
                                data={data}
                                height={350}
                                width={100}
                                options={{
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: 'top',
                                            labels: {
                                                color: 'rgb(255, 255, 255)',
                                                font: {
                                                    size: 14,
                                                    family: "'Poppins', sans-serif"
                                                }
                                            },
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}