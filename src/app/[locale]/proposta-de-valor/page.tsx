"use server";

import PropostaDeValorPage from "@/components/pages/PropostaDeValorPage";
import defaultMetatada from "@/metadata/defaultMetadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetatada();
}

export default async function PropostaDeValor() {
  return <PropostaDeValorPage />;
}
