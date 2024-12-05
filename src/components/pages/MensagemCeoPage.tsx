"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import TextVariantes from "../ui/TextsVariants";
import { FaBalanceScale, FaLeaf, FaUsers } from "react-icons/fa";
import { useTranslations } from "next-intl";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const MensagemCeoPage: React.FC = () => {
  const isMounted = useIsMounted();
  const callBannerTrad = useTranslations("MensagemCeoPage.callBannerTrad");
  const tresTopicosTrad = useTranslations("MensagemCeoPage.tresTopicosTrad");
  const mensagemTrad = useTranslations("MensagemCeoPage.mensagemTrad");

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
    buttonText: callBannerTrad("buttonText"),
    buttonTarget: "_blank",
    title: callBannerTrad("title"),
    paragraph: callBannerTrad("paragraph"),
  };

  const tresTopicosData: NumberCardsBannerInterface = {
    title: "",
    paragraph: tresTopicosTrad("paragraph"),
    numberCards: [
      {
        title: tresTopicosTrad("numberCards.0.title"),
        icon: FaLeaf,
        paragraph: tresTopicosTrad("numberCards.0.paragraph"),
      },
      {
        title: tresTopicosTrad("numberCards.1.title"),
        icon: FaUsers,
        paragraph: tresTopicosTrad("numberCards.1.paragraph"),
      },
      {
        title: tresTopicosTrad("numberCards.2.title"),
        icon: FaBalanceScale,
        paragraph: tresTopicosTrad("numberCards.2.paragraph"),
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
        <TextVariantes variant="paragraph_01">{`"${mensagemTrad("paragraph")}"`}</TextVariantes>
        <TextVariantes variant="top_title">Guilherme da Motta Alves - {mensagemTrad("CEO")}</TextVariantes>
      </div>

      <NumberCardsBanner {...tresTopicosData} />
    </div>
  );
};

export default MensagemCeoPage;
