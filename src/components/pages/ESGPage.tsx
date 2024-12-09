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
import {
  FaBriefcase,
  FaCertificate,
  FaChalkboardTeacher,
  FaChartLine,
  FaChild,
  FaFemale,
  FaHandsHelping,
  FaLeaf,
  FaSchool,
  FaTree,
  FaUserAlt,
  FaUsers,
  FaUtensils,
  FaVenus,
  FaWheelchair,
} from "react-icons/fa";
import { MdCo2, MdInsertDriveFile } from "react-icons/md";
import { LuRecycle } from "react-icons/lu";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
  const numerosResidenciaTrad = useTranslations("ESGPage.Social.numerosResidenciaTrad");
  const equipeGenteGestaoTrad = useTranslations("ESGPage.Social.equipeGenteGestaoTrad");
  const equipeGenteGestaoTexto1Trad = useTranslations("ESGPage.Social.equipeGenteGestaoTexto1Trad");
  const programaQualidadeVidaTrad = useTranslations("ESGPage.Social.programaQualidadeVidaTrad");
  const programaQualidadeVidaTexto1Trad = useTranslations("ESGPage.Social.programaQualidadeVidaTexto1Trad");
  const campanhasSolidariasTrad = useTranslations("ESGPage.Social.campanhasSolidariasTrad");
  const campanhasSolidariasTexto1Trad = useTranslations("ESGPage.Social.campanhasSolidariasTexto1Trad");
  const voluntariadoApoioTrad = useTranslations("ESGPage.Social.voluntariadoApoioTrad");
  const voluntariadoApoioTexto1Trad = useTranslations("ESGPage.Social.voluntariadoApoioTexto1Trad");
  const feitosSocialTrad = useTranslations("ESGPage.Social.feitosSocialTrad");
  const campanha1Trad = useTranslations("ESGPage.Social.campanha1Trad");
  const campanha2Trad = useTranslations("ESGPage.Social.campanha2Trad");

  // TRADUÇÕES BANNERS GOVERNAMENTAIS
  const normasCodigosLegislacoesTrad = useTranslations("ESGPage.Governamental.normasCodigosLegislacoesTrad");
  const normasCodigosLegislacoesTexto1Trad = useTranslations(
    "ESGPage.Governamental.normasCodigosLegislacoesTexto1Trad"
  );
  const comiteT2MTrad = useTranslations("ESGPage.Governamental.comiteT2MTrad");
  const comiteT2MTexto1Trad = useTranslations("ESGPage.Governamental.comiteT2MTexto1Trad");
  const comiteT2MTexto2Trad = useTranslations("ESGPage.Governamental.comiteT2MTexto2Trad");
  const certificacoesPadroesInternacionaisTrad = useTranslations(
    "ESGPage.Governamental.certificacoesPadroesInternacionaisTrad"
  );
  const certificacoesPadroesInternacionaisTexto1Trad = useTranslations(
    "ESGPage.Governamental.certificacoesPadroesInternacionaisTexto1Trad"
  );
  const canaisDenunciaTrad = useTranslations("ESGPage.Governamental.canaisDenunciaTrad");
  const canaisDenunciaTexto1Trad = useTranslations("ESGPage.Governamental.canaisDenunciaTexto1Trad");
  const equidadeSalarialTrad = useTranslations("ESGPage.Governamental.equidadeSalarialTrad");
  const equidadeSalarialTexto1Trad = useTranslations("ESGPage.Governamental.equidadeSalarialTexto1Trad");
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
    imageUrl: "/img/temp/esg/odsonu2.png",
    imageAlignment: "start",
    buttonText: oportunidadesInclusivasTrad("buttonText"),
    buttonLink: "#",
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
    imageAlt: gestaoResiduosTexto1Trad("imageUrl"),
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

  const utilizacaoNuvemTexto2Data: ImageWithCardTextBannerInterface = {
    paragraphs: [utilizacaoNuvemTexto2Trad("paragraphs.0"), utilizacaoNuvemTexto2Trad("paragraphs.1")],
    imageAlt: utilizacaoNuvemTexto2Trad("imageAlt"),
    imageUrl: "/img/temp/esg/emissaoCarbono.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-ambiental",
    pointColor: "text-var-ambiental",
  };

  const utilizacaoNuvemTexto1Data: ImageWithCardTextBannerInterface = {
    paragraphs: [
      utilizacaoNuvemTexto1Trad("paragraphs.0"),
      utilizacaoNuvemTexto1Trad("paragraphs.1"),
      utilizacaoNuvemTexto1Trad("paragraphs.2"),
    ],
    imageAlt: utilizacaoNuvemTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/computacaoNuvem.jpg",
    imageAlignment: "end",
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
    paragraph: estimuloReducaoTexto1Trad("paragraph"),
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
    paragraph: cadeiaFornecedoresTexto1Trad("paragraph"),
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
    imageAlt: patrocinadorIniciativasTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/serratec.svg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const numerosResidenciaData: NumberCardsBannerInterface = {
    title: numerosResidenciaTrad("title"),
    topTitle: numerosResidenciaTrad("topTitle"),
    paragraph: numerosResidenciaTrad("paragraph"),
    alignment: "center",
    cardBorder: "border-t-var-social",
    cardColor: "var-social",
    numberCards: [
      {
        icon: FaChild,
        title: "205",
        paragraph: numerosResidenciaTrad("numberCards.0.paragraph"),
      },
      {
        icon: FaBriefcase,
        title: "101",
        paragraph: numerosResidenciaTrad("numberCards.1.paragraph"),
      },
      {
        icon: FaChartLine,
        title: "75%",
        paragraph: numerosResidenciaTrad("numberCards.2.paragraph"),
      },
      {
        icon: FaWheelchair,
        title: "4%",
        paragraph: numerosResidenciaTrad("numberCards.3.paragraph"),
      },
      {
        icon: FaFemale,
        title: "21%",
        paragraph: numerosResidenciaTrad("numberCards.4.paragraph"),
      },
      {
        icon: FaUserAlt,
        title: "7%",
        paragraph: numerosResidenciaTrad("numberCards.5.paragraph"),
      },
      {
        icon: FaSchool,
        title: "51%",
        paragraph: numerosResidenciaTrad("numberCards.6.paragraph"),
      },
      {
        icon: FaHandsHelping,
        title: "62%",
        paragraph: numerosResidenciaTrad("numberCards.7.paragraph"),
      },
      {
        icon: FaChalkboardTeacher,
        title: "10",
        paragraph: numerosResidenciaTrad("numberCards.8.paragraph"),
      },
    ],
  };

  const equipeGenteGestaoData: SimpleCallBannerInterface = {
    alignment: "bottom",
    imageUrl: "/img/final/esg/mulheres.png",
    topTitle: equipeGenteGestaoTrad("topTitle"),
    lineColor: "bg-var-social",
    icon: {
      icon: "/img/temp/esg/social.png",
      iconAlt: equipeGenteGestaoTrad("iconAlt"),
    },
    title: equipeGenteGestaoTrad("title"),
    ods: ["/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
  };

  const equipeGenteGestaoTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: equipeGenteGestaoTexto1Trad("paragraph"),
    imageAlt: equipeGenteGestaoTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/mulheres2.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const programaQualidadeVidaData: SimpleCallBannerInterface = {
    alignment: "bottomEnd",
    imageUrl: "/img/final/esg/qualidadeVida2.png",
    topTitle: programaQualidadeVidaTrad("topTitle"),
    lineColor: "bg-var-social",
    icon: {
      icon: "/img/temp/esg/social.png",
      iconAlt: programaQualidadeVidaTrad("iconAlt"),
    },
    title: programaQualidadeVidaTrad("title"),
    ods: ["/img/ods/3.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/12.png"],
  };

  const programaQualidadeVidaTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph: programaQualidadeVidaTexto1Trad("paragraph"),
    imageAlt: programaQualidadeVidaTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/atividadeFisica.jpeg",
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
    imageAlt: voluntariadoApoioTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/apoioEmpregabilidade.jpeg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const feitosSocialData: NumberCardsBannerInterface = {
    title: feitosSocialTrad("title"),
    paragraph: feitosSocialTrad("paragraph"),
    cardType: "mini",
    alignment: "center",
    cardColor: "var-social",
    cardBorder: "border-var-social",
    numberCards: [
      {
        title: feitosSocialTrad("numberCards.0.title"),
        icon: FaUtensils,
        paragraph: "",
      },
      {
        title: feitosSocialTrad("numberCards.1.title"),
        icon: FaHandsHelping,
        paragraph: "",
      },
      {
        title: feitosSocialTrad("numberCards.2.title"),
        icon: FaUsers,
        paragraph: "",
      },
      {
        title: feitosSocialTrad("numberCards.3.title"),
        icon: FaFemale,
        paragraph: "",
      },
      {
        title: feitosSocialTrad("numberCards.4.title"),
        icon: FaVenus,
        paragraph: "",
      },
    ],
    type: "border",
  };

  const campanha1Data: ImageWithCardTextBannerInterface = {
    paragraph: campanha1Trad("paragraph"),
    imageAlt: campanha1Trad("imageAlt"),
    imageUrl: "/img/final/esg/esperancar.jpeg",
    imageAlignment: "end",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
  };

  const campanha2Data: ImageWithCardTextBannerInterface = {
    paragraph: campanha2Trad("paragraph"),
    imageAlt: campanha2Trad("imageAlt"),
    imageUrl: "/img/final/esg/appo.jpeg",
    imageAlignment: "start",
    lineColor: "bg-var-social",
    pointColor: "text-var-social",
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
    ],
    paragraph: "",
    imageAlt: normasCodigosLegislacoesTexto1Trad("imageAlt"),
    imageUrl: "/img/final/esg/legislacao.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const comiteT2MData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/final/esg/comites.jpg",
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
    paragraph: comiteT2MTexto1Trad("paragraph"),
    imageAlt: comiteT2MTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/compliance.jpg",
    imageAlignment: "start",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
  };

  const comiteT2MTexto2Data: ImageWithCardTextBannerInterface = {
    paragraph: comiteT2MTexto2Trad("paragraph"),
    imageAlt: comiteT2MTexto2Trad("imageAlt"),
    imageUrl: "/img/temp/esg/prevencao.jpg",
    imageAlignment: "end",
    lineColor: "bg-var-governanca",
    pointColor: "text-var-governanca",
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
    paragraphs: [
      certificacoesPadroesInternacionaisTexto1Trad("paragraphs.0"),
      certificacoesPadroesInternacionaisTexto1Trad("paragraphs.1"),
    ],
    imageAlt: certificacoesPadroesInternacionaisTexto1Trad("imageAlt"),
    imageUrl: "/img/temp/esg/verificado.jpg",
    imageAlignment: "end",
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
    paragraphs: [
      canaisDenunciaTexto1Trad("paragraphs.0"),
      canaisDenunciaTexto1Trad("paragraphs.1"),
      canaisDenunciaTexto1Trad("paragraphs.2"),
      canaisDenunciaTexto1Trad("paragraphs.3"),
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
    paragraph: equidadeSalarialTexto1Trad("paragraph"),
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
    numberCards: [
      {
        title: metasTrad("numberCards.0.title"),
        icon: FaTree,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.1.title"),
        icon: MdCo2,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.2.title"),
        icon: LuRecycle,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.3.title"),
        icon: FaUtensils,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.4.title"),
        icon: FaHandsHelping,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.5.title"),
        icon: FaUsers,
        paragraph: "",
      },
      {
        title: metasTrad("numberCards.6.title"),
        icon: FaCertificate,
        paragraph: "",
      },
    ],
    type: "border",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
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
      <NumberCardsBanner {...numerosResidenciaData} />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...equipeGenteGestaoData} />
      <ImageWithCardTextBanner {...equipeGenteGestaoTexto1Data} />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...programaQualidadeVidaData} />
      <ImageWithCardTextBanner {...programaQualidadeVidaTexto1Data} />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...campanhasSolidariasData} />
      <ImageWithCardTextBanner {...campanhasSolidariasTexto1Data} />
      <DividingLine lineColor={"bg-var-social"} />

      <SimpleCallBanner {...voluntariadoApoioData} />
      <ImageWithCardTextBanner {...voluntariadoApoioTexto1Data} />
      <DividingLine lineColor={"bg-var-social"} />
      <NumberCardsBanner {...feitosSocialData} />
      <ImageWithCardTextBanner {...campanha1Data} />
      <ImageWithCardTextBanner {...campanha2Data} />
      <DividingLine lineColor={"bg-var-social"} />

      {/* Governança */}
      <SimpleCallBanner {...normasCodigosLegislacoesData} />
      <ImageWithCardTextBanner {...normasCodigosLegislacoesTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...comiteT2MData} />
      <ImageWithCardTextBanner {...comiteT2MTexto1Data} />
      <ImageWithCardTextBanner {...comiteT2MTexto2Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...certificacoesPadroesInternacionaisData} />
      <ImageWithCardTextBanner {...certificacoesPadroesInternacionaisTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...canaisDenunciaData} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <SimpleCallBanner {...equidadeSalarialData} />
      <ImageWithCardTextBanner {...equidadeSalarialTexto1Data} />
      <DividingLine lineColor={"bg-var-governanca"} />

      <NumberCardsBanner {...metasData} />
      <DividingLine lineColor={"bg-var-governanca"} />
    </div>
  );
};

export default ESGPage;
