import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useState } from "react";

const MultiLineChart = ({ valores, defaul }) => {
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

  const agruparPorDia = (dataObjects) => {
    const agrupado = {};
    dataObjects.forEach((item) => {
      const dia = dataFormatada(item.data);
      if (!agrupado[dia]) {
        agrupado[dia] = 0;
      }
      agrupado[dia] += item.pontuacao;
    });
    return agrupado;
  };

  const labels = Object.keys(agruparPorDia(valores));

  const filtrarUltimaSemana = (dataObjects) => {
    const agora = new Date();
    const umaSemanaEmMilissegundos = 7 * 24 * 60 * 60 * 1000;
    const dataLimite = agora - umaSemanaEmMilissegundos;

    const pontuacoesUltimaSemana = dataObjects.filter((item) => {
      const dataItem = new Date(item.data);
      return dataItem.getTime() > dataLimite;
    });

    return agruparPorDia(pontuacoesUltimaSemana);
  };

  const filtrarUltimoMes = (dataObjects) => {
    const agora = new Date();
    const umMesEmMilissegundos = 30 * 24 * 60 * 60 * 1000;
    const dataLimite = agora - umMesEmMilissegundos;

    const pontuacoesUltimoMes = dataObjects.filter((item) => {
      const dataItem = new Date(item.data);
      return dataItem.getTime() > dataLimite;
    });

    return agruparPorDia(pontuacoesUltimoMes);
  };

  const dataRetornada =
    opcao === "semana"
      ? filtrarUltimaSemana(valores)
      : opcao === "mes"
      ? filtrarUltimoMes(valores)
      : agruparPorDia(valores);

  const data = {
    labels: opcao === "all" ? labels : labels.slice(-Object.keys(dataRetornada).length),
    datasets: [
      {
        label: "Pontuação",
        data: Object.values(dataRetornada),
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
            Pontuação por dia
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
            <option value="semana">Última semana</option>
            <option value="mes">Último mês</option>
            <option value="all">Todo o período</option>
          </select>
        </div>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MultiLineChart;
