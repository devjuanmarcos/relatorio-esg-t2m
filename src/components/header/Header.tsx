"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import TextVariantes from "../ui/TextsVariants";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useTheme } from "next-themes";
import React from "react";

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

export const Header = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  const topics = [
    { label: "Sobre", href: "/" },
    { label: "ESG", href: "/esg" },
    { label: "Quem somos", href: "/quem-somos" },
    { label: "Proposta de valor", href: "/proposta-de-valor" },
    { label: "Nossa equipe", href: "/nossa-equipe" },
    { label: "Comunidade", href: "/comunidade" },
  ];

  const normalizedPathname = (() => {
    const parts = pathname.split("/");
    if (locales.includes(parts[1])) {
      return `/${parts.slice(2).join("/")}` || "/";
    }
    return pathname;
  })();

  const handleLinkClick = (href: string) => {
    setSidebarOpen(false);
    setIsLoading(true);
    document.body.classList.add("cursor-wait");
    router.push(href);
    setIsLoading(false);
    document.body.classList.remove("cursor-wait");
  };

  return (
    <header className="flex justify-between w-full lg:grid grid-cols-[85px_1fr_85px] items-center bg-background px-4 py-[.375rem] border-b border-primary">
      <Link href={"/"}>
        <Image
          src={theme == "dark" ? "/img/LOGOT2MBRANCA.png" : "/img/LOGOT2M.png"}
          alt="Logo da T2M - Test to Market"
          width={85}
          height={37}
        />
      </Link>
      <div className="hidden lg:flex gap-[.625rem] items-center justify-center w-full">
        {topics.map((topic, index) => (
          <React.Fragment key={topic.href}>
            <Link href={topic.href} onClick={() => handleLinkClick(topic.href)}>
              <TextVariantes
                variant="paragraph_01"
                extraClassName={`${
                  normalizedPathname === topic.href ? "underline text-primary" : "no-underline"
                } hover:underline hover:text-primary transition-all duration-200`}
              >
                {topic.label}
              </TextVariantes>
            </Link>
            {index < topics.length - 1 && (
              <TextVariantes variant="paragraph_01" extraClassName="select-none">
                •
              </TextVariantes>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="lg:hidden flex items-center">
        <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <DrawerTrigger>
            <button className="text-primary">
              <HamburgerMenuIcon className="text-primary" width={40} />
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col p-4">
              {topics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className={`${
                    normalizedPathname === topic.href ? "underline text-primary" : "no-underline"
                  } hover:underline hover:text-primary transition-all duration-200 mb-2`}
                  onClick={() => handleLinkClick(topic.href)}
                >
                  {topic.label}
                </Link>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
