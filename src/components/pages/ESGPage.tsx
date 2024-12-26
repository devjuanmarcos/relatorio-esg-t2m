"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { Loading } from "../ui/Loading";
import { Skeleton } from "../ui/skeleton";
import { DividingLine } from "../ui/dividingLine";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useTranslations } from "next-intl";
import { CarouselSectionType } from "@/@types/types";
import GraficosResidencia from "../ui/GraficosResidencia";
import { TbChristmasBall, TbChristmasTree } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import GraficosUff from "../ui/GraficosUff";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <Loading size={100} speed={1.32} />
    </div>
  ),
});

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const CarouselSection = dynamic(() =>
  import("@/components/banners/CarouselSection").then((mod) => mod.CarouselSection)
);

const ESGPage: React.FC = () => {
  const isMounted = useIsMounted();

  // TRADUÇÕES BANNERS AMBIENTAIS:
  const callBannerTrad = useTranslations("ESGPage.Ambiental.callBannerTrad");
  const oportunidadesInclusivasTrad = useTranslations("ESGPage.Ambiental.oportunidadesInclusivasTrad");
  const gestaoResiduosTrad = useTranslations("ESGPage.Ambiental.gestaoResiduosTrad");
  const gestaoResiduosTexto1Trad = useTranslations("ESGPage.Ambiental.gestaoResiduosTexto1Trad");
  const contratosAssinadosTrad = useTranslations("ESGPage.Ambiental.contratosAssinadosTrad");
  const contratosAssinadosTexto1Trad = useTranslations("ESGPage.Ambiental.contratosAssinadosTexto1Trad");
  const utilizacaoNuvemTrad = useTranslations("ESGPage.Ambiental.utilizacaoNuvemTrad");
  const utilizacaoNuvemTexto2Trad = useTranslations("ESGPage.Ambiental.utilizacaoNuvemTexto2Trad");
  const utilizacaoNuvemTexto1Trad = useTranslations("ESGPage.Ambiental.utilizacaoNuvemTexto1Trad");
  const consumoConscienteTrad = useTranslations("ESGPage.Ambiental.consumoConscienteTrad");
  const consumoConscienteTexto1Trad = useTranslations("ESGPage.Ambiental.consumoConscienteTexto1Trad");
  const estimuloReducaoTrad = useTranslations("ESGPage.Ambiental.estimuloReducaoTrad");
  const estimuloReducaoTexto1Trad = useTranslations("ESGPage.Ambiental.estimuloReducaoTexto1Trad");
  const cadeiaFornecedoresTrad = useTranslations("ESGPage.Ambiental.cadeiaFornecedoresTrad");
  const cadeiaFornecedoresTexto1Trad = useTranslations("ESGPage.Ambiental.cadeiaFornecedoresTexto1Trad");
  const reciclagemMaterialTrad = useTranslations("ESGPage.Ambiental.reciclagemMaterialTrad");
  const reciclagemMaterialTexto1Trad = useTranslations("ESGPage.Ambiental.reciclagemMaterialTexto1Trad");
  const feitosAmbientalTrad = useTranslations("ESGPage.Ambiental.feitosAmbientalTrad");

  // TRADUÇÕES BANNERS SOCIAIS:
  const patrocinadorIniciativasTrad = useTranslations("ESGPage.Social.patrocinadorIniciativasTrad");
  const patrocinadorIniciativasTexto1Trad = useTranslations("ESGPage.Social.patrocinadorIniciativasTexto1Trad");
  const campanhasSolidariasTrad = useTranslations("ESGPage.Social.campanhasSolidariasTrad");
  const campanhasSolidariasTexto1Trad = useTranslations("ESGPage.Social.campanhasSolidariasTexto1Trad");
  const voluntariadoApoioTrad = useTranslations("ESGPage.Social.voluntariadoApoioTrad");
  const voluntariadoApoioTexto1Trad = useTranslations("ESGPage.Social.voluntariadoApoioTexto1Trad");
  const feitosSocialTrad = useTranslations("ESGPage.Social.feitosSocialTrad");
  const campanha1Trad = useTranslations("ESGPage.Social.campanha1Trad");
  const campanha2Trad = useTranslations("ESGPage.Social.campanha2Trad");
  const campanha3Trad = useTranslations("ESGPage.Social.campanha3Trad");
  const campanha4Trad = useTranslations("ESGPage.Social.campanha4Trad");
  const campanhaNatalTrad = useTranslations("ESGPage.Social.campanhaNatalTrad");

  // TRADUÇÕES BANNERS GOVERNAMENTAIS
  const normasCodigosLegislacoesTrad = useTranslations("ESGPage.Governamental.normasCodigosLegislacoesTrad");
  const normasCodigosLegislacoesTexto1Trad = useTranslations(
    "ESGPage.Governamental.normasCodigosLegislacoesTexto1Trad"
  );
  const programaQualidadeVidaTrad = useTranslations("ESGPage.Governamental.programaQualidadeVidaTrad");
  const programaQualidadeVidaTexto1Trad = useTranslations("ESGPage.Governamental.programaQualidadeVidaTexto1Trad");
  const equipeGenteGestaoTrad = useTranslations("ESGPage.Governamental.equipeGenteGestaoTrad");
  const equipeGenteGestaoTexto1Trad = useTranslations("ESGPage.Governamental.equipeGenteGestaoTexto1Trad");
  const comiteT2MTrad = useTranslations("ESGPage.Governamental.comiteT2MTrad");
  const comiteT2MTexto1Trad = useTranslations("ESGPage.Governamental.comiteT2MTexto1Trad");
  const comiteT2MTexto2Trad = useTranslations("ESGPage.Governamental.comiteT2MTexto2Trad");
  const certificacoesPadroesInternacionaisTrad = useTranslations(
    "ESGPage.Governamental.certificacoesPadroesInternacionaisTrad"
  );
  const certificacoesPadroesInternacionaisTexto1Trad = useTranslations(
    "ESGPage.Governamental.certificacoesPadroesInternacionaisTexto1Trad"
  );
  const organogramaTexto1Trad = useTranslations("ESGPage.Governamental.organogramaTexto1Trad");
  const certificacoesPadroesInternacionaisTexto2Trad = useTranslations(
    "ESGPage.Governamental.certificacoesPadroesInternacionaisTexto2Trad"
  );
  const canaisDenunciaTrad = useTranslations("ESGPage.Governamental.canaisDenunciaTrad");
  const canaisDenunciaTexto1Trad = useTranslations("ESGPage.Governamental.canaisDenunciaTexto1Trad");
  const equidadeSalarialTrad = useTranslations("ESGPage.Governamental.equidadeSalarialTrad");
  const equidadeSalarialTexto1Trad = useTranslations("ESGPage.Governamental.equidadeSalarialTexto1Trad");
  const feitosGovernamentalTrad = useTranslations("ESGPage.Governamental.feitosGovernamentalTrad");

  const metasTrad = useTranslations("ESGPage.Governamental.metasTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  // AMBIENTAL
  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/esg/compromisso.jpg",
    buttonLink: "https://www.t2mlab.com/nosso-blog/",
    buttonTarget: "_blank",
    buttonText: callBannerTrad("buttonText"),
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
    alignment: "start",
  };

  const oportunidadesInclusivasData: ImageWithCardTextBannerInterface = {
    topTitle: oportunidadesInclusivasTrad("topTitle"),
    title: oportunidadesInclusivasTrad("title"),
    paragraph: oportunidadesInclusivasTrad("paragraph"),
    imageAlt: oportunidadesInclusivasTrad("imageAlt"),
    imageUrl: "/img/temp/odsonu.png",
    imageAlignment: "start",
    buttonText: oportunidadesInclusivasTrad("buttonText"),
    buttonLink: "https://www.t2mlab.com/contato/",
    buttonTarget: "_blank",
    objectContain: true,
  };

  const gestaoResiduosData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/final/esg/reciclagem.jpg",
    topTitle: gestaoResiduosTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    title: gestaoResiduosTrad("title"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: gestaoResiduosTrad("iconAlt"),
    },
    ods: ["/img/ods/12.png", "/img/ods/13.png", "/img/ods/15.png"],
  };

  const gestaoResiduosTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: gestaoResiduosTexto1Trad("paragraph"),
    imageAlt: gestaoResiduosTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/impactosAmbientais.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const contratosAssinadosData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/final/esg/contratosAssinados2.jpg",
    topTitle: contratosAssinadosTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: contratosAssinadosTrad("iconAlt"),
    },
    title: contratosAssinadosTrad("title"),
    ods: ["/img/ods/12.png", "/img/ods/13.png", "/img/ods/15.png"],
  };

  const contratosAssinadosTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: contratosAssinadosTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [contratosAssinadosTexto1Trad("topics.0"), contratosAssinadosTexto1Trad("topics.1")],
      },
    ],
    imageAlt: contratosAssinadosTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/digitalizacaoDocumentos.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const utilizacaoNuvemData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/nuvem.png",
    topTitle: utilizacaoNuvemTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    title: utilizacaoNuvemTrad("title"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: utilizacaoNuvemTrad("iconAlt"),
    },
    ods: ["/img/ods/7.png", "/img/ods/9.png", "/img/ods/12.png", "/img/ods/13.png"],
  };

  const utilizacaoNuvemTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [utilizacaoNuvemTexto1Trad("paragraphs.0")],
    paragraphsWithTopics: [
      {
        topics: [utilizacaoNuvemTexto1Trad("topics.0"), utilizacaoNuvemTexto1Trad("topics.1")],
      },
    ],
    imageAlt: utilizacaoNuvemTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/computacaoNuvem.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const utilizacaoNuvemTexto2Data: ImageWithCardTextBannerInterface = {
    title: utilizacaoNuvemTexto2Trad("title"),
    paragraphsWithTopics: [
      {
        topics: [utilizacaoNuvemTexto2Trad("topics.0"), utilizacaoNuvemTexto2Trad("topics.1")],
      },
    ],
    paragraph: utilizacaoNuvemTexto2Trad("paragraph"),
    imageAlt: utilizacaoNuvemTexto2Trad("imageAlt"),
    imageUrl: "/img/temp/esg/emissaoCarbono.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const consumoConscienteData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/esg/consumoAgua.png",
    topTitle: consumoConscienteTrad("topTitle"),
    title: consumoConscienteTrad("title"),
    lineColor: consumoConscienteTrad("lineColor"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: consumoConscienteTrad("iconAlt"),
    },
    ods: ["/img/ods/6.png", "/img/ods/12.png"],
  };

  const consumoConscienteTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: consumoConscienteTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [consumoConscienteTexto1Trad("topics.0"), consumoConscienteTexto1Trad("topics.1")],
      },
    ],
    imageAlt: consumoConscienteTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/consumoConsciente.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const estimuloReducaoData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/veiculosCombustao.png",
    topTitle: estimuloReducaoTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    title: estimuloReducaoTrad("title"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: estimuloReducaoTrad("iconAlt"),
    },
    ods: ["/img/ods/3.png", "/img/ods/11.png", "/img/ods/12.png", "/img/ods/13.png"],
  };

  const estimuloReducaoTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [estimuloReducaoTexto1Trad("paragraphs.0"), estimuloReducaoTexto1Trad("paragraphs.1")],
    imageAlt: estimuloReducaoTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/mobilidadeSustentavcel.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const cadeiaFornecedoresData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/esg/meioambiente.png",
    topTitle: cadeiaFornecedoresTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    title: cadeiaFornecedoresTrad("title"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: cadeiaFornecedoresTrad("iconAlt"),
    },
    ods: ["/img/ods/9.png", "/img/ods/12.png", "/img/ods/13.png", "/img/ods/17.png"],
  };

  const cadeiaFornecedoresTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [cadeiaFornecedoresTexto1Trad("paragraphs.0"), cadeiaFornecedoresTexto1Trad("paragraphs.1")],
    paragraphsWithTopics: [
      {
        topics: [
          cadeiaFornecedoresTexto1Trad("topics.0"),
          cadeiaFornecedoresTexto1Trad("topics.1"),
          cadeiaFornecedoresTexto1Trad("topics.2"),
          cadeiaFornecedoresTexto1Trad("topics.3"),
        ],
        lastParagraphs: [cadeiaFornecedoresTexto1Trad("lastParagraph")],
      },
    ],
    imageAlt: cadeiaFornecedoresTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/sustentabilidade.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const reciclagemMaterialData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/reciclagemBaterias.jpeg",
    topTitle: reciclagemMaterialTrad("topTitle"),
    lineColor: "bg-var-ambiental",
    title: reciclagemMaterialTrad("title"),
    icon: {
      icon: "/img/temp/esg/ambiental.png",
      iconAlt: reciclagemMaterialTrad("iconAlt"),
    },
    ods: ["/img/ods/6.png", "/img/ods/12.png", "/img/ods/13.png", "/img/ods/15.png"],
  };

  const reciclagemMaterialTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: reciclagemMaterialTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [reciclagemMaterialTexto1Trad("topics.0"), reciclagemMaterialTexto1Trad("topics.1")],
        lastParagraphs: [reciclagemMaterialTexto1Trad("lastParagraph")],
      },
    ],
    imageAlt: reciclagemMaterialTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/lampada.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const feitosAmbientalData: NumberCardsBannerInterface = {
    title: feitosAmbientalTrad("title"),
    paragraph: feitosAmbientalTrad("paragraph"),
    cardType: "mini",
    alignment: "center",
    cardColor: "var-ambiental",
    cardBorder: "border-var-ambiental",
    imageUrl: "/img/temp/esg/100.png",
    imageAlt: feitosAmbientalTrad("imageAlt"),
    // numberCards: [
    //   {
    //     title: feitosAmbientalTrad("numberCards.0.title"),
    //     icon: FaTree,
    //     paragraph: "",
    //   },
    //   {
    //     title: feitosAmbientalTrad("numberCards.1.title"),
    //     icon: MdCo2,
    //     paragraph: "",
    //   },
    //   {
    //     title: feitosAmbientalTrad("numberCards.2.title"),
    //     icon: LuRecycle,
    //     paragraph: "",
    //   },
    //   {
    //     title: feitosAmbientalTrad("numberCards.3.title"),
    //     icon: MdInsertDriveFile,
    //     paragraph: "",
    //   },
    // ],
    type: "border",
  };

  // SOCIAL
  const patrocinadorIniciativasData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/esg/capacitacaoProfissional.jpg",
    topTitle: patrocinadorIniciativasTrad("topTitle"),
    lineColor: "bg-var-social",
    icon: {
      icon: "/img/temp/esg/social.png",
      iconAlt: patrocinadorIniciativasTrad("iconAlt"),
    },
    title: patrocinadorIniciativasTrad("title"),
    ods: ["/img/ods/4.png", "/img/ods/8.png", "/img/ods/10.png"],
  };

  const patrocinadorIniciativasTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: patrocinadorIniciativasTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [patrocinadorIniciativasTexto1Trad("topics.0"), patrocinadorIniciativasTexto1Trad("topics.1")],
        lastParagraphs: [patrocinadorIniciativasTexto1Trad("lastParagraph")],
      },
    ],
    imageAlt: patrocinadorIniciativasTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/serratec.svg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanhasSolidariasData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/final/esg/campanhasSolidarias.png",
    topTitle: campanhasSolidariasTrad("topTitle"),
    lineColor: "bg-var-social",
    icon: {
      icon: "/img/temp/esg/social.png",
      iconAlt: campanhasSolidariasTrad("iconAlt"),
    },
    title: campanhasSolidariasTrad("title"),
    ods: ["/img/ods/1.png", "/img/ods/10.png"],
  };

  const campanhasSolidariasTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: campanhasSolidariasTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [campanhasSolidariasTexto1Trad("topics.0"), campanhasSolidariasTexto1Trad("topics.1")],
      },
    ],
    imageAlt: campanhasSolidariasTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/doacoes.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const voluntariadoApoioData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/final/esg/socialVoluntarioApoio.png",
    topTitle: voluntariadoApoioTrad("topTitle"),
    lineColor: "bg-var-social",
    icon: {
      icon: "/img/temp/esg/social.png",
      iconAlt: voluntariadoApoioTrad("iconAlt"),
    },
    title: voluntariadoApoioTrad("title"),
    ods: ["/img/ods/4.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
  };

  const voluntariadoApoioTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: voluntariadoApoioTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        subTitle: voluntariadoApoioTexto1Trad("subTitle"),
        topics: [voluntariadoApoioTexto1Trad("topics.0"), voluntariadoApoioTexto1Trad("topics.1")],
      },
    ],
    imageAlt: voluntariadoApoioTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/Apresentação DBA - Cuidando de quem cuida (2)_page-0001.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const voluntariadoApoioImagensData: CarouselSectionType = {
    images: [
      { image: "/img/final/esg/apoioEmpregabilidade.jpeg", imageAlt: "" },
      { image: "/img/final/esg/dba1.jpeg", imageAlt: "" },
      { image: "/img/final/esg/dba2.jpeg", imageAlt: "" },
      { image: "/img/final/esg/dba3.jpeg", imageAlt: "" },
    ],
  };

  const feitosSocialData: NumberCardsBannerInterface = {
    title: feitosSocialTrad("title"),
    paragraph: feitosSocialTrad("paragraph"),
    cardType: "mini",
    alignment: "center",
    cardColor: "var-social",
    cardBorder: "border-var-social",
    imageUrl: "/img/temp/esg/feitosSociais.png",
    imageAlt: feitosSocialTrad("imageAlt"),
    type: "border",
  };

  const campanha1Data: ImageWithCardTextBannerInterface = {
    paragraph: campanha1Trad("paragraph"),
    imageAlt: campanha1Trad("imageAlt"),
    imageUrl: "/img/final/esg/padre.jpeg",
    imageAlignment: "end",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanha2Data: ImageWithCardTextBannerInterface = {
    paragraphs: [campanha2Trad("paragraphs.0"), campanha2Trad("paragraphs.1")],
    imageAlt: campanha2Trad("imageAlt"),
    imageUrl: "/img/final/esg/esperancar.jpeg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanha3Data: ImageWithCardTextBannerInterface = {
    paragraphs: [campanha3Trad("paragraphs.0"), campanha3Trad("paragraphs.1")],
    imageAlt: campanha3Trad("imageAlt"),
    imageUrl: "/img/final/esg/appo.jpeg",
    imageAlignment: "end",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanha4Data: ImageWithCardTextBannerInterface = {
    paragraphs: [campanha4Trad("paragraphs.0"), campanha4Trad("paragraphs.1")],
    imageAlt: campanha4Trad("imageAlt"),
    imageUrl: "/img/final/esg/larSantaCatarina.png",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanhaNatalData: NumberCardsBannerInterface = {
    alignment: "center",
    topTitle: campanhaNatalTrad("topTitle"),
    title: campanhaNatalTrad("title"),
    paragraph: campanhaNatalTrad("paragraph"),
    cardColor: "var-social",
    cardBorder: "border-var-social",
    lineColor: "bg-var-social",
    numberCards: [
      {
        title: campanhaNatalTrad("numberCards.0.title"),
        icon: TbChristmasBall,
        paragraph: campanhaNatalTrad("numberCards.0.paragraph"),
      },
      {
        title: campanhaNatalTrad("numberCards.1.title"),
        icon: TbChristmasTree,
        paragraph: campanhaNatalTrad("numberCards.1.paragraph"),
      },
      {
        title: campanhaNatalTrad("numberCards.2.title"),
        icon: FaGift,
        paragraph: campanhaNatalTrad("numberCards.2.paragraph"),
      },
    ],
    type: "border",
  };

  const campanhaNatalImagensData: CarouselSectionType = {
    images: [
      { image: "/img/temp/esg/natal/1.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/arvore.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/3.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/presentes.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/5.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/6.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/7.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/8.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/9.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/10.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/11.jpeg", imageAlt: "" },
      { image: "/img/temp/esg/natal/12.jpeg", imageAlt: "" },
    ],
  };

  // GOVERNAMENTAL
  const normasCodigosLegislacoesData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/legislacao.jpeg",
    topTitle: normasCodigosLegislacoesTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: normasCodigosLegislacoesTrad("iconAlt"),
    },
    title: normasCodigosLegislacoesTrad("title"),
    ods: ["/img/ods/8.png", "/img/ods/10.png", "/img/ods/12.png", "/img/ods/16.png"],
  };

  const normasCodigosLegislacoesTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [
      normasCodigosLegislacoesTexto1Trad("paragraphs.0"),
      normasCodigosLegislacoesTexto1Trad("paragraphs.1"),
      normasCodigosLegislacoesTexto1Trad("paragraphs.2"),
      normasCodigosLegislacoesTexto1Trad("paragraphs.3"),
    ],
    paragraph: "",
    imageAlt: normasCodigosLegislacoesTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/legislacao.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const programaQualidadeVidaData: SimpleCallBannerInterface = {
    alignment: "bottomEnd",
    imageUrl: "/img/final/esg/qualidadeVida2.png",
    topTitle: programaQualidadeVidaTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: programaQualidadeVidaTrad("iconAlt"),
    },
    title: programaQualidadeVidaTrad("title"),
    ods: ["/img/ods/3.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/12.png"],
  };

  const programaQualidadeVidaTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: programaQualidadeVidaTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [programaQualidadeVidaTexto1Trad("topics.0"), programaQualidadeVidaTexto1Trad("topics.1")],
        lastParagraphs: [programaQualidadeVidaTexto1Trad("lastParagraph")],
      },
    ],
    imageAlt: programaQualidadeVidaTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/atividadeFisica.jpeg",
    imageAlignment: "start",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const equipeGenteGestaoData: SimpleCallBannerInterface = {
    alignment: "bottom",
    imageUrl: "/img/final/esg/mulheres.png",
    topTitle: equipeGenteGestaoTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: equipeGenteGestaoTrad("iconAlt"),
    },
    title: equipeGenteGestaoTrad("title"),
    ods: ["/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
  };

  const equipeGenteGestaoTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [
      equipeGenteGestaoTexto1Trad("paragraphs.0"),
      equipeGenteGestaoTexto1Trad("paragraphs.1"),
      equipeGenteGestaoTexto1Trad("paragraphs.2"),
    ],
    imageAlt: equipeGenteGestaoTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/mulheres2.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const comiteT2MData: SimpleCallBannerInterface = {
    alignment: "bottom",
    imageUrl: "/img/temp/esg/cipa.jpeg",
    topTitle: comiteT2MTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: comiteT2MTrad("iconAlt"),
    },
    title: comiteT2MTrad("title"),
    ods: ["/img/ods/3.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/16.png"],
  };

  const comiteT2MTexto1Data: ImageWithCardTextBannerInterface = {
    title: comiteT2MTexto1Trad("title"),
    paragraph: comiteT2MTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [comiteT2MTexto1Trad("topics.0"), comiteT2MTexto1Trad("topics.1")],
      },
    ],
    imageAlt: comiteT2MTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/compliance.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const comiteT2MTexto2Data: ImageWithCardTextBannerInterface = {
    title: comiteT2MTexto2Trad("title"),
    paragraph: comiteT2MTexto2Trad("paragraph"),
    paragraphsWithTopics: [
      {
        topics: [comiteT2MTexto2Trad("topics.0")],
      },
    ],
    imageAlt: comiteT2MTexto2Trad("imageAlt"),
    imageUrl: "/img/final/esg/comites.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const feitosGovernamentalData: NumberCardsBannerInterface = {
    title: feitosGovernamentalTrad("title"),
    paragraph: feitosGovernamentalTrad("paragraph"),
    cardType: "mini",
    alignment: "center",
    cardColor: "var-governanca",
    cardBorder: "border-var-governanca",
    imageUrl: "/img/temp/esg/feitosGovernamentais.png",
    imageAlt: feitosGovernamentalTrad("imageAlt"),
    type: "border",
  };

  const certificacoesPadroesInternacionaisData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/certificacoes.png",
    topTitle: certificacoesPadroesInternacionaisTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: certificacoesPadroesInternacionaisTrad("iconAlt"),
    },
    title: certificacoesPadroesInternacionaisTrad("title"),
    paragraph: certificacoesPadroesInternacionaisTrad("paragraph"),
    ods: ["/img/ods/3.png", "/img/ods/8.png", "/img/ods/12.png", "/img/ods/16.png"],
  };

  const certificacoesPadroesInternacionaisTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphsWithTopics: [
      {
        topics: [
          certificacoesPadroesInternacionaisTexto1Trad("topics.0"),
          certificacoesPadroesInternacionaisTexto1Trad("topics.1"),
        ],
        lastParagraphs: [certificacoesPadroesInternacionaisTexto1Trad("lastParagraph")],
      },
    ],
    imageAlt: certificacoesPadroesInternacionaisTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/iso.png",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
    pdfLink1: "https://biomobtinastorage.blob.core.windows.net/biomob/Cert_ISO37001_Port_19.03.2024.pdf",
    pdfText1: certificacoesPadroesInternacionaisTexto1Trad("linkText1"),
    pdfLink2: "https://biomobtinastorage.blob.core.windows.net/biomob/Cert_ISO%2037301_Port_19.03.2024.pdf",
    pdfText2: certificacoesPadroesInternacionaisTexto1Trad("linkText2"),
  };

  const organogramaTexto1Data: ImageWithCardTextBannerInterface = {
    title: organogramaTexto1Trad("title"),
    paragraph: organogramaTexto1Trad("paragraph"),
    imageAlt: organogramaTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/organograma.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
    pdfLink1:
      "https://cbkracjbkuqkxxmomlei.supabase.co/storage/v1/object/public/uploads/Temp/organograma%201%20(1).pdf?t=2024-12-26T19%3A20%3A10.342Z",
    pdfText1: organogramaTexto1Trad("linkText1"),
  };

  const certificacoesPadroesInternacionaisTexto2Data: ImageWithCardTextBannerInterface = {
    title: certificacoesPadroesInternacionaisTexto2Trad("title"),
    paragraph: certificacoesPadroesInternacionaisTexto2Trad("paragraph"),
    paragraphsWithTopics: [
      {
        subTitle: certificacoesPadroesInternacionaisTexto2Trad("subTitle"),
        topics: [
          certificacoesPadroesInternacionaisTexto2Trad("topics.0"),
          certificacoesPadroesInternacionaisTexto2Trad("topics.1"),
          certificacoesPadroesInternacionaisTexto2Trad("topics.2"),
          certificacoesPadroesInternacionaisTexto2Trad("topics.3"),
          certificacoesPadroesInternacionaisTexto2Trad("topics.4"),
        ],
        lastParagraphs: [certificacoesPadroesInternacionaisTexto2Trad("lastParagraph")],
      },
    ],
    imageAlt: certificacoesPadroesInternacionaisTexto2Trad("imageAlt"),
    imageUrl: "/img/temp/esg/cursos.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const canaisDenunciaData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/esg/canalDenuncia.jpg",
    topTitle: canaisDenunciaTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: canaisDenunciaTrad("iconAlt"),
    },
    title: canaisDenunciaTrad("title"),
    ods: ["/img/ods/3.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/16.png"],
  };

  const canaisDenunciaTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: canaisDenunciaTexto1Trad("paragraph"),
    paragraphsWithTopics: [
      {
        subTitle: canaisDenunciaTexto1Trad("subTitle"),
        topics: [canaisDenunciaTexto1Trad("topics.0"), canaisDenunciaTexto1Trad("topics.1")],
        lastParagraphs: [canaisDenunciaTexto1Trad("lastParagraphs.0"), canaisDenunciaTexto1Trad("lastParagraphs.1")],
      },
    ],
    imageAlt: canaisDenunciaTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/canalDenuncia2.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const equidadeSalarialData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/esg/equipeSalarial.jpg",
    buttonLink: "https://www.t2mlab.com/DOCs/Relatorio-de-Igualdade-Salarial-e-de-Critérios-Remuneratorios_set24.pdf",
    buttonText: equidadeSalarialTrad("buttonText"),
    buttonTarget: "_blank",
    topTitle: equidadeSalarialTrad("topTitle"),
    lineColor: "bg-var-governanca",
    icon: {
      icon: "/img/temp/esg/governanca.png",
      iconAlt: equidadeSalarialTrad("iconAlt"),
    },
    title: equidadeSalarialTrad("title"),
    paragraph: equidadeSalarialTrad("paragraph"),
    ods: ["/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
  };

  const equidadeSalarialTexto1Data: ImageWithCardTextBannerInterface = {
    title: equidadeSalarialTexto1Trad("title"),
    paragraphsWithTopics: [
      {
        topics: [
          equidadeSalarialTexto1Trad("topics.0"),
          equidadeSalarialTexto1Trad("topics.1"),
          equidadeSalarialTexto1Trad("topics.2"),
        ],
      },
    ],
    imageAlt: equidadeSalarialTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/salarial.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const metasData: NumberCardsBannerInterface = {
    title: metasTrad("title"),
    paragraph: metasTrad("paragraph"),
    cardType: "mini",
    alignment: "center",
    imageUrl: "/img/temp/esg/metas.png",
    imageAlt: metasTrad("imageAlt"),
    type: "border",
  };

  return (
    <div className="flex flex-col mb-20 gap-[2.75rem] lg:gap-[4.75rem]  justify-center items-center">
      {/* Ajustar todos os textos alt depois de trocar para as imagens finais */}
      <React.Suspense fallback={<Skeleton className="w-full aspect-[1440/572]" />}>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>
      <ImageWithCardTextBanner {...oportunidadesInclusivasData} />

      {/* Ambiental */}
      <SimpleCallBanner {...gestaoResiduosData} />
      <ImageWithCardTextBanner {...gestaoResiduosTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...contratosAssinadosData} />
      <ImageWithCardTextBanner {...contratosAssinadosTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...utilizacaoNuvemData} />
      <ImageWithCardTextBanner {...utilizacaoNuvemTexto1Data} />
      <ImageWithCardTextBanner {...utilizacaoNuvemTexto2Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...consumoConscienteData} />
      <ImageWithCardTextBanner {...consumoConscienteTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...estimuloReducaoData} />
      <ImageWithCardTextBanner {...estimuloReducaoTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...cadeiaFornecedoresData} />
      <ImageWithCardTextBanner {...cadeiaFornecedoresTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />

      <SimpleCallBanner {...reciclagemMaterialData} />
      <ImageWithCardTextBanner {...reciclagemMaterialTexto1Data} />
      <DividingLine lineColor={"bg-var-ambiental"} />
      <NumberCardsBanner {...feitosAmbientalData} />

      <DividingLine lineColor={"bg-var-ambiental"} />

      {/* Social */}
      <SimpleCallBanner {...patrocinadorIniciativasData} />
      <ImageWithCardTextBanner {...patrocinadorIniciativasTexto1Data} />
      {/* <NumberCardsBanner {...numerosResidenciaData} /> */}
      <GraficosResidencia />
      <GraficosUff />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...campanhasSolidariasData} />
      <ImageWithCardTextBanner {...campanhasSolidariasTexto1Data} />
      <DividingLine lineColor={"bg-var-social"} />

      <ImageWithCardTextBanner {...campanha1Data} />
      <ImageWithCardTextBanner {...campanha2Data} />
      <ImageWithCardTextBanner {...campanha3Data} />
      <ImageWithCardTextBanner {...campanha4Data} />
      <NumberCardsBanner {...campanhaNatalData} />
      <CarouselSection {...campanhaNatalImagensData} />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...voluntariadoApoioData} />
      <ImageWithCardTextBanner {...voluntariadoApoioTexto1Data} />
      <CarouselSection {...voluntariadoApoioImagensData} />
      <DividingLine lineColor={"bg-var-social"} />

      <NumberCardsBanner {...feitosSocialData} />
      <DividingLine lineColor={"bg-var-social"} />

      {/* Governança */}
      <SimpleCallBanner {...normasCodigosLegislacoesData} />
      <ImageWithCardTextBanner {...normasCodigosLegislacoesTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...programaQualidadeVidaData} />
      <ImageWithCardTextBanner {...programaQualidadeVidaTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...equipeGenteGestaoData} />
      <ImageWithCardTextBanner {...equipeGenteGestaoTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...comiteT2MData} />
      <ImageWithCardTextBanner {...comiteT2MTexto1Data} />
      <ImageWithCardTextBanner {...comiteT2MTexto2Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...certificacoesPadroesInternacionaisData} />
      <ImageWithCardTextBanner {...certificacoesPadroesInternacionaisTexto1Data} />
      <ImageWithCardTextBanner {...certificacoesPadroesInternacionaisTexto2Data} />
      <ImageWithCardTextBanner {...organogramaTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...canaisDenunciaData} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...equidadeSalarialData} />
      <ImageWithCardTextBanner {...equidadeSalarialTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />
      <NumberCardsBanner {...feitosGovernamentalData} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <NumberCardsBanner {...metasData} />
      <DividingLine lineColor={"bg-var-governanca"} />
    </div>
  );
};

export default ESGPage;
