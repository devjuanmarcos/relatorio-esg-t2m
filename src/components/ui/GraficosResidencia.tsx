import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";

Chart.register(...registerables, ChartDataLabels);

const DadosResidencia = {
  formados: 1092,
  contratados: 520,
};

const DadosEmpresa = {
  formadosAdotados: 205,
  contratadosAdotados: 102,
  pessoasComDeficiencia: Math.round(0.04 * 102), // 4% dos contratados
  participacaoFeminina: Math.round(0.21 * 102), // 21% dos contratados
  participacaoMasculina: Math.round(0.79 * 102), // 79% dos contratados
  egressosEscolaPublica: Math.round(0.51 * 102), // 51% dos contratados
  egressosEscolaParticular: Math.round(0.49 * 102), // 49% dos contratados
  professoresMonitores: 10,
};

const GraficosResidencia = () => {
  const graficoProgressoRef = React.useRef<HTMLCanvasElement | null>(null);
  const chartInstances = React.useRef<Chart[]>([]);

  React.useEffect(() => {
    const destroyCharts = () => {
      chartInstances.current.forEach((chart) => chart.destroy());
      chartInstances.current = [];
    };

    const createCharts = () => {
      const configs = [
        {
          ref: graficoProgressoRef,
          data: [
            { label: "Egressos Escola Pública", value: DadosEmpresa.egressosEscolaPublica },
            { label: "Restante", value: DadosEmpresa.contratadosAdotados - DadosEmpresa.egressosEscolaPublica },
          ],
          title: "Progresso de Egressos de Escola Pública",
          colors: ["#4CAF50", "#E0E0E0"], // Verde para progresso e cinza para restante
          type: "doughnut", // Tipo de gráfico: rosca
        },
      ];

      configs.forEach(({ ref, data, title, colors, type }) => {
        if (ref.current) {
          const chart = new Chart(ref.current, {
            type: type || ("bar" as any), // Defina o tipo de gráfico
            data: {
              labels: data.map((item) => item.label).filter((label) => label !== "Restante"), // Remover "Restante" do cabeçalho
              datasets: [
                {
                  label: "Total",
                  data: data.map((item) => item.value),
                  backgroundColor: colors,
                  // Desabilitar a interação de hover completamente
                  tooltip: {
                    enabled: false, // Desabilitar tooltips
                  },
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    // Remover a entrada de "Restante" na legenda
                    filter: function (legendItem: any) {
                      return legendItem.text !== "Restante";
                    },
                  },
                },
                title: {
                  display: true,
                  text: title,
                },
                datalabels: {
                  // Remover a exibição das porcentagens
                  formatter: (value: number, context: any) => {
                    // Retorna uma string vazia para não exibir nada
                    return "";
                  },
                  color: "#fff", // Cor do texto dentro do gráfico
                  font: {
                    weight: "bold",
                  },
                  align: "center",
                  anchor: "center",
                },
              },
              cutout: "70%", // Controla o tamanho da rosca
              interaction: {
                mode: null, // Desabilitar interação
              },
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

  return (
    <div className="grid grid-cols-4">
      <div className="flex justify-center items-center">
        <canvas ref={graficoProgressoRef} />
      </div>
    </div>
  );
};

export default GraficosResidencia;
