import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import TextVariantes from "./TextsVariants";
import { FaGraduationCap, FaUserCheck } from "react-icons/fa";

Chart.register(...registerables, ChartDataLabels);

const DadosEmpresa = {
  formados: 518,
  contratados: 98,
  permanecem: Math.round(0.65 * 98),
};

const GraficosUff = () => {
  const graficocontratadosRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoPermanecemRef = React.useRef<HTMLCanvasElement | null>(null);

  const chartInstances = React.useRef<Chart[]>([]);

  React.useEffect(() => {
    const destroyCharts = () => {
      chartInstances.current.forEach((chart) => chart.destroy());
      chartInstances.current = [];
    };

    const createCharts = () => {
      const configs = [
        {
          ref: graficocontratadosRef,
          data: [
            { label: "Formados", value: DadosEmpresa.contratados },
            { label: "Contratados", value: DadosEmpresa.formados - DadosEmpresa.contratados },
          ],
          colors: ["#FF9800", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoPermanecemRef,
          data: [
            { label: "Contratados", value: DadosEmpresa.permanecem },
            {
              label: "Permanecem na empresa",
              value: DadosEmpresa.contratados - DadosEmpresa.permanecem,
            },
          ],
          colors: ["#9C27B0", "#E0E0E0"],
          type: "doughnut",
        },
      ];

      configs.forEach(({ ref, data, colors, type }) => {
        if (ref.current) {
          const chart = new Chart(ref.current, {
            type: type || ("bar" as any), // Define o tipo de gráfico
            data: {
              labels: data.map((item) => item.label),
              datasets: [
                {
                  data: data.map((item) => item.value),
                  backgroundColor: colors,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  display: false, // Remove o label
                },
                title: {
                  display: false, // Remove o título
                },
                datalabels: {
                  display: false, // Remove os rótulos dos dados
                },
              },
              cutout: "70%", // Controla o tamanho da rosca
            },
          });
          chartInstances.current.push(chart);
        }
      });
    };

    destroyCharts();
    createCharts();

    return () => {
      destroyCharts();
    };
  }, []);

  // Cálculo das porcentagens

  return (
    <div className={`px-2 md:px-12 flex flex-col w-full gap-10 justify-center items-center text-center`}>
      <div className="flex items-center md:justify-between gap-12 flex-col ">
        <div className={`flex flex-col gap-3 `}>
          <TextVariantes variant="top_title" lineCenter lineBottom>
            Indicadores da Universidade Federal Fluminense
          </TextVariantes>
          <TextVariantes variant="h2_title">Caso Prático T2M – Parceria UFF</TextVariantes>
          <TextVariantes variant="paragraph_01" extraClassName="max-w-[42rem] mx-auto">
            Dados sobre os 518 formados oriundos da parceria com a UFF em seus cursos certificados 2019.2 – 2024.1
          </TextVariantes>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:px-12 md:max-w-[50%]">
          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficocontratadosRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Substituindo o ícone do primeiro gráfico */}
                <FaGraduationCap className="text-[6.5rem]" style={{ color: "#FF9800" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">19%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Dos 518 formados pela UFF, {DadosEmpresa.contratados} foram contratados pela T2M, representando 19% do
              total de formados.
            </TextVariantes>
          </div>

          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoPermanecemRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Substituindo o ícone do segundo gráfico */}
                <FaUserCheck className="text-[6.5rem]" style={{ color: "#9C27B0" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">65%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Dos {DadosEmpresa.contratados} contratados, {DadosEmpresa.permanecem} permanecem na empresa, representando{" "}
              65% do total de contratados.
            </TextVariantes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficosUff;
