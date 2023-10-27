import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Importe o Chart.js
import { useState } from 'react';


const LineChart = ({ valores }) => {

    const [opcao, setOpcao] = useState('24')

    const data = {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Pontuação',
                data: [69, 24, 69, 24, 69, 24, 69],
                borderColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        return null;
                    }

                    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
                    gradient.addColorStop(0, '#1552FF');
                    gradient.addColorStop(1, '#36DB74');
                    return gradient;
                },
                fill: false,
                tension: 0.4,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: false,
            },
        },
        plugins: {
            legend: {
                display: false
            },
        },
    };

    return (
        <div className="flex flex-col lg:flex-row lg:-ml-1 md:-ml-20 md:w-[500px] lg:w-[700px] -ml-44 xl:mx-5 notebook:-ml-5 lg:gap-x-24 gap-x-64 w-[300px]" >
            <div className="mt-14 lg:w-11/12 lg:mr-0 w-12/12 mobile375:mr-0 mobile375:ml-5 justify-center mobile425:-mr-16 mr-5 space-y-5 mb-10 flex flex-col">
                <div className="flex items-center justify-between">
                    <span className="text-xl dark:text-white">Alguma coisa</span>
                    <select
                        className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer"
                        name="time"
                        id="time"
                        onChange={(e) => { setOpcao(e.target.value) }}
                        value={opcao}
                    >
                        <option value="24">Últimas 24h</option>
                        <option value="48">Últimas 48h</option>
                        <option value="72">Últimas 72h</option>
                    </select>
                </div>
                <Line data={data} options={options} />
            </div>
        </div >
    );

    function newFunction() {
        console.log(opcao);
    }
};

export default LineChart;
