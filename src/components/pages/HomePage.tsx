"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import {
  CallBannerData,
  matrizMaterialidadeData,
  matrizMaterialidadeTopicosData,
  mensagemCeoData,
  metodologiaData,
  partesInteressadasData,
  processoMaterialidadeData,
  quatroCardsMetodologiaData,
  sobreRelatorioData,
} from "@/data/homePageData";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);
const TwoCardsTextBanner = dynamic(() =>
  import("@/components/banners/TwoCardsTextBanner").then((mod) => mod.TwoCardsTextBanner)
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
const ImageWithTopicsBanner = dynamic(() =>
  import("@/components/banners/ImageWithTopicsBanner").then((mod) => mod.ImageWithTopicsBanner)
);

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...CallBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...mensagemCeoData} />
      <DividingLine />
      <TwoCardsTextBanner {...sobreRelatorioData} />
      <SimpleCallBanner {...processoMaterialidadeData} />
      <IconsCardsBanner {...partesInteressadasData} />
      <SimpleCallBanner {...metodologiaData} />
      <ThreeTextCardsWithNumberCardBanner {...quatroCardsMetodologiaData} />
      <SimpleCallBanner {...matrizMaterialidadeData} />
      <ImageWithTopicsBanner {...matrizMaterialidadeTopicosData} />
    </div>
  );
};

export default HomePage;
