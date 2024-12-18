import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes"; // Importa o useTheme
import { Chart, registerables } from "chart.js";
import twColorsPlugin from "chartjs-plugin-tailwindcss-colors";
import tailwindConfig from "../../../tailwind.config";

Chart.register(...registerables, twColorsPlugin(tailwindConfig));

const DadosIdade = [
  { grupo: "Até 21 anos", percentual: 7.1, quantidade: 22 },
  { grupo: "De 22 a 28 anos", percentual: 27.1, quantidade: 84 },
  { grupo: "De 29 a 35 anos", percentual: 20, quantidade: 62 },
  { grupo: "De 36 a 42 anos", percentual: 16.13, quantidade: 50 },
  { grupo: "De 43 a 49 anos", percentual: 19.68, quantidade: 61 },
  { grupo: "De 50 a 56 anos", percentual: 6.45, quantidade: 20 },
  { grupo: "Acima de 57 anos", percentual: 3.55, quantidade: 11 },
];

const GraficoColaboradores = () => {
  const { theme } = useTheme(); // Obtém o tema atual
  const graficoRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    const destroyChart = () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };

    const createChart = () => {
      if (graficoRef.current) {
        chartInstance.current = new Chart(graficoRef.current, {
          type: "bar",
          data: {
            labels: DadosIdade.map((item) => item.grupo),
            datasets: [
              {
                label: "% de Colaboradores",
                data: DadosIdade.map((item) => item.percentual),
                backgroundColor: "red-500", // Cor primária para as barras
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 30,
                ticks: {
                  stepSize: 5,
                  callback: (value) => `${value}%`,
                  color: theme === "dark" ? "white" : "black", // Cor dinâmica no eixo Y
                },
                title: {
                  display: true,
                  text: "% de Colaboradores",
                  font: {
                    size: 14,
                    weight: "bold",
                  },
                  color: theme === "dark" ? "white" : "black", // Cor dinâmica no título do eixo Y
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Grupos de Idade",
                  font: {
                    size: 14,
                    weight: "bold",
                  },
                  color: theme === "dark" ? "white" : "black", // Cor dinâmica no título do eixo X
                },
                ticks: {
                  color: theme === "dark" ? "white" : "black", // Cor dinâmica nos rótulos do eixo X
                },
              },
            },
            plugins: {
              legend: {
                display: false, // Remove a legenda
              },
              tooltip: {
                backgroundColor: "hsl(var(--background))", // Cor de fundo do tooltip (pode ser ajustado conforme o tema)
                titleColor: "white", // Cor do título do tooltip (sempre branco)
                bodyColor: "white", // Cor do texto do tooltip (sempre branco)
                callbacks: {
                  label: (context) => {
                    const index = context.dataIndex;
                    const quantidade = DadosIdade[index].quantidade;
                    return `${context.raw}% (${quantidade} colaboradores)`;
                  },
                },
              },
              datalabels: {
                display: false, // Remove o texto dentro das barras
              },
            },
          },
        });
      }
    };

    destroyChart();
    createChart();

    return () => {
      destroyChart();
    };
  }, [theme]); // Dependência de theme

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-12">
      <h2 className="text-xl font-bold mb-4" style={{ color: theme === "dark" ? "white" : "black" }}>
        Colaboradores por Grupo de Idade
      </h2>
      <div className="relative w-full max-w-3xl h-[400px]">
        <canvas ref={graficoRef} />
      </div>
    </div>
  );
};

export default GraficoColaboradores;
