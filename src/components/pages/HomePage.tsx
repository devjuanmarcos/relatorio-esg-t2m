"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
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
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { MdBusinessCenter } from "react-icons/md";
import { useTranslations } from "next-intl";
import ComparisonChart from "../ui/GraficosResidencia";
import GraficosResidencia from "../ui/GraficosResidencia";
import { CarouselSectionType } from "@/@types/types";

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

const AcordionCalendar = dynamic(() => import("@/components/ui/acordionCalendar").then((mod) => mod.default));

const CarouselSection = dynamic(() =>
  import("@/components/banners/CarouselSection").then((mod) => mod.CarouselSection)
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
  const tresDimensoesTrad = useTranslations("HomePage.tresDimensoesTrad");
  const sustentabilidadeAmbientalTrad = useTranslations("HomePage.sustentabilidadeAmbientalTrad");
  const responsabilidadeSocialTrad = useTranslations("HomePage.responsabilidadeSocialTrad");
  const governancaConscienteTrad = useTranslations("HomePage.governancaConscienteTrad");
  const codigoCondutaTrad = useTranslations("HomePage.codigoCondutaTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/final/impactoSocial.jpg",
    buttonLink: "https://biomobtinastorage.blob.core.windows.net/biomob/RELATORIO_ESG_T2M.pdf",
    buttonTarget: "_blank",
    buttonText: callBannerTrad("buttonText"),
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
    alignment: "start",
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
        paragraphs: [
          partesInteressadasTrad("icons.0.paragraphs.0"),
          partesInteressadasTrad("icons.0.paragraphs.1"),
          partesInteressadasTrad("icons.0.paragraphs.2"),
        ],
        icon: FaUserTie,
      },
      {
        id: 2,
        title: partesInteressadasTrad("icons.1.title"),
        paragraphs: [partesInteressadasTrad("icons.1.paragraphs.0"), partesInteressadasTrad("icons.1.paragraphs.1")],
        icon: FaHandshake,
      },
      {
        id: 3,
        title: partesInteressadasTrad("icons.2.title"),
        paragraphs: [
          partesInteressadasTrad("icons.2.paragraphs.0"),
          partesInteressadasTrad("icons.2.paragraphs.1"),
          partesInteressadasTrad("icons.2.paragraphs.2"),
        ],
        icon: FaHandHoldingHeart,
      },
      {
        id: 4,
        title: partesInteressadasTrad("icons.3.title"),
        paragraphs: [
          partesInteressadasTrad("icons.3.paragraphs.0"),
          partesInteressadasTrad("icons.3.paragraphs.1"),
          partesInteressadasTrad("icons.3.paragraphs.2"),
        ],
        icon: FaPeopleCarry,
      },
      {
        id: 5,
        title: partesInteressadasTrad("icons.4.title"),
        paragraphs: [
          partesInteressadasTrad("icons.4.paragraphs.0"),
          partesInteressadasTrad("icons.4.paragraphs.1"),
          partesInteressadasTrad("icons.4.paragraphs.2"),
        ],
        icon: FaGavel,
      },
      {
        id: 6,
        title: partesInteressadasTrad("icons.5.title"),
        paragraphs: [partesInteressadasTrad("icons.5.paragraphs.0"), partesInteressadasTrad("icons.5.paragraphs.1")],
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
        title: quatroCardsMetodologiaTrad("textCards.0.title"),
        paragraph: quatroCardsMetodologiaTrad("textCards.0.paragraph"),
        topics: [
          quatroCardsMetodologiaTrad("textCards.0.topics.0"),
          quatroCardsMetodologiaTrad("textCards.0.topics.1"),
        ],
      },
      {
        title: quatroCardsMetodologiaTrad("textCards.1.title"),
        paragraph: quatroCardsMetodologiaTrad("textCards.1.paragraph"),
        topics: [
          quatroCardsMetodologiaTrad("textCards.1.topics.0"),
          quatroCardsMetodologiaTrad("textCards.1.topics.1"),
        ],
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

  const voluntariadoApoioImagensData: CarouselSectionType = {
    images: [
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ.webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (2).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (3).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (4).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (5).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (6).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (7).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (8).webp",
        imageAlt: "",
      },
      {
        image: "/img/final/plantio/Comitê de Plantio de Árvores de Petrópolis - Rio de Janeiro - RJ (9).webp",
        imageAlt: "",
      },
    ],
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
    numberCards: [
      {
        title: tresDimensoesTrad("numberCards.0.title"),
        icon: FaLeaf,
        paragraph: tresDimensoesTrad("numberCards.0.paragraph"),
      },
      {
        title: tresDimensoesTrad("numberCards.1.title"),
        icon: FaUsers,
        paragraph: tresDimensoesTrad("numberCards.1.paragraph"),
      },
      {
        title: tresDimensoesTrad("numberCards.2.title"),
        icon: FaBalanceScale,
        paragraph: tresDimensoesTrad("numberCards.2.paragraph"),
      },
    ],
    type: "border",
  };

  const sustentabilidadeAmbientalData: ImageWithCardTextBannerInterface = {
    imageAlt: sustentabilidadeAmbientalTrad("imageAlt"),
    title: sustentabilidadeAmbientalTrad("title"),
    imageUrl: "/img/temp/esg/ambiental.png",
    objectContain: true,
    paragraphs: [sustentabilidadeAmbientalTrad("paragraph")],
    paragraphsWithTopics: [
      {
        subTitle: sustentabilidadeAmbientalTrad("paragraphsWithTopics.0.subTitle"),
        topics: [
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.0.topics.0"),
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.0.topics.1"),
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.0.topics.2"),
        ],
      },
      {
        subTitle: sustentabilidadeAmbientalTrad("paragraphsWithTopics.1.subTitle"),
        topics: [
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.1.topics.0"),
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.1.topics.1"),
          sustentabilidadeAmbientalTrad("paragraphsWithTopics.1.topics.2"),
        ],
      },
    ],
    imageAlignment: "end",
  };

  const responsabilidadeSocialData: ImageWithCardTextBannerInterface = {
    imageUrl: "/img/temp/esg/social.png",
    imageAlt: responsabilidadeSocialTrad("imageAlt"),
    title: responsabilidadeSocialTrad("title"),
    objectContain: true,
    paragraphsWithTopics: [
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.0.subTitle"),
        topics: [
          responsabilidadeSocialTrad("paragraphsWithTopics.0.topics.0"),
          responsabilidadeSocialTrad("paragraphsWithTopics.0.topics.1"),
        ],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.1.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.1.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.2.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.2.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.3.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.3.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.4.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.4.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.5.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.5.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.6.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.6.paragraphs.0")],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.7.subTitle"),
        topics: [
          responsabilidadeSocialTrad("paragraphsWithTopics.7.topics.0"),
          responsabilidadeSocialTrad("paragraphsWithTopics.7.topics.1"),
        ],
      },
      {
        subTitle: responsabilidadeSocialTrad("paragraphsWithTopics.8.subTitle"),
        paragraphs: [responsabilidadeSocialTrad("paragraphsWithTopics.8.paragraphs.0")],
      },
    ],
    imageAlignment: "end",
  };

  const governancaConscienteData: ImageWithCardTextBannerInterface = {
    imageUrl: "/img/temp/esg/governanca.png",
    imageAlt: governancaConscienteTrad("imageAlt"),
    title: governancaConscienteTrad("title"),
    objectContain: true,
    paragraphsWithTopics: [
      {
        subTitle: governancaConscienteTrad("paragraphsWithTopics.0.subTitle"),
        paragraphs: [governancaConscienteTrad("paragraphsWithTopics.0.paragraphs.0")],
      },
      {
        subTitle: governancaConscienteTrad("paragraphsWithTopics.1.subTitle"),
        topics: [
          governancaConscienteTrad("paragraphsWithTopics.1.topics.0"),
          governancaConscienteTrad("paragraphsWithTopics.1.topics.1"),
        ],
      },
      {
        subTitle: governancaConscienteTrad("paragraphsWithTopics.2.subTitle"),
        paragraphs: [governancaConscienteTrad("paragraphsWithTopics.2.paragraphs.0")],
      },
    ],
    imageAlignment: "end",
  };

  const movimentoRegenerativoData: NumberCardsBannerInterface = {
    ods: [11, 13, 15],
    title: movimentoRegenerativoTrad("title"),
    paragraphs: [movimentoRegenerativoTrad("paragraphs.0")],
    pdfLink1: "https://www.instagram.com/tempodeplantar2024/p/DDIZpg-PX44/?img_index=1",
    pdfText1: "Instagram do Movimento Regenerativo Tempo de Plantar",
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

  const codigoCondutaData: ImageWithCardTextBannerInterface = {
    topTitle: codigoCondutaTrad("topTitle"),
    title: codigoCondutaTrad("title"),
    pdfText1: codigoCondutaTrad("linkText"),
    pdfLink1: "https://www.t2mlab.com/compliance/",
    imageUrl: "/img/temp/C-digo-de-conduta.png",
    imageAlt: codigoCondutaTrad("imageAlt"),
    imageAlignment: "start",
  };

  return (
    <div className="flex flex-col mb-20 gap-[2.75rem] lg:gap-[4.75rem]  ">
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
      <CarouselSection {...voluntariadoApoioImagensData} />
      <NumberCardsBanner {...nossasCampanhasData} />
      <ImageWithCardTextBanner {...codigoCondutaData} />
      <AcordionCalendar />
    </div>
  );
};

export default HomePage;
