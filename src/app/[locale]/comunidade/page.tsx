"use server";

import ComunidadePage from "@/components/pages/ComunidadePage";
import defaultMetatada from "@/metadata/defaultMetadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetatada();
}

export default async function QuemSomos() {
  return <ComunidadePage />;
}
