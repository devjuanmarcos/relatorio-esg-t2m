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
  const graficoContratadosAdotadosRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoContratadosFormadosRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoDeficienciaRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoMulheresRef = React.useRef<HTMLCanvasElement | null>(null);

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
        {
          ref: graficoContratadosAdotadosRef,
          data: [
            { label: "Contratados Adotados", value: DadosEmpresa.contratadosAdotados },
            { label: "Formados na Residência", value: DadosResidencia.formados - DadosEmpresa.contratadosAdotados },
          ],
          title: "Contratados Adotados em base aos Formados na Residência",
          colors: ["#FF9800", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoContratadosFormadosRef,
          data: [
            { label: "Contratados Adotados", value: DadosEmpresa.contratadosAdotados },
            {
              label: "Contratados na Residência",
              value: DadosResidencia.contratados - DadosEmpresa.contratadosAdotados,
            },
          ],
          title: "Contratados Adotados em base aos Contratados na Residência",
          colors: ["#3F51B5", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoDeficienciaRef,
          data: [
            { label: "Deficientes Contratados", value: DadosEmpresa.pessoasComDeficiencia },
            { label: "Deficientes Formados", value: 36 - DadosEmpresa.pessoasComDeficiencia },
          ],
          title: "Deficientes Contratados em base aos Deficientes Formados",
          colors: ["#9C27B0", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoMulheresRef,
          data: [
            { label: "Mulheres Contratadas", value: DadosEmpresa.participacaoFeminina },
            { label: "Mulheres Formadas e Contratadas", value: 143 - DadosEmpresa.participacaoFeminina },
          ],
          title: "Mulheres Contratadas em base às Mulheres Formadas e Contratadas",
          colors: ["#E91E63", "#E0E0E0"],
          type: "doughnut",
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
                  formatter: (value: number, context: any) => {
                    return "";
                  },
                  color: "#fff",
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
    <div className="grid grid-cols-4 gap-4">
      <div className="flex justify-center items-center">
        <canvas ref={graficoProgressoRef} />
      </div>
      <div className="flex justify-center items-center">
        <canvas ref={graficoContratadosAdotadosRef} />
      </div>
      <div className="flex justify-center items-center">
        <canvas ref={graficoContratadosFormadosRef} />
      </div>
      <div className="flex justify-center items-center">
        <canvas ref={graficoDeficienciaRef} />
      </div>
      <div className="flex justify-center items-center">
        <canvas ref={graficoMulheresRef} />
      </div>
    </div>
  );
};

export default GraficosResidencia;
