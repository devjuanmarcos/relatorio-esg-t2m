import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React from "react";
import TextVariantes from "./TextsVariants";
import {
  FaFemale,
  FaAccessibleIcon,
  FaBuilding,
  FaGraduationCap,
  FaUniversity,
  FaChalkboardTeacher,
  FaSchool,
} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import Image from "next/image";

Chart.register(...registerables, ChartDataLabels);

const DadosResidencia = {
  formados: 1092,
  contratados: 520,
};

const DadosProfessores = {
  totalProfessoresMonitores: 40,
  professoresMonitoresT2M: 10,
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
  const graficoContratadosAdotadosRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoContratadosFormadosRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoDeficienciaRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoMulheresRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoEscolaPublicaRef = React.useRef<HTMLCanvasElement | null>(null);
  const graficoProfessoresRef = React.useRef<HTMLCanvasElement | null>(null);

  const chartInstances = React.useRef<Chart[]>([]);

  React.useEffect(() => {
    const destroyCharts = () => {
      chartInstances.current.forEach((chart) => chart.destroy());
      chartInstances.current = [];
    };

    const createCharts = () => {
      const configs = [
        {
          ref: graficoContratadosAdotadosRef,
          data: [
            { label: "Contratados Adotados", value: DadosEmpresa.contratadosAdotados },
            { label: "Formados na Residência", value: DadosResidencia.formados - DadosEmpresa.contratadosAdotados },
          ],
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
          colors: ["#9C27B0", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoDeficienciaRef,
          data: [
            { label: "Deficientes Contratados", value: DadosEmpresa.pessoasComDeficiencia },
            { label: "Deficientes Formados", value: 36 - DadosEmpresa.pessoasComDeficiencia },
          ],
          colors: ["#3F51B5", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoMulheresRef,
          data: [
            { label: "Mulheres Contratadas", value: DadosEmpresa.participacaoFeminina },
            { label: "Mulheres Formadas e Contratadas", value: 143 - DadosEmpresa.participacaoFeminina },
          ],
          colors: ["#E91E63", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoEscolaPublicaRef,
          data: [
            { label: "Egressos de Escola Pública", value: DadosEmpresa.egressosEscolaPublica },
            { label: "Outros Egressos", value: DadosEmpresa.contratadosAdotados - DadosEmpresa.egressosEscolaPublica },
          ],
          colors: ["#4CAF50", "#E0E0E0"],
          type: "doughnut",
        },
        {
          ref: graficoProfessoresRef,
          data: [
            { label: "Professores Monitores da T2M", value: DadosProfessores.professoresMonitoresT2M },
            {
              label: "Outros Professores Monitores",
              value: DadosProfessores.totalProfessoresMonitores - DadosProfessores.professoresMonitoresT2M,
            },
          ],
          colors: ["#58ceec", "#E0E0E0"],
          type: "doughnut",
        },
      ];

      configs.forEach(({ ref, data, colors, type }) => {
        if (ref.current) {
          const chart = new Chart(ref.current, {
            type: type || ("bar" as any), // Defina o tipo de gráfico
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

  return (
    <div className={`px-2 md:px-12 flex flex-col w-full gap-10 justify-center items-center text-center`}>
      <div className="flex items-center md:justify-between gap-12 flex-col ">
        <div className={`flex flex-col gap-3 `}>
          <TextVariantes variant="top_title" lineCenter lineBottom>
            Indicadores da Residência em TIC
          </TextVariantes>
          <TextVariantes variant="h2_title">Caso Prático T2M – Parceria Serratec</TextVariantes>
          <TextVariantes variant="paragraph_01" extraClassName="max-w-[42rem] mx-auto">
            Dados sobre os 502 residentes contratados imediatamente após a conclusão da Residência em TIC.
          </TextVariantes>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 md:px-12">
          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoContratadosAdotadosRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaPerson className="text-[6.5rem]" style={{ color: "#FF9800" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">18,2%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              205 residentes adotados, representando 18,75% do total de 1092 formados
            </TextVariantes>
          </div>

          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoContratadosFormadosRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaGraduationCap className="text-[6.5rem]" style={{ color: "#9C27B0" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">20%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Contratou 102 formados, o que representa 20% de 520 das contratações realizadas pelas empresas apoiadoras.
            </TextVariantes>
          </div>

          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoDeficienciaRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaAccessibleIcon className="text-[6.5rem]" style={{ color: "#3F51B5" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">11%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Do total de 36 pessoas com deficiência formadas, 11% (4 pessoas) foram contratadas pela T2M.
            </TextVariantes>
          </div>

          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoMulheresRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaFemale className="text-[6.5rem]" style={{ color: "#E91E63" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">14,42%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              A T2M contratou 21 mulheres, o que corresponde a 14,42% das contratações diretas.
            </TextVariantes>
          </div>
          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoEscolaPublicaRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <FaUniversity className="text-[6.5rem]" style={{ color: "#4CAF50" }} />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">51%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Dos 102 adotados contratados, {DadosEmpresa.egressosEscolaPublica} são egressos de escola pública,
              representando 51% do total.
            </TextVariantes>
          </div>
          <div className="relative bg-background rounded-lg p-8 flex flex-col gap-1 w-full text-primary shadow-md border-t border-t-primary text-center">
            <div className="relative">
              <canvas ref={graficoProfessoresRef} />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={"/ico/school.png"} width={104} height={104} alt="ícone de escola" />
              </div>
            </div>
            <TextVariantes variant="mega_button_text">25%</TextVariantes>
            <TextVariantes variant="paragraph_01">
              Dos 40 professores e monitores do ciclo do Serratec, 10 são da T2M, representando 25% do total.
            </TextVariantes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficosResidencia;
