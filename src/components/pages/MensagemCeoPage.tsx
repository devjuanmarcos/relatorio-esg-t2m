"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import TextVariantes from "../ui/TextsVariants";
import { FaBalanceScale, FaLeaf, FaUsers } from "react-icons/fa";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const MensagemCeoPage: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/guilherme.jpg",
    buttonLink: "https://www.linkedin.com/in/guilherme-da-motta-alves-93850634/?originalSubdomain=br",
    buttonText: "Guilherme da Motta Alves - Linkedin",
    buttonTarget: "_blank",
    title: "Mensagem do nosso CEO",
    paragraph: "Na T2M, reforçamos nosso compromisso e alinhamento com os ODS da ONU e as práticas de ESG.",
  };

  const tresTopicosData: NumberCardsBannerInterface = {
    title: "",
    paragraph:
      "Comprometidos com a sustentabilidade e a responsabilidade empresarial, nossa organização prioriza a integração dos princípios de ESG em todas as nossas atividades. Reconhecemos a importância de:",
    numberCards: [
      {
        title: "Proteger o meio ambiente (Ambiental)",
        icon: FaLeaf,
        paragraph:
          "por meio da redução de nossa pegada de carbono, do uso eficiente de recursos naturais e da promoção de práticas sustentáveis.",
      },
      {
        title: "Promover relações sociais justas e equitativas (Social)",
        icon: FaUsers,
        paragraph:
          "respeitando os direitos humanos, a diversidade, a inclusão e o bem-estar de nossos colaboradores, clientes e comunidades.",
      },
      {
        title: "Praticar uma governança corporativa transparente e ética (Governança)",
        icon: FaBalanceScale,
        paragraph:
          "com liderança responsável, gestão de riscos eficaz e compliance com leis e regulamentações. Nossa visão é criar valor sustentável para todos os stakeholders, contribuindo para um futuro mais próspero e resiliente.",
      },
    ],
    type: "border",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <div className="flex flex-col gap-2 px-2 md:px-12">
        <TextVariantes variant="paragraph_01">
          Este Relatório de Impacto Social e Desenvolvimento Sustentável de 2024 reflete nosso compromisso com a
          transparência e responsabilidade social na T2M. Ele serve como um canal fundamental para comunicar nossas
          ações e avanços em sustentabilidade, alinhando nossas práticas aos Objetivos de Desenvolvimento Sustentável da
          ONU e aos princípios de ESG. Este relatório não apenas evidencia nossos esforços em capacitação, diversidade e
          governança ética, mas também nos permite fortalecer laços com nossos stakeholders e guiar nossas decisões
          futuras. Ao compartilhar nossos resultados e desafios, reafirmamos nossa dedicação a um impacto positivo e
          duradouro.
        </TextVariantes>
        <TextVariantes variant="top_title">Guilherme da Motta Alves - CEO</TextVariantes>
      </div>

      <NumberCardsBanner {...tresTopicosData} />
    </div>
  );
};

export default MensagemCeoPage;
