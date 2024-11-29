"use server";

import ComunidadePage from "@/components/pages/ComunidadePage";
import { Loading } from "@/components/ui/Loading";
import defaultMetatada from "@/metadata/defaultMetadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetatada();
}

export default async function QuemSomos() {
  return (
    <React.Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <Loading size={100} speed={1.32} />
        </div>
      }
    >
      <ComunidadePage />
    </React.Suspense>
  );
}
