"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { ImageWithTopicsBannerInterface } from "@banners/ImageWithTopicsBanner";
import { FaAccessibleIcon } from "react-icons/fa6";
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
} from "react-icons/fa";
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
    alignment: "start",
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
      <NumberCardsBanner {...movimentoRegenerativoData} />
      <NumberCardsBanner {...nossasCampanhasData} />
    </div>
  );
};

export default HomePage;
