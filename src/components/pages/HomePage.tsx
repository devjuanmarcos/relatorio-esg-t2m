"use client";

import dynamic from "next/dynamic";
import React from "react";

const MemoizedMainBanner = dynamic(() => import("@banners/MainBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@banners/MainBanner");
  }, []);

  return (
    <div className="flex flex-col mb-20">
      <React.Suspense>
        <MemoizedMainBanner />
      </React.Suspense>
    </div>
  );
};

export default HomePage;
