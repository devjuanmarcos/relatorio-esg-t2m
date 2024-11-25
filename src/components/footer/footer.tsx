"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextVariantes from "../ui/TextsVariants";
import { buttonVariants } from "../ui/button";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const topics = [
  { label: "Sobre", href: "/" },
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Proposta de valor", href: "/proposta-de-valor" },
  { label: "Nossa equipe", href: "/nossa-equipe" },
  { label: "Comunidade", href: "/comunidade" },
  { label: "ESG", href: "/esg" },
];

const socialLinks = [
  { href: "https://www.instagram.com/biomobguia/", icon: IoLogoInstagram },
  { href: "https://www.linkedin.com/company/biomob/", icon: FaLinkedinIn },
  { href: "https://pt-br.facebook.com/biomobguia/", icon: FaFacebookF },
  { href: "https://www.youtube.com/@biomobguia", icon: FaYoutube },
];

const TopicLinks = () => (
  <div className="flex flex-col gap-3">
    <TextVariantes variant="top_title">Tópicos</TextVariantes>
    {topics.map((topic) => (
      <Link key={topic.href} href={topic.href}>
        <TextVariantes variant="paragraph_01">{topic.label}</TextVariantes>
      </Link>
    ))}
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-col gap-3 items-center">
    <TextVariantes variant="top_title">Nossas redes sociais</TextVariantes>
    <div className="flex gap-3">
      {socialLinks.map(({ href, icon: Icon }) => (
        <Link key={href} href={href} target="_blank">
          <Icon className="text-lg text-primary" />
        </Link>
      ))}
    </div>
  </div>
);

const OfficialSite = () => (
  <div className="flex flex-col gap-3 items-center">
    <TextVariantes variant="top_title">Visite nosso site oficial</TextVariantes>
    <Link href="https://www.t2mlab.com" target="_blank" className={buttonVariants()}>
      https://www.t2mlab.com
    </Link>
  </div>
);

export const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row py-[52px] px-4 md:px-20 gap-20 w-full md:max-w-[80vw] mx-auto border-t border-primary text-center">
      <div className="flex flex-col items-center">
        <Image src="/img/LOGOT2M.png" alt="Logo da T2M" width={407} height={177} quality={100} />
        <TextVariantes variant="top_title">© T2M 2023 | Todos direitos reservados</TextVariantes>
      </div>

      <div className="flex flex-col gap-20 lg:hidden">
        <TopicLinks />
        <div className="flex flex-col gap-3">
          <OfficialSite />
          <SocialLinks />
        </div>
      </div>

      <div className="hidden lg:flex flex-row gap-20">
        <TopicLinks />
        <div className="flex flex-col gap-3">
          <OfficialSite />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};
