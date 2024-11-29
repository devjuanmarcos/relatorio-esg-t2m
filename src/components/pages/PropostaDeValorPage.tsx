"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { FaAccessibleIcon } from "react-icons/fa6";
import { NumberCardsBanner, NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
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

const PropostaDeValorPage: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/propostaValor.png",
    buttonLink: "https://www.t2mlab.com/nosso-blog/",
    buttonText: "Nosso blog",
    buttonTarget: "_blank",
    title: "Proposta de valor",
    paragraph:
      "Acreditamos que, ao entregar soluções técnicas robustas e personalizadas, conseguimos não apenas atender às necessidades imediatas dos nossos clientes, mas também contribuir para o crescimento sustentável e a inovação contínua em seus negócios.",
  };

  const solucoesQualidadeData: ImageWithCardTextBannerInterface = {
    imageAlt: "Ideia",
    imageUrl: "/img/temp/lampada.png",
    title: "Soluções de Qualidade para o Sucesso",
    paragraph:
      "Na T2M, temos o compromisso de entregar soluções tecnológicas de alta qualidade que impulsionem o sucesso dos nossos clientes. Oferecemos serviços especializados em qualidade de software, privacidade e segurança, acessibilidade digital e business agility, sempre com foco na entrega de resultados concretos. Selecionamos metodologias e tecnologias de ponta para transformar desafios em oportunidades, garantindo que nossos clientes possam confiar em nossos processos e entregar resultados no tempo certo.",
    imageAlignment: "end",
  };

  const inovacaoData: ImageWithCardTextBannerInterface = {
    imageAlt: "Sustentabilidade",
    imageUrl: "/img/temp/sustentabilidade.png",
    title: "Inovação e Sustentabilidade",
    paragraph:
      "Nosso compromisso com a inovação e a sustentabilidade se reflete no trabalho contínuo com nossos parceiros e fornecedores, garantindo que todos os processos sejam executados com os mais altos padrões de qualidade e segurança. Além disso, nossas soluções são adaptadas às necessidades específicas de cada cliente, alinhando-se com suas metas estratégicas e oferecendo vantagens competitivas no mercado.",
    imageAlignment: "start",
  };

  const praticasResponsivasData: ImageWithCardTextBannerInterface = {
    imageAlt: "Cadeirantes",
    imageUrl: "/img/temp/praticas.png",
    title: "Práticas Responsáveis e Inclusivas",
    paragraph:
      "Na T2M, temos o compromisso de entregar soluções tecnológicas de alta qualidade que impulsionem o sucesso dos nossos clientes. Oferecemos serviços especializados em qualidade de software, privacidade e segurança, acessibilidade digital e business agility, sempre com foco na entrega de resultados concretos. Selecionamos metodologias e tecnologias de ponta para transformar desafios em oportunidades, garantindo que nossos clientes possam confiar em nossos processos e entregar resultados no tempo certo.",
    imageAlignment: "end",
  };

  const transparenciaIgualdadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/transparenciaIgualdade.png",
    title: "Transparência e igualdade Social",
    paragraph:
      "De acordo com as normas do Ministério do Trabalho, informamos que se encontra, disponível em nosso site, o Relatório de Transparência e Igualdade Salarial de Mulheres e Homens, referente ao 2º semestre 2024.",
    buttonLink: "https://www.t2mlab.com/DOCs/Relatorio-de-Igualdade-Salarial-e-de-Critérios-Remuneratorios_set24.pdf",
    buttonText: "Acessar relatório",
    buttonTarget: "_blank",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...solucoesQualidadeData} />
      <ImageWithCardTextBanner {...inovacaoData} />
      <ImageWithCardTextBanner {...praticasResponsivasData} />
      <SimpleCallBanner {...transparenciaIgualdadeData} />
    </div>
  );
};

export default PropostaDeValorPage;
