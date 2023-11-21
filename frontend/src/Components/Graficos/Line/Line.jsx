/* eslint-disable react/prop-types */
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Importe o Chart.js
import { useState } from "react";

const LineChart = ({ valores, defaul }) => {
  const [opcao, setOpcao] = useState("all");

  function dataFormatada(data) {
    const dateTimeString = data;
    const date = new Date(dateTimeString);
    const dia = date.getDate().toString().padStart(2, "0");
    const mes = (date.getMonth() + 1).toString().padStart(2, "0");
    const ano = date.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  valores?.sort((a, b) => new Date(a.data) - new Date(b.data));

  const labels = valores?.map((item) => dataFormatada(item.data));

  const filtrarUltimas24Horas = (dataObjects) => {
    const agora = new Date();
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const dataLimite = agora - umDiaEmMilissegundos;

    const pontuacoesUltimas24Horas = dataObjects
      .filter((item) => {
        const dataItem = new Date(item.data);
        return dataItem.getTime() > dataLimite;
      })
      .map((item) => item.pontuacao);

    return pontuacoesUltimas24Horas;
  };

  const filtrarUltimaSemana = (dataObjects) => {
    const agora = new Date();
    const umaSemanaEmMilissegundos = 7 * 24 * 60 * 60 * 1000;
    const dataLimite = agora - umaSemanaEmMilissegundos;

    const pontuacoesUltimaSemana = dataObjects
      .filter((item) => {
        const dataItem = new Date(item.data);
        return dataItem.getTime() > dataLimite;
      })
      .map((item) => item.pontuacao);

    return pontuacoesUltimaSemana;
  };

  const dataRetornada =
    opcao === "dia"
      ? filtrarUltimas24Horas(valores)
      : opcao === "semana"
      ? filtrarUltimaSemana(valores)
      : valores?.map((item) => item.pontuacao);

  const data = {
    labels: opcao === "all" ? labels : labels.slice(-dataRetornada.length),
    datasets: [
      {
        label: "Pontuação",
        data: dataRetornada,
        borderColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
          );
          gradient.addColorStop(0, "#1552FF");
          gradient.addColorStop(1, "#36DB74");
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
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row lg:-ml-1 md:-ml-20 md:w-[500px] lg:w-[700px] -ml-44 xl:mx-5 notebook:-ml-5 lg:gap-x-24 gap-x-64 w-[300px]">
      <div className="mt-14 lg:w-11/12 lg:mr-0 w-12/12 mobile375:mr-0 mobile375:ml-5 justify-center mobile425:-mr-16 mr-5 space-y-5 mb-10 flex flex-col">
        <div className="flex items-center justify-between">
          <span className="text-xl dark:text-white">
            Histórico de pontuações
          </span>
          <select
            className="p-2 w-42 rounded-xl border-solid border-black outline-none shadow-lg cursor-pointer"
            name="time"
            id="time"
            onChange={(e) => {
              setOpcao(e.target.value);
            }}
            value={defaul ?? opcao}
          >
            <option value="dia">Últimas 24h</option>
            <option value="semana">Última semana</option>
            <option value="all">Todo o período</option>
          </select>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
