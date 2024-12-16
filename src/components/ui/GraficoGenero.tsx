import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes"; // Importa o useTheme
import { Chart, registerables } from "chart.js";
import twColorsPlugin from "chartjs-plugin-tailwindcss-colors";
import tailwindConfig from "../../../tailwind.config";

Chart.register(...registerables, twColorsPlugin(tailwindConfig));

const DadosGenero = [
  { grupo: "Masculino", percentual: 66.45, quantidade: 206 },
  { grupo: "Feminino", percentual: 33.23, quantidade: 103 },
  { grupo: "Não declarado", percentual: 0.32, quantidade: 1 },
];

const GraficoGenero = () => {
  const { theme } = useTheme();
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
          type: "pie",
          data: {
            labels: DadosGenero.map((item) => item.grupo),
            datasets: [
              {
                label: "Gênero",
                data: DadosGenero.map((item) => item.percentual),
                backgroundColor: ["blue-500", "pink-500", "green-500"],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                backgroundColor: "hsl(var(--background))",
                titleColor: "white",
                bodyColor: "white",
                callbacks: {
                  label: (context) => {
                    const index = context.dataIndex;
                    const quantidade = DadosGenero[index].quantidade;
                    return `${context.raw}% (${quantidade} pessoas)`;
                  },
                },
              },
              legend: {
                position: "top",
                labels: {
                  color: theme === "dark" ? "white" : "black",
                },
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
  }, [theme]);

  return (
    <div className="flex flex-col items-center w-full px-4 md:px-12">
      <h2 className="text-xl font-bold mb-4" style={{ color: theme === "dark" ? "white" : "black" }}>
        Distribuição de Gênero
      </h2>
      <div className="relative w-full max-w-3xl h-[400px]">
        <canvas ref={graficoRef} />
      </div>
    </div>
  );
};

export default GraficoGenero;
