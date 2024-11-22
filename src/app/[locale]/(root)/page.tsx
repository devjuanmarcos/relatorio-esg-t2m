"use server";

import HomePage from "@/components/pages/HomePage";
import defaultMetatada from "@/metadata/defaultMetadata";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return defaultMetatada();
}

export default async function Home() {
  return <HomePage />;
}
