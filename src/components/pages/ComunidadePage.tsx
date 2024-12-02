"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const IconsCardsBanner = dynamic(() =>
  import("@/components/banners/IconsCardsBanner").then((mod) => mod.IconsCardsBanner)
);

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const ComunidadePage: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/capacitandoComunidade.jpg",
    buttonLink: "https://www.t2mlab.com/nosso-blog/",
    buttonText: "Nosso blog",
    buttonTarget: "_blank",
    title: "Capacitando a comunidade",
    paragraph:
      "A empresa desenvolve iniciativas que vão além dos negócios, buscando gerar benefícios sociais e ambientais alinhados com seus valores.",
  };

  const oportunidadesInclusivasData: ImageWithCardTextBannerInterface = {
    topTitle: "Residência",
    title: "Oportunidades inclusivas e capacitadoras para a região",
    paragraph:
      "A T2M é um dos principais patrocinadores do Programa de Residência de Software do Serratec, que visa capacitar jovens em situação de vulnerabilidade econômica para carreiras na área de tecnologia. Este programa oferece formação técnica em desenvolvimento de software e prepara os participantes para ingressarem no mercado de trabalho em um setor de alta demanda. Com isso, a T2M reforça seu compromisso com a responsabilidade social e com o desenvolvimento de talentos locais, promovendo uma economia mais inclusiva e sustentável.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
    buttonText: "Quero me inscrever",
    buttonLink: "https://serratec.org/residencia/",
    buttonTarget: "_blank",
  };

  const nossosParceirosData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: "Resultados",
    imageUrl: "/img/temp/nossosParceiros.png",
    title: "Nossos parceiros",
    paragraph: "Nossa rede de colaboradores que impulsiona e molda o sucesso em cada etapa",
  };

  const listagemParceirosData: IconsCardsBannerInterface = {
    images: [
      {
        id: 1,
        title: "Scaled Agile",
        paragraph:
          "A Scaled Agile, Inc. é reconhecida mundialmente como a criadora do Scaled Agile Framework® (SAFe), uma abordagem líder para a agilidade empresarial.",
        imageUrl: "/img/temp/parceiros/ScaledAgile.png",
        imageAlt: "Logo da Scaled Agile",
      },
      {
        id: 2,
        title: "Serratec",
        paragraph:
          "Venha fazer parte de um dos maiores polos tecnológicos do Brasil! Serviços e benefícios para sua empresa ou Startup começarem com o pé direito!",
        imageUrl: "/img/temp/parceiros/Serratec.png",
        imageAlt: "Logo do Serratec",
      },
      {
        id: 3,
        title: "IBM",
        paragraph: "Soluções para implementar um processo de desenvolvimento de sistemas completo e automatizado.",
        imageUrl: "/img/temp/parceiros/IBM.png",
        imageAlt: "Logo da IBM",
      },
      {
        id: 4,
        title: "Microsoft",
        paragraph: "A Microsoft é uma Bigtech líder em computação em nuvem, Power Platform e inteligência artificial.",
        imageUrl: "/img/temp/parceiros/Microsoft.png",
        imageAlt: "Logo da Microsoft",
      },
      {
        id: 5,
        title: "Delphi",
        paragraph: "Ferramenta para Virtualização de Dados e para soluções de Mascaramento de Dados. ",
        imageUrl: "/img/temp/parceiros/Delphi.png",
        imageAlt: "Logo da Delphi",
      },
      {
        id: 6,
        title: "BIOMOB",
        paragraph:
          "Acessibilidade e inclusão é a nossa missão. Criamos Soluções digitais para tomar o convívio social mais harmônico, proporcionando qualidade da vida e uma participação plena na sociedade para aqueles que se veem omitidos dela.",
        imageUrl: "/img/temp/parceiros/BIOMOB.png",
        imageAlt: "Logo da BIOMOB",
      },
      {
        id: 7,
        title: "Automation Anywhere",
        paragraph:
          "A Automation Anywhere busca liberar as pessoas das tarefas triviais e repetitivas para que passem mais tempo usando seu intelecto e sua criatividade para resolver desafios empresariais avançados e realizar trabalho que exige conhecimento específico.",
        imageUrl: "/img/temp/parceiros/AutomationAnywhere.png",
        imageAlt: "Logo da Automation Anywhere",
      },
      {
        id: 8,
        title: "VMEdu",
        paragraph:
          "A VMEdu é a empresa líder na indústria de certificação e treinamento profissional e já propiciou o treinamento de mais de 500.000 alunos de mais de 3500 empresas em mais de 150 países com uma taxa de sucesso de 98,7% por meio de sua rede global de mais de 1100 provedores de treinamento.",
        imageUrl: "/img/temp/parceiros/VMEdu.png",
        imageAlt: "Logo da VMEdu",
      },
      {
        id: 9,
        title: "Future",
        paragraph:
          "Reconhecida no mercado brasileiro de Segurança da Informação, possuímos uma sólida base de clientes, distribuídos em diversos portes e segmentos, atendendo desde grandes empresas públicas e privadas, até empresas de médio porte. ",
        imageUrl: "/img/temp/parceiros/Future.png",
        imageAlt: "Logo da Future",
      },
    ],
    type: "center",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...oportunidadesInclusivasData} />
      <SimpleCallBanner {...nossosParceirosData} />
      <IconsCardsBanner {...listagemParceirosData} />
    </div>
  );
};

export default ComunidadePage;
