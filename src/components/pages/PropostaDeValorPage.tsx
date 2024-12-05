"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
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

const PropostaDeValorPage: React.FC = () => {
  const isMounted = useIsMounted();

  const callBannerTrad = useTranslations("PropostaValorPage.callBannerTrad");
  const solucoesQualidadeTrad = useTranslations("PropostaValorPage.solucoesQualidadeTrad");
  const inovacaoTrad = useTranslations("PropostaValorPage.inovacaoTrad");
  const praticasResponsivasTrad = useTranslations("PropostaValorPage.praticasResponsivasTrad");
  const transparenciaIgualdadeTrad = useTranslations("PropostaValorPage.transparenciaIgualdadeTrad");

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/propostaValor.png",
    buttonLink: "https://www.t2mlab.com/nosso-blog/",
    buttonText: callBannerTrad("buttonText"),
    buttonTarget: "_blank",
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
  };

  const solucoesQualidadeData: ImageWithCardTextBannerInterface = {
    imageAlt: solucoesQualidadeTrad("imageAlt"),
    imageUrl: "/img/temp/lampada.png",
    title: solucoesQualidadeTrad("title"),
    paragraph: solucoesQualidadeTrad("paragraph"),
    imageAlignment: "end",
  };

  const inovacaoData: ImageWithCardTextBannerInterface = {
    imageAlt: inovacaoTrad("imageAlt"),
    imageUrl: "/img/temp/sustentabilidade.jpeg",
    title: inovacaoTrad("title"),
    paragraph: inovacaoTrad("paragraph"),
    imageAlignment: "start",
  };

  const praticasResponsivasData: ImageWithCardTextBannerInterface = {
    imageAlt: praticasResponsivasTrad("imageAlt"),
    imageUrl: "/img/temp/praticas.png",
    title: praticasResponsivasTrad("title"),
    paragraph: praticasResponsivasTrad("paragraph"),
    imageAlignment: "end",
  };

  const transparenciaIgualdadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/transparenciaIgualdade.jpeg",
    title: transparenciaIgualdadeTrad("title"),
    paragraph: transparenciaIgualdadeTrad("paragraph"),
    buttonLink: "https://www.t2mlab.com/DOCs/Relatorio-de-Igualdade-Salarial-e-de-Critérios-Remuneratorios_set24.pdf",
    buttonText: transparenciaIgualdadeTrad("buttonText"),
    buttonTarget: "_blank",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...solucoesQualidadeData} />
      <ImageWithCardTextBanner {...inovacaoData} />
      <ImageWithCardTextBanner {...praticasResponsivasData} />
      <SimpleCallBanner {...transparenciaIgualdadeData} />
    </div>
  );
};

export default PropostaDeValorPage;
