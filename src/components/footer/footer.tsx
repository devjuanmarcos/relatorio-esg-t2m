"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import TextVariantes from "../ui/TextsVariants";
import { buttonVariants } from "../ui/button";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Skeleton } from "../ui/skeleton";

import { useTranslations } from "next-intl";

const topics = [
  { label: "sobre", href: "/" },
  { label: "quemSomos", href: "/quem-somos" },
  { label: "propostaDeValor", href: "/proposta-de-valor" },
  { label: "nossaEquipe", href: "/nossa-equipe" },
  { label: "comunidade", href: "/comunidade" },
  { label: "esg", href: "/esg" },
];

const socialLinks = [
  { href: "https://www.instagram.com/test2market/", icon: IoLogoInstagram, label: "instagram" },
  { href: "https://br.linkedin.com/company/t2mtesttomarket", icon: FaLinkedinIn, label: "linkedin" },
  { href: "https://www.facebook.com/p/T2M-Test-to-Market-100040759607015/", icon: FaFacebookF, label: "facebook" },
  { href: "https://www.youtube.com/@T2Mlab", icon: FaYoutube, label: "youtube" },
];

const locales = [
  "zh-Hant",
  "zh-Hans",
  "en",
  "pt",
  "es",
  "ja",
  "de",
  "fr",
  "it",
  "bn",
  "hi",
  "ru",
  "ko",
  "vi",
  "te",
  "yue",
  "mr",
  "ta",
  "tr",
  "ur",
  "gu",
  "pl",
  "uk",
  "ms",
  "kn",
  "or",
  "pa",
  "ro",
  "az",
  "fa",
  "my",
  "th",
  "nl",
  "yo",
  "sd",
];

const TopicLinks = () => {
  const t = useTranslations("footer");
  const pathname = usePathname();

  const normalizedPathname = React.useMemo(() => {
    const parts = pathname.split("/");
    if (locales.includes(parts[1])) {
      return `/${parts.slice(2).join("/")}` || "/";
    }
    return pathname;
  }, [pathname]);

  return (
    <div className="flex flex-col gap-3">
      <TextVariantes variant="top_title">{t("topics.title")}</TextVariantes>
      {topics.map((topic, index) => (
        <React.Fragment key={topic.href}>
          <Link href={topic.href}>
            <TextVariantes
              variant="paragraph_01"
              extraClassName={`${
                normalizedPathname === topic.href ? "underline text-primary" : "no-underline"
              } hover:underline hover:text-primary transition-all duration-200`}
            >
              {t(`topics.items.${topic.label}`)}
            </TextVariantes>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

const SocialLinks = () => {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col gap-3 items-center">
      <TextVariantes variant="top_title">{t("socialLinks.title")}</TextVariantes>
      <div className="flex gap-3">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Link key={href} href={href} target="_blank">
            <Icon className="text-lg text-primary" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const OfficialSite = () => {
  const t = useTranslations("footer");

  return (
    <div className="flex flex-col gap-3 items-center">
      <TextVariantes variant="top_title">{t("officialSite.title")}</TextVariantes>
      <Link href={t("officialSite.link")} target="_blank" className={buttonVariants()}>
        {t("officialSite.link")}
      </Link>
    </div>
  );
};

export const Footer = () => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const t = useTranslations("footer");

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="w-full aspect-[1440/300]" />;
  }

  return (
    <div className="flex flex-col lg:flex-row py-[52px] px-4 md:px-20 gap-20 w-full md:max-w-[80vw] mx-auto border-t border-primary text-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src={theme == "dark" ? "/img/LOGOT2MBRANCA.png" : "/img/LOGOT2M.png"}
          alt={t("footerInfo.logoAlt")}
          width={407}
          height={177}
          quality={100}
        />
        <TextVariantes variant="top_title">{t("footerInfo.text")}</TextVariantes>
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
