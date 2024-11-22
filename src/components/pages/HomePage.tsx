"use client";

import { MainBannerInterface } from "@banners/MainBanner";
import dynamic from "next/dynamic";
import React from "react";

const MemoizedMainBanner = dynamic(() => import("@banners/MainBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@banners/MainBanner");
  }, []);

  const mainBannerData: MainBannerInterface = {
    imageUrl: "/img/temp/Frame3.png",
    buttonLink: "#",
    buttonText: "Baixe o Relatório de Impacto Social (PDF)",
    buttonTarget: "_blank",
    title: "Relatório de Impacto Social",
    paragraph:
      "Impacto Social e Desenvolvimento Sustentável que apresenta as ações e os compromissos da T2M com práticas de responsabilidade social, ambiental e de governança (ESG).",
  };

  return (
    <div className="flex flex-col mb-20">
      <React.Suspense>
        <MemoizedMainBanner {...mainBannerData} />
      </React.Suspense>
    </div>
  );
};

export default HomePage;
