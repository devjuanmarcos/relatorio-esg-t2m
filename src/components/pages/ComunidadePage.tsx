"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import { useTranslations } from "next-intl";

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

  const callBannerTrad = useTranslations("ComunidadePage.callBannerTrad");
  const oportunidadesInclusivasTrad = useTranslations("ComunidadePage.oportunidadesInclusivasTrad");
  const nossosParceirosTrad = useTranslations("ComunidadePage.nossosParceirosTrad");
  const listagemParceirosTrad = useTranslations("ComunidadePage.listagemParceirosTrad");

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
    buttonText: callBannerTrad("buttonText"),
    buttonTarget: "_blank",
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
  };

  const oportunidadesInclusivasData: ImageWithCardTextBannerInterface = {
    topTitle: oportunidadesInclusivasTrad("topTitle"),
    title: oportunidadesInclusivasTrad("title"),
    paragraph: oportunidadesInclusivasTrad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [oportunidadesInclusivasTrad("topics.0"), oportunidadesInclusivasTrad("topics.1")],
      },
    ],
    imageAlt: oportunidadesInclusivasTrad("imageAlt"),
    imageUrl: "/img/final/trabalheConosco.jpg",
    imageAlignment: "start",
    buttonText: oportunidadesInclusivasTrad("buttonText"),
    buttonLink: "https://serratec.org/residencia/",
    buttonTarget: "_blank",
  };

  const nossosParceirosData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: nossosParceirosTrad("topTitle"),
    imageUrl: "/img/final/nossosParceiros.jpg",
    title: nossosParceirosTrad("title"),
    paragraph: nossosParceirosTrad("paragraph"),
  };

  const listagemParceirosData: IconsCardsBannerInterface = {
    images: [
      {
        id: 1,
        title: listagemParceirosTrad("images.0.title"),
        paragraph: listagemParceirosTrad("images.0.paragraph"),
        imageAlt: listagemParceirosTrad("images.0.imageAlt"),
        imageUrl: "/img/temp/parceiros/ScaledAgile.png",
      },
      {
        id: 2,
        title: listagemParceirosTrad("images.1.title"),
        paragraph: listagemParceirosTrad("images.1.paragraph"),
        imageAlt: listagemParceirosTrad("images.1.imageAlt"),
        imageUrl: "/img/temp/parceiros/Serratec.png",
      },
      {
        id: 3,
        title: listagemParceirosTrad("images.2.title"),
        paragraph: listagemParceirosTrad("images.2.paragraph"),
        imageAlt: listagemParceirosTrad("images.2.imageAlt"),
        imageUrl: "/img/temp/parceiros/IBM.png",
      },
      {
        id: 4,
        title: listagemParceirosTrad("images.3.title"),
        paragraph: listagemParceirosTrad("images.3.paragraph"),
        imageAlt: listagemParceirosTrad("images.3.imageAlt"),
        imageUrl: "/img/temp/parceiros/Microsoft.png",
      },
      {
        id: 5,
        title: listagemParceirosTrad("images.4.title"),
        paragraph: listagemParceirosTrad("images.4.paragraph"),
        imageAlt: listagemParceirosTrad("images.4.imageAlt"),
        imageUrl: "/img/temp/parceiros/Delphi.png",
      },
      {
        id: 6,
        title: listagemParceirosTrad("images.5.title"),
        paragraph: listagemParceirosTrad("images.5.paragraph"),
        imageAlt: listagemParceirosTrad("images.5.imageAlt"),
        imageUrl: "/img/temp/parceiros/BIOMOB.png",
      },
      {
        id: 7,
        title: listagemParceirosTrad("images.6.title"),
        paragraph: listagemParceirosTrad("images.6.paragraph"),
        imageAlt: listagemParceirosTrad("images.6.imageAlt"),
        imageUrl: "/img/temp/parceiros/AutomationAnywhere.png",
      },
      {
        id: 8,
        title: listagemParceirosTrad("images.7.title"),
        paragraph: listagemParceirosTrad("images.7.paragraph"),
        imageAlt: listagemParceirosTrad("images.7.imageAlt"),
        imageUrl: "/img/temp/parceiros/VMEdu.png",
      },
      {
        id: 9,
        title: listagemParceirosTrad("images.8.title"),
        paragraph: listagemParceirosTrad("images.8.paragraph"),
        imageAlt: listagemParceirosTrad("images.8.imageAlt"),
        imageUrl: "/img/temp/parceiros/Future.png",
      },
      {
        id: 10,
        title: listagemParceirosTrad("images.9.title"),
        paragraph: listagemParceirosTrad("images.9.paragraph"),
        imageAlt: listagemParceirosTrad("images.9.imageAlt"),
        imageUrl: "/img/temp/parceiros/PEGA.png",
      },
    ],
    type: "center",
  };

  return (
    <div className="flex flex-col mb-20 gap-[2.75rem] lg:gap-[4.75rem] ">
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
