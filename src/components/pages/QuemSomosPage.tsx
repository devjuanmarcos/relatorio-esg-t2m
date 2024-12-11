"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { FaAccessibleIcon } from "react-icons/fa6";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import {
  FaCogs,
  FaEye,
  FaLaptop,
  FaRegCreditCard,
  FaShieldAlt,
  FaTachometerAlt,
  FaTools,
  FaUniversalAccess,
  FaUserCheck,
} from "react-icons/fa";
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

const QuemSomosPage: React.FC = () => {
  const isMounted = useIsMounted();

  const callBannerTrad = useTranslations("QuemSomosPage.callBannerTrad");
  const trabalheConoscoTrad = useTranslations("QuemSomosPage.trabalheConoscoTrad");
  const experienciasExtraordinariasTrad = useTranslations("QuemSomosPage.experienciasExtraordinariasTrad");
  const servicosExcelenciaTrad = useTranslations("QuemSomosPage.servicosExcelenciaTrad");
  const iniciativasTrad = useTranslations("QuemSomosPage.iniciativasTrad");
  const qualidadeDeVidaTrad = useTranslations("QuemSomosPage.qualidadeDeVidaTrad");
  const desenvolvimentoProfissionalTrad = useTranslations("QuemSomosPage.desenvolvimentoProfissionalTrad");
  const acessibilidadeInclusaoTrad = useTranslations("QuemSomosPage.acessibilidadeInclusaoTrad");
  const tresPilaresTrad = useTranslations("QuemSomosPage.tresPilaresTrad");
  const quatroCardsMetodologiaTrad = useTranslations("QuemSomosPage.quatroCardsMetodologiaTrad");
  const importanciaTerceirizarTestesTrad = useTranslations("QuemSomosPage.importanciaTerceirizarTestesTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: SimpleCallBannerInterface = {
    imageUrl: "/img/temp/quemsomos.png",
    buttonLink: "https://www.t2mlab.com",
    buttonText: callBannerTrad("buttonText"),
    buttonTarget: "_blank",
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
    alignment: "bottom",
  };

  const trabalheConoscoData: ImageWithCardTextBannerInterface = {
    imageAlt: trabalheConoscoTrad("imageAlt"),
    imageUrl: "/img/final/trabalheConosco.jpg",
    title: trabalheConoscoTrad("title"),
    topTitle: trabalheConoscoTrad("topTitle"),
    paragraph: trabalheConoscoTrad("paragraph"),
    buttonText: trabalheConoscoTrad("buttonText"),
    buttonLink: "/contato",
    imageAlignment: "start",
  };

  const experienciasExtraordinariasData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/experienciasExtraordinarias.png",
    title: experienciasExtraordinariasTrad("title"),
    paragraph: experienciasExtraordinariasTrad("paragraph"),
  };

  const servicosExcelenciaData: IconsCardsBannerInterface = {
    title: servicosExcelenciaTrad("title"),
    paragraph: servicosExcelenciaTrad("paragraph"),
    icons: [
      {
        id: 1,
        title: servicosExcelenciaTrad("icons.0.title"),
        paragraph: servicosExcelenciaTrad("icons.0.paragraph"),
        icon: FaCogs,
      },
      {
        id: 2,
        title: servicosExcelenciaTrad("icons.1.title"),
        paragraph: servicosExcelenciaTrad("icons.1.paragraph"),
        icon: FaShieldAlt,
      },
      {
        id: 3,
        title: servicosExcelenciaTrad("icons.2.title"),
        paragraph: servicosExcelenciaTrad("icons.2.paragraph"),
        icon: FaUniversalAccess,
      },
      {
        id: 4,
        title: servicosExcelenciaTrad("icons.3.title"),
        paragraph: servicosExcelenciaTrad("icons.3.paragraph"),
        icon: FaTachometerAlt,
      },
    ],
    type: "start",
  };

  const iniciativasData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: iniciativasTrad("topTitle"),
    title: iniciativasTrad("title"),
    paragraph: iniciativasTrad("paragraph"),
    imageUrl: "/img/temp/iniciativas.png",
  };

  const qualidadeDeVidaData: ImageWithCardTextBannerInterface = {
    title: qualidadeDeVidaTrad("title"),
    paragraph: qualidadeDeVidaTrad("paragraph"),
    imageAlt: qualidadeDeVidaTrad("imageAlt"),
    imageUrl: "/img/temp/mulherCasacoVermelho.png",
    imageAlignment: "end",
  };

  const desenvolvimentoProfissionalData: ImageWithCardTextBannerInterface = {
    title: desenvolvimentoProfissionalTrad("title"),
    paragraph: desenvolvimentoProfissionalTrad("paragraph"),
    imageAlt: desenvolvimentoProfissionalTrad("imageAlt"),
    imageUrl: "/img/final/desenvolvimentoProfissional.jpg",
    imageAlignment: "start",
  };

  const acessibilidadeInclusao: ImageWithCardTextBannerInterface = {
    title: acessibilidadeInclusaoTrad("title"),
    paragraph: acessibilidadeInclusaoTrad("paragraph"),
    imageAlt: acessibilidadeInclusaoTrad("imageAlt"),
    imageUrl: "/img/final/acessibilidadeInclusao.jpeg",
    imageAlignment: "end",
  };

  const tresPilaresData: SimpleCallBannerInterface = {
    topTitle: tresPilaresTrad("topTitle"),
    title: tresPilaresTrad("title"),
    paragraph: tresPilaresTrad("paragraph"),
    imageUrl: "/img/temp/3pilares.png",
    alignment: "start",
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
      {
        topTitle: quatroCardsMetodologiaTrad("textCards.2.topTitle"),
        title: quatroCardsMetodologiaTrad("textCards.2.title"),
        paragraph: quatroCardsMetodologiaTrad("textCards.2.paragraph"),
      },
    ],
  };

  const importanciaTerceirizarTestesData: NumberCardsBannerInterface = {
    ods: [8, 9, 17],
    title: importanciaTerceirizarTestesTrad("title"),
    paragraph: importanciaTerceirizarTestesTrad("paragraph"),
    numberCards: [
      {
        title: importanciaTerceirizarTestesTrad("numberCards.0.title"),
        icon: FaUserCheck,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.0.paragraph"),
      },
      {
        title: importanciaTerceirizarTestesTrad("numberCards.1.title"),
        icon: FaLaptop,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.1.paragraph"),
      },
      {
        title: importanciaTerceirizarTestesTrad("numberCards.2.title"),
        icon: FaRegCreditCard,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.2.paragraph"),
      },
      {
        title: importanciaTerceirizarTestesTrad("numberCards.3.title"),
        icon: FaCogs,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.3.paragraph"),
      },
      {
        title: importanciaTerceirizarTestesTrad("numberCards.4.title"),
        icon: FaEye,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.4.paragraph"),
      },
      {
        title: importanciaTerceirizarTestesTrad("numberCards.5.title"),
        icon: FaTools,
        paragraph: importanciaTerceirizarTestesTrad("numberCards.5.paragraph"),
      },
    ],
    type: "border",
  };

  return (
    <div className="flex flex-col mb-20 gap-[2.75rem] lg:gap-[4.75rem] ">
      <React.Suspense>
        <SimpleCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...trabalheConoscoData} />
      <DividingLine />
      <SimpleCallBanner {...experienciasExtraordinariasData} />
      <IconsCardsBanner {...servicosExcelenciaData} />
      <SimpleCallBanner {...iniciativasData} />
      <ImageWithCardTextBanner {...qualidadeDeVidaData} />
      <ImageWithCardTextBanner {...desenvolvimentoProfissionalData} />
      <ImageWithCardTextBanner {...acessibilidadeInclusao} />
      <SimpleCallBanner {...tresPilaresData} />
      <ThreeTextCardsWithNumberCardBanner {...quatroCardsMetodologiaData} />
      <DividingLine />
      <NumberCardsBanner {...importanciaTerceirizarTestesData} />
    </div>
  );
};

export default QuemSomosPage;
