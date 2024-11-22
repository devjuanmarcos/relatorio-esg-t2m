"use client";

import { CallBannerInterface } from "@/components/banners/CallBanner";
import dynamic from "next/dynamic";
import React from "react";
import { ImageWithCardTextBanner, ImageWithCardTextBannerInterface } from "../banners/ImageWithCardTextBanner";
import { DividingLine } from "../ui/dividingLine";
import { TwoCardsTextBanner, TwoCardsTextBannerInterface } from "../banners/TwoCardsTextBanner";
import { SimpleCallBanner, SimpleCallBannerInterface } from "../banners/SimpleCallBanner";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  const CallBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/Frame3.png",
    buttonLink: "#",
    buttonText: "Baixe o Relatório de Impacto Social (PDF)",
    buttonTarget: "_blank",
    title: "Relatório de Impacto Social",
    paragraph:
      "Impacto Social e Desenvolvimento Sustentável que apresenta as ações e os compromissos da T2M com práticas de responsabilidade social, ambiental e de governança (ESG).",
  };

  const mensagemCeoData: ImageWithCardTextBannerInterface = {
    imageAlt: "Foto do Guilherme, CEO da T2M",
    imageUrl: "/img/temp/mensagemCeo.png",
    title: "Liderança inovadora.",
    topTitle: "Mensagem do nosso CEO",
    paragraph:
      "Este Relatório de Impacto Social e Desenvolvimento Sustentável de 2024 reflete nosso compromisso com a transparência e responsabilidade social na T2M. Ele serve como um canal fundamental para comunicar nossas ações e avanços em sustentabilidade, alinhando nossas práticas aos Objetivos de Desenvolvimento Sustentável da ONU e aos princípios de ESG.",
    buttonText: "Leia a mensagem do nosso CEO",
    buttonLink: "/mensagem-ceo",
  };

  const sobreRelatorioData: TwoCardsTextBannerInterface = {
    firstBox: {
      title: "Sobre este relatório",
      paragraphs: [
        "Este Relatório de Impacto Social e Desenvolvimento Sustentável apresenta as ações e os compromissos da T2M com práticas de responsabilidade social, ambiental e de governança (ESG).",
        "Ele reflete nossos esforços para criar um impacto positivo em nossa comunidade, promover um ambiente de trabalho inclusivo e sustentável e minimizar nossa pegada ambiental. ",
        "Ao compartilhar nossas conquistas e desafios, este relatório reforça nosso compromisso com a transparência e com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, além de guiar nossa evolução contínua em direção a um futuro mais sustentável.",
      ],
    },
    secondBox: {
      title: "Contato",
      paragraph:
        "Para dúvidas ou comentários sobre este Relatório, favor entrar em contato com a nossa equipe de Impacto Social e Desenvolvimento Sustentável.",
      buttonLink: "/contato",
      buttonText: "Entrar em contato",
    },
  };

  const processoMaterialidade: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/Frame3.png",
    title: "Processo de materialidade",
    paragraph:
      "Mantemos um relacionamento constante e transparente com todas as nossas partes interessadas, de indivíduos a organizações, para que possamos entender suas expectativas e preocupações e traduzi-las em informações de valor estratégico para auxiliar a gestão de nossos negócios. ",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...CallBannerData} />
      </React.Suspense>
      <ImageWithCardTextBanner {...mensagemCeoData} />
      <DividingLine />
      <TwoCardsTextBanner {...sobreRelatorioData} />
      <SimpleCallBanner {...processoMaterialidade} />
    </div>
  );
};

export default HomePage;
