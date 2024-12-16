"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { Simple2TitleImageBannerInterface } from "@/components/banners/Simple2TitleImageBanner";
import { SimpleTextBannerInterface } from "@/components/banners/SimpleTextBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import { FaCogs, FaShieldAlt, FaTachometerAlt, FaUniversalAccess } from "react-icons/fa";
import { useTranslations } from "next-intl";
import GraficoColaboradores from "../ui/GraficoColaboradores";
import GraficoGenero from "../ui/GraficoGenero";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const IconsCardsBanner = dynamic(() =>
  import("@/components/banners/IconsCardsBanner").then((mod) => mod.IconsCardsBanner)
);

const Simple2TitleImageBanner = dynamic(() =>
  import("@/components/banners/Simple2TitleImageBanner").then((mod) => mod.Simple2TitleImageBanner)
);

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const SimpleTextBanner = dynamic(() =>
  import("@/components/banners/SimpleTextBanner").then((mod) => mod.SimpleTextBanner)
);

const NossaEquipePage: React.FC = () => {
  const isMounted = useIsMounted();

  const callBannerTrad = useTranslations("NossaEquipePage.callBannerTrad");
  const divisaoPorCategoriaTrad = useTranslations("NossaEquipePage.divisaoPorCategoriaTrad");
  const compromissoComDiversidadeTrad = useTranslations("NossaEquipePage.compromissoComDiversidadeTrad");
  const ambienteExtremoValorTrad = useTranslations("NossaEquipePage.ambienteExtremoValorTrad");
  const graficosDistribuicaoTrad = useTranslations("NossaEquipePage.graficosDistribuicaoTrad");
  const propostaDeValorTrad = useTranslations("NossaEquipePage.propostaDeValorTrad");
  const culturaRespeitoTrad = useTranslations("NossaEquipePage.culturaRespeitoTrad");
  const beneficiosValorizamTrad = useTranslations("NossaEquipePage.beneficiosValorizamTrad");
  const direitosHumanosTrad = useTranslations("NossaEquipePage.direitosHumanosTrad");
  const compromissoDireitosHumanosTrad = useTranslations("NossaEquipePage.compromissoDireitosHumanosTrad");
  const garantiaAmbienteTrad = useTranslations("NossaEquipePage.garantiaAmbienteTrad");
  const diversidadeInclusaoTrad = useTranslations("NossaEquipePage.diversidadeInclusaoTrad");
  const diversidadeGeneroTrad = useTranslations("NossaEquipePage.diversidadeGeneroTrad");
  const diversidadeSexualTrad = useTranslations("NossaEquipePage.diversidadeSexualTrad");
  const diversidadeCulturalTrad = useTranslations("NossaEquipePage.diversidadeCulturalTrad");
  const diversidadeRacialTrad = useTranslations("NossaEquipePage.diversidadeRacialTrad");
  const diversidadeDeficienciaTrad = useTranslations("NossaEquipePage.diversidadeDeficienciaTrad");
  const saudeBemEstarTrad = useTranslations("NossaEquipePage.saudeBemEstarTrad");
  const saudeBemEstarTextoTrad = useTranslations("NossaEquipePage.saudeBemEstarTextoTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/final/nossEquipe.jpg",
    buttonLink: "https://www.t2mlab.com/trabalhe-conosco-2/",
    buttonText: callBannerTrad("buttonText"),
    buttonTarget: "_blank",
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
  };

  const divisaoPorCategoriaData: IconsCardsBannerInterface = {
    title: divisaoPorCategoriaTrad("title"),
    paragraph: divisaoPorCategoriaTrad("paragraph"),
    icons: [
      {
        id: 1,
        title: divisaoPorCategoriaTrad("icons.0.title"),
        paragraph: divisaoPorCategoriaTrad("icons.0.paragraph"),
        icon: FaCogs,
      },
      {
        id: 2,
        title: divisaoPorCategoriaTrad("icons.1.title"),
        paragraph: divisaoPorCategoriaTrad("icons.1.paragraph"),
        icon: FaShieldAlt,
      },
      {
        id: 3,
        title: divisaoPorCategoriaTrad("icons.2.title"),
        paragraph: divisaoPorCategoriaTrad("icons.2.paragraph"),
        icon: FaUniversalAccess,
      },
      {
        id: 4,
        title: divisaoPorCategoriaTrad("icons.3.title"),
        paragraph: divisaoPorCategoriaTrad("icons.3.paragraph"),
        icon: FaTachometerAlt,
      },
    ],
    type: "start",
  };

  const compromissoComDiversidadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/final/materialidade.jpg",
    title: compromissoComDiversidadeTrad("title"),
    paragraph: compromissoComDiversidadeTrad("paragraph"),
  };

  const ambienteExtremoValorData: IconsCardsBannerInterface = {
    title: ambienteExtremoValorTrad("title"),
    paragraph: ambienteExtremoValorTrad("paragraph"),
    images: [
      {
        id: 1,
        title: ambienteExtremoValorTrad("images.0.title"),
        paragraph: ambienteExtremoValorTrad("images.0.paragraph"),
        imageUrl: "/img/temp/genero.png",
        imageAlt: ambienteExtremoValorTrad("images.0.imageAlt"),
      },
      {
        id: 2,
        title: ambienteExtremoValorTrad("images.1.title"),
        paragraph: ambienteExtremoValorTrad("images.1.paragraph"),
        imageUrl: "/img/temp/raca.png",
        imageAlt: ambienteExtremoValorTrad("images.1.imageAlt"),
      },
      {
        id: 3,
        title: ambienteExtremoValorTrad("images.2.title"),
        paragraph: ambienteExtremoValorTrad("images.2.paragraph"),
        imageUrl: "/img/temp/idade.png",
        imageAlt: ambienteExtremoValorTrad("images.2.imageAlt"),
      },
      {
        id: 5,
        title: ambienteExtremoValorTrad("images.3.title"),
        paragraph: ambienteExtremoValorTrad("images.3.paragraph"),
        imageUrl: "/img/temp/diversidade.png",
        imageAlt: ambienteExtremoValorTrad("images.3.imageAlt"),
      },
      {
        id: 6,
        title: ambienteExtremoValorTrad("images.4.title"),
        paragraph: ambienteExtremoValorTrad("images.4.paragraph"),
        imageUrl: "/img/temp/acessibilidade.png",
        imageAlt: ambienteExtremoValorTrad("images.4.imageAlt"),
      },
    ],
    type: "center",
  };

  const graficosDistribuicaoData: Simple2TitleImageBannerInterface = {
    firstImage: {
      title: graficosDistribuicaoTrad("firstImage.title"),
      imageUrl: "/img/temp/grafico1.png",
      imageAlt: graficosDistribuicaoTrad("firstImage.imageAlt"),
    },
    secondImage: {
      title: graficosDistribuicaoTrad("secondImage.title"),
      imageUrl: "/img/temp/grafico2.png",
      imageAlt: graficosDistribuicaoTrad("secondImage.imageAlt"),
    },
  };

  const propostaDeValorData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/propostaValor2.png",
    title: propostaDeValorTrad("title"),
    paragraph: propostaDeValorTrad("paragraph"),
  };

  const culturaRespeitoData: ImageWithCardTextBannerInterface = {
    title: culturaRespeitoTrad("title"),
    paragraph: culturaRespeitoTrad("paragraph"),
    imageAlt: culturaRespeitoTrad("imageAlt"),
    imageUrl: "/img/temp/etiveInclusao.jpg",
    imageAlignment: "end",
  };

  const beneficiosValorizamData: ImageWithCardTextBannerInterface = {
    title: beneficiosValorizamTrad("title"),
    paragraph: beneficiosValorizamTrad("paragraph"),
    imageAlt: beneficiosValorizamTrad("imageAlt"),
    imageUrl: "/img/final/acessibilidadeInclusao.jpeg",
    imageAlignment: "start",
  };

  const direitosHumanosData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/direitosHumanos.png",
    topTitle: direitosHumanosTrad("topTitle"),
    title: direitosHumanosTrad("title"),
    paragraph: direitosHumanosTrad("paragraph"),
  };

  const compromissoDireitosHumanosData: SimpleTextBannerInterface = {
    title: compromissoDireitosHumanosTrad("title"),
    paragraph: compromissoDireitosHumanosTrad("paragraph"),
  };

  const garantiaAmbienteData: SimpleTextBannerInterface = {
    title: garantiaAmbienteTrad("title"),
    paragraph: garantiaAmbienteTrad("paragraph"),
  };

  const diversidadeInclusao: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/diversidadeInclusao.png",
    topTitle: diversidadeInclusaoTrad("topTitle"),
    title: diversidadeInclusaoTrad("title"),
    paragraph: diversidadeInclusaoTrad("paragraph"),
  };

  const diversidadeGeneroData: SimpleTextBannerInterface = {
    title: diversidadeGeneroTrad("title"),
    paragraph: diversidadeGeneroTrad("paragraph"),
  };

  const diversidadeSexualData: SimpleTextBannerInterface = {
    title: diversidadeSexualTrad("title"),
    paragraph: diversidadeSexualTrad("paragraph"),
  };

  const diversidadeCulturalData: SimpleTextBannerInterface = {
    title: diversidadeCulturalTrad("title"),
    paragraph: diversidadeCulturalTrad("paragraph"),
  };

  const diversidadeRacialData: SimpleTextBannerInterface = {
    title: diversidadeRacialTrad("title"),
    paragraph: diversidadeRacialTrad("paragraph"),
  };

  const diversidadeDeficienciaData: SimpleTextBannerInterface = {
    title: diversidadeDeficienciaTrad("title"),
    paragraph: diversidadeDeficienciaTrad("paragraph"),
  };

  const saudeBemEstarData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/saudebemestar.png",
    topTitle: saudeBemEstarTrad("topTitle"),
    title: saudeBemEstarTrad("title"),
    paragraph: saudeBemEstarTrad("paragraph"),
  };

  const saudeBemEstarTextoData: SimpleTextBannerInterface = {
    title: saudeBemEstarTextoTrad("title"),
    paragraph: saudeBemEstarTextoTrad("paragraph"),
  };

  return (
    <div className="flex flex-col mb-20 gap-[2.75rem] lg:gap-[4.75rem] ">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <IconsCardsBanner {...divisaoPorCategoriaData} />
      <SimpleCallBanner {...compromissoComDiversidadeData} />
      <IconsCardsBanner {...ambienteExtremoValorData} />
      <div className="grid md:grid-cols-2">
        <GraficoColaboradores />
        <GraficoGenero />
      </div>
      {/* <Simple2TitleImageBanner {...graficosDistribuicaoData} /> */}
      <SimpleCallBanner {...propostaDeValorData} />
      <ImageWithCardTextBanner {...culturaRespeitoData} />
      <ImageWithCardTextBanner {...beneficiosValorizamData} />
      <SimpleCallBanner {...direitosHumanosData} />
      <SimpleTextBanner {...compromissoDireitosHumanosData} />
      <SimpleTextBanner {...garantiaAmbienteData} />
      <SimpleCallBanner {...diversidadeInclusao} />
      <SimpleTextBanner {...diversidadeGeneroData} />
      <SimpleTextBanner {...diversidadeSexualData} />
      <SimpleTextBanner {...diversidadeCulturalData} />
      <SimpleTextBanner {...diversidadeRacialData} />
      <SimpleTextBanner {...diversidadeDeficienciaData} />
      <SimpleCallBanner {...saudeBemEstarData} />
      <SimpleTextBanner {...saudeBemEstarTextoData} />
    </div>
  );
};

export default NossaEquipePage;
