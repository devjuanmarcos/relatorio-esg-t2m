"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { IoPeopleCircle } from "react-icons/io5";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import {
  FaBalanceScale,
  FaCertificate,
  FaEye,
  FaRecycle,
  FaShoppingCart,
  FaCalendarAlt,
  FaHandsHelping,
  FaTree,
  FaUserTie,
  FaHandshake,
  FaHandHoldingHeart,
  FaPeopleCarry,
  FaGavel,
  FaHands,
  FaGift,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";
import { GiEarthAmerica, GiGlobe } from "react-icons/gi";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { MdBusinessCenter } from "react-icons/md";
import { useTranslations } from "next-intl";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const IconsCardsBanner = dynamic(() =>
  import("@/components/banners/IconsCardsBanner").then((mod) => mod.IconsCardsBanner)
);

const ThreeTextCardsWithNumberCardBanner = dynamic(() =>
  import("@/components/banners/ThreeTextCardsWithNumberCardBanner").then(
    (mod) => mod.ThreeTextCardsWithNumberCardBanner
  )
);

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const HomePage: React.FC = () => {
  const isMounted = useIsMounted();
  const callBannerTrad = useTranslations("HomePage.callBannerTrad");
  const mensagemCeoTrad = useTranslations("HomePage.mensagemCeoTrad");
  const sobreRelatorioTrad = useTranslations("HomePage.sobreRelatorioTrad");
  const processoMaterialidadeTrad = useTranslations("HomePage.processoMaterialidadeTrad");
  const partesInteressadasTrad = useTranslations("HomePage.partesInteressadasTrad");
  const metodologiaTrad = useTranslations("HomePage.metodologiaTrad");
  const quatroCardsMetodologiaTrad = useTranslations("HomePage.quatroCardsMetodologiaTrad");
  const greenwashingDesenvolvimentoSustentavelTrad = useTranslations(
    "HomePage.greenwashingDesenvolvimentoSustentavelTrad"
  );
  const sustentabilidadeTrad = useTranslations("HomePage.sustentabilidadeTrad");
  const movimentoRegenerativoTrad = useTranslations("HomePage.movimentoRegenerativoTrad");
  const nossasCampanhasTrad = useTranslations("HomePage.nossasCampanhasTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/final/impactoSocial.jpg",
    buttonLink: "#",
    buttonTarget: "_blank",
    buttonText: callBannerTrad("buttonText"),
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
  };

  const mensagemCeoData: ImageWithCardTextBannerInterface = {
    imageAlt: mensagemCeoTrad("imageAlt"),
    imageUrl: "/img/temp/mensagemCeo.png",
    title: mensagemCeoTrad("title"),
    topTitle: mensagemCeoTrad("topTitle"),
    paragraph: mensagemCeoTrad("paragraph"),
    buttonText: mensagemCeoTrad("buttonText"),
    buttonLink: "/mensagem-do-nosso-ceo",
    imageAlignment: "start",
  };

  const sobreRelatorioData: ImageWithCardTextBannerInterface = {
    title: sobreRelatorioTrad("title"),
    paragraphs: [
      sobreRelatorioTrad("paragraphs.0"),
      sobreRelatorioTrad("paragraphs.1"),
      sobreRelatorioTrad("paragraphs.2"),
    ],
    imageAlt: sobreRelatorioTrad("imageAlt"),
    imageUrl: "/img/temp/odsonu.png",
    imageAlignment: "end",
    objectContain: true,
  };

  const processoMaterialidadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/final/materialidade.jpg",
    title: processoMaterialidadeTrad("title"),
    paragraph: processoMaterialidadeTrad("paragraph"),
  };

  const partesInteressadasData: IconsCardsBannerInterface = {
    title: partesInteressadasTrad("title"),
    paragraph: partesInteressadasTrad("paragraph"),
    icons: [
      {
        id: 1,
        title: partesInteressadasTrad("icons.0.title"),
        paragraph: partesInteressadasTrad("icons.0.paragraph"),
        icon: FaUserTie,
      },
      {
        id: 2,
        title: partesInteressadasTrad("icons.1.title"),
        paragraph: partesInteressadasTrad("icons.1.paragraph"),
        icon: FaHandshake,
      },
      {
        id: 3,
        title: partesInteressadasTrad("icons.2.title"),
        paragraph: partesInteressadasTrad("icons.2.paragraph"),
        icon: FaHandHoldingHeart,
      },
      {
        id: 4,
        title: partesInteressadasTrad("icons.3.title"),
        paragraph: partesInteressadasTrad("icons.3.paragraph"),
        icon: FaPeopleCarry,
      },
      {
        id: 5,
        title: partesInteressadasTrad("icons.4.title"),
        paragraph: partesInteressadasTrad("icons.4.paragraph"),
        icon: FaGavel,
      },
      {
        id: 6,
        title: partesInteressadasTrad("icons.5.title"),
        paragraph: partesInteressadasTrad("icons.5.paragraph"),
        icon: FaBalanceScale,
      },
    ],
    type: "center",
  };

  const metodologiaData: SimpleCallBannerInterface = {
    alignment: "bottom",
    topTitle: metodologiaTrad("topTitle"),
    title: metodologiaTrad("title"),
    paragraph: metodologiaTrad("paragraph"),
    imageUrl: "/img/temp/metodologia.png",
  };

  const quatroCardsMetodologiaData: ThreeTextCardsWithNumberCardBannerInterface = {
    textCards: [
      {
        topTitle: quatroCardsMetodologiaTrad("textCards.0.topTitle"),
        title: quatroCardsMetodologiaTrad("textCards.0.title"),
        paragraph: quatroCardsMetodologiaTrad("textCards.0.paragraph"),
      },
      {
        topTitle: quatroCardsMetodologiaTrad("textCards.1.topTitle"),
        title: quatroCardsMetodologiaTrad("textCards.1.title"),
        paragraph: quatroCardsMetodologiaTrad("textCards.1.paragraph"),
      },
    ],
  };

  const greenwashingDesenvolvimentoSustentavelData: NumberCardsBannerInterface = {
    alignment: "center",
    topTitle: greenwashingDesenvolvimentoSustentavelTrad("topTitle"),
    title: greenwashingDesenvolvimentoSustentavelTrad("title"),
    paragraph: greenwashingDesenvolvimentoSustentavelTrad("paragraph"),
    extraButtonBottom: {
      buttonLink:
        "https://www.t2mlab.com/greenwashing-x-desenvolvimento-sustentavel-a-verdade-por-tras-das-praticas-de-sustentabilidade/",
      buttonTarget: "_blank",
      buttonText: greenwashingDesenvolvimentoSustentavelTrad("extraButtonBottom.buttonText"),
    },
    numberCards: [
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.0.title"),
        icon: FaTree,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.0.paragraph"),
      },
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.1.title"),
        icon: FaEye,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.1.paragraph"),
      },
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.2.title"),
        icon: FaShoppingCart,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.2.paragraph"),
      },
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.3.title"),
        icon: FaCertificate,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.3.paragraph"),
      },
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.4.title"),
        icon: FaRecycle,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.4.paragraph"),
      },
      {
        title: greenwashingDesenvolvimentoSustentavelTrad("numberCards.5.title"),
        icon: FaBalanceScale,
        paragraph: greenwashingDesenvolvimentoSustentavelTrad("numberCards.5.paragraph"),
      },
    ],
    type: "border",
  };

  const sustentabilidadeData: SimpleCallBannerInterface = {
    title: sustentabilidadeTrad("title"),
    paragraph: sustentabilidadeTrad("paragraph"),
    alignment: "start",
    imageUrl: "/img/temp/esg/plantar.jpg",
  };

  const movimentoRegenerativoData: NumberCardsBannerInterface = {
    ods: [11, 13, 15],
    title: movimentoRegenerativoTrad("title"),
    paragraph: movimentoRegenerativoTrad("paragraph"),
    numberCards: [
      {
        title: movimentoRegenerativoTrad("numberCards.0.title"),
        icon: FaHandsHelping,
        paragraph: movimentoRegenerativoTrad("numberCards.0.paragraph"),
      },
      {
        title: movimentoRegenerativoTrad("numberCards.1.title"),
        icon: FaCalendarAlt,
        paragraph: movimentoRegenerativoTrad("numberCards.1.paragraph"),
      },
      {
        title: movimentoRegenerativoTrad("numberCards.2.title"),
        icon: FaTree,
        paragraph: movimentoRegenerativoTrad("numberCards.2.paragraph"),
      },
    ],
    type: "border",
  };

  const nossasCampanhasData: NumberCardsBannerInterface = {
    ods: [1, 3, 5, 8, 10],
    title: nossasCampanhasTrad("title"),
    paragraph: nossasCampanhasTrad("paragraph"),
    numberCards: [
      {
        title: nossasCampanhasTrad("numberCards.0.title"),
        icon: FaHands,
        paragraph: nossasCampanhasTrad("numberCards.0.paragraph"),
      },
      {
        title: nossasCampanhasTrad("numberCards.1.title"),
        icon: FaGift,
        paragraph: nossasCampanhasTrad("numberCards.1.paragraph"),
      },
      {
        title: nossasCampanhasTrad("numberCards.2.title"),
        icon: MdBusinessCenter,
        paragraph: nossasCampanhasTrad("numberCards.2.paragraph"),
      },
    ],
    type: "border",
  };

  const tresDimensoesData: NumberCardsBannerInterface = {
    // ods: [3, 8, 12, 13],
    // title: "As quatro dimensões",
    // paragraph:
    // "A Sustentabilidade 4.4 refere-se a uma abordagem avançada e integrada ao modelo empresarial da chamada Quarta Revolução Industrial. O objetivo é utilizar as tecnologias disponíveis para gerar conhecimento e produtividade, combinando as transformações digitais em processos industriais, econômicos e sociais com inovações e avanços tecnológicos, além de práticas sustentáveis, para promover uma economia mais eficiente, responsável e resiliente.",
    numberCards: [
      {
        title: "Sustentabilidade Ambiental",
        icon: FaLeaf,
        paragraph:
          "Melhoria da saúde e do bem-estar humano, proteção do capital natural (terra, ar, água, minerais, etc.) e dos ecossistemas globais. Isso inclui questões relacionadas à energia e ao clima, os impactos e as externalidades na produção de bens e na prestação de serviços, além das infraestruturas 'verdes' e da economia circular.",
      },
      {
        title: "Responsabilidade Social",
        icon: FaUsers,
        paragraph:
          "Preservação do capital social, criando serviços que apoiam comunidades, culturas e globalização, com investimentos em saúde, saneamento, educação e acesso a serviços essenciais, conforme os Objetivos de Desenvolvimento Sustentável (ODS ONU).",
      },
      {
        title: "Governança Consciente",
        icon: FaBalanceScale,
        paragraph:
          "Organizações devem agregar valor aos clientes, investir nos funcionários, atuar de forma ética com fornecedores, apoiar comunidades e proteger o meio ambiente, adotando práticas sustentáveis para gerar valor de longo prazo.",
      },
    ],
    type: "border",
  };

  const sustentabilidadeAmbientalData: ImageWithCardTextBannerInterface = {
    imageAlt: "ícone da sustentabilidade ambiental",
    title: "Sustentabilidade Ambiental",
    imageUrl: "/img/temp/esg/ambiental.png",
    objectContain: true,
    paragraphs: [
      "Refere-se à preservação dos recursos naturais e à redução dos impactos negativos causados pelas atividades humanas no meio ambiente.",
      "O objetivo é promover a saúde e o bem-estar humano, tanto no presente quanto no futuro, através da proteção do capital natural (terra, ar, água, minerais, entre outros), além da preservação dos ecossistemas globais. Isso inclui a atenção às questões de energia e clima, o desenvolvimento de infraestruturas 'verdes' e a adoção de uma economia circular.",
      "Conservação da Biodiversidade: Assegurar que os ecossistemas e as espécies não sejam degradados, promovendo a proteção de habitats naturais e a recuperação de áreas já afetadas.",
      "Gestão Responsável dos Recursos Naturais: Utilizar de forma racional recursos como água, solo e energia, buscando reduzir desperdícios e evitar o esgotamento desses recursos essenciais para a sustentabilidade.",
      "Redução da Pegada Ecológica: Implementar práticas que diminuam a emissão de gases de efeito estufa (como o CO₂), o consumo de fontes de energia não-renováveis e a geração de resíduos, com o objetivo de mitigar as mudanças climáticas.",
      "Uso de Tecnologias Verdes e Renováveis: Adotar fontes de energia renováveis (solar, eólica, hídrica) e práticas agrícolas e industriais mais limpas e eficientes, que contribuam para a preservação ambiental e para a eficiência dos processos produtivos.",
    ],
    imageAlignment: "end",
  };

  const responsabilidadeSocialData: ImageWithCardTextBannerInterface = {
    imageAlt: "Responsabilidade Social",
    title: "Responsabilidade Social",
    imageUrl: "/img/temp/esg/social.png",
    objectContain: true,
    paragraphs: [
      "A responsabilidade social vai além de simples ações isoladas; ela está ligada à preservação dos recursos sociais e ao bem-estar coletivo, garantindo que as pessoas tenham uma vida digna e igualdade de oportunidades. Esse conceito abrange uma visão mais ampla, que leva em consideração as diversas comunidades, culturas e os impactos da globalização. Ao focar no desenvolvimento humano, busca-se investir em áreas essenciais como saúde, saneamento, educação e acesso a serviços, além de promover o conhecimento, a nutrição, o lazer e a cultura.",
      "A justiça social, por sua vez, é fundamental para diminuir as desigualdades sociais e econômicas, garantindo o acesso universal a direitos básicos, como saúde, educação, segurança e moradia. Esse compromisso com a igualdade visa criar uma sociedade mais justa e equitativa para todos.",
      "No mesmo sentido, a responsabilidade social também busca fortalecer os princípios da Declaração Universal dos Direitos Humanos, defendendo os direitos básicos para que cada pessoa possa viver com dignidade, liberdade, saúde e segurança.",
      "A melhoria da qualidade de vida é outro objetivo importante, especialmente quando se trata de aumentar o Índice de Desenvolvimento Humano (IDH). Isso é feito por meio de ações focadas em áreas como educação, saúde, saneamento, programas sociais e causas comunitárias, além de incentivar práticas que envolvem turismo, esporte e lazer.",
      "Por fim, a participação social é essencial para envolver as comunidades nas decisões que afetam suas vidas. O empoderamento social, por meio do engajamento nas esferas política e econômica, fortalece a cidadania e assegura que as vozes das pessoas sejam ouvidas e respeitadas.",
    ],
    imageAlignment: "end",
  };

  const governancaConscienteData: ImageWithCardTextBannerInterface = {
    imageAlt: "Governança Consciente",
    title: "Governança Consciente",
    imageUrl: "/img/temp/esg/governanca.png",
    objectContain: true,
    paragraphs: [
      "A preservação dos recursos econômicos e o uso eficiente dos ativos e compromissos orçamentários visam manter níveis elevados e estáveis de crescimento econômico ao longo do tempo. Contudo, esse crescimento não deve ser o único objetivo das organizações, pois a qualidade do crescimento é tão importante quanto a sua quantidade. O propósito das organizações evolui conforme as mudanças no ambiente socioeconômico e nas condições do ecossistema, permitindo que continue relevante para todas as Partes Interessadas.",
      "É essencial garantir que empresas, governos e organizações gerem valor e lucros de maneira sustentável, sem prejudicar os recursos naturais ou sociais, adotando práticas financeiras que considerem os impactos ambientais e sociais de suas ações, conhecidas como investimentos ESG (ambiental, social e de governança).",
      "Além disso, a gestão eficiente de recursos implica na utilização prudente e responsável do capital, buscando maximizar a rentabilidade a longo prazo sem comprometer o bem-estar das gerações futuras ou os ecossistemas.",
    ],
    imageAlignment: "end",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem] ">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>
      <ImageWithCardTextBanner {...mensagemCeoData} />
      <DividingLine />
      <ImageWithCardTextBanner {...sobreRelatorioData} />
      <SimpleCallBanner {...processoMaterialidadeData} />
      <IconsCardsBanner {...partesInteressadasData} />
      <SimpleCallBanner {...metodologiaData} />
      <ThreeTextCardsWithNumberCardBanner {...quatroCardsMetodologiaData} />
      <NumberCardsBanner {...greenwashingDesenvolvimentoSustentavelData} />
      <SimpleCallBanner {...sustentabilidadeData} />
      <NumberCardsBanner {...tresDimensoesData} />
      <ImageWithCardTextBanner {...sustentabilidadeAmbientalData} />
      <ImageWithCardTextBanner {...responsabilidadeSocialData} />
      <ImageWithCardTextBanner {...governancaConscienteData} />
      <DividingLine />
      <NumberCardsBanner {...movimentoRegenerativoData} />
      <NumberCardsBanner {...nossasCampanhasData} />
    </div>
  );
};

export default HomePage;
