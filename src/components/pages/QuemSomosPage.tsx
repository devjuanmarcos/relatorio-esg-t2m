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
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import {
  FaCogs,
  FaEye,
  FaLaptop,
  FaRegCreditCard,
  FaShieldAlt,
  FaTachometerAlt,
  FaTools,
  FaUniversalAccess,
  FaUserCheck,
} from "react-icons/fa";

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
const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const QuemSomosPage: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/quemsomos.png",
    buttonLink: "https://www.t2mlab.com",
    buttonText: "Site oficial da empresa",
    buttonTarget: "_blank",
    title: "Quem somos?",
    paragraph:
      "Hoje, passados mais de 20 anos da  fundação  da T2M, somos uma empresa madura, com cerca de 300 funcionários, em constante processo de aprimoramento técnico,  reconhecida pela qualidade do nosso trabalho por importantes companhias do nosso portfólio de clientes.",
  };

  const trabalheConoscoData: ImageWithCardTextBannerInterface = {
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/final/trabalheConosco.jpg",
    title: "Segurança de trabalhar em uma empresa sólida, com mais de 20 anos de mercado",
    topTitle: "Trabalhe conosco",
    paragraph:
      "A T2M foi fundada em 2002 inicialmente como um bureau de testes de Software. Logo descobrimos que precisávamos avançar e passamos a verificar todas as etapas do desenvolvimento de um sistema e nos especializamos em qualidade de software.",
    buttonText: "info@t2mlab.com",
    buttonLink: "/contato",
    imageAlignment: "start",
  };

  const experienciasExtraordinariasData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/experienciasExtraordinarias.png",
    title: "Experiências extraordinárias e acessíveis para todos.",
    paragraph:
      "A T2M – Test to Market Ltda. é uma empresa brasileira, com mais de 20 anos de existência, especializada em assegurar excelência em desenvolvimento de software, através de testes rigorosos e acompanhamento detalhado de todas as demais etapas da construção de um projeto. Recentemente, ampliamos a nossa prestação de serviços, agregando privacidade e segurança de dados, acessibilidade digital e Business Agility, por meio de renomados parceiros nestes segmentos.",
  };

  const servicosExcelenciaData: IconsCardsBannerInterface = {
    title: "Como os nossos serviços de excelência podem ajudar a impulsionar seus negócios.",
    paragraph:
      "Saiba como podemos ampliar, significativamente, a eficácia, a qualidade e a segurança dos seus negócios e serviços, trazendo resultados superiores.",
    icons: [
      {
        id: 1,
        title: "Qualidade de Software",
        paragraph:
          "Nossas soluções em Qualidade de Software otimizam todas as etapas do desenvolvimento, garantindo eficiência, confiabilidade e a satisfação de nossos clientes.",
        icon: FaCogs,
      },
      {
        id: 2,
        title: "Privacidade e Segurança",
        paragraph:
          "Nosso foco é superar desafios de Segurança da Informação, oferecendo soluções consultivas para atender as necessidades específicas de cada cliente.",
        icon: FaShieldAlt,
      },
      {
        id: 3,
        title: "Acessibilidade Digital",
        paragraph:
          "Na T2M, buscamos a inclusão digital, promovendo acessibilidade e inovação para garantir um ambiente digital mais inclusivo e acessível para todos.",
        icon: FaUniversalAccess,
      },
      {
        id: 4,
        title: "Business Agility",
        paragraph:
          "Ajudamos empresas a se adaptarem rapidamente às mudanças de mercado, aproveitando oportunidades e melhorando a agilidade organizacional.",
        icon: FaTachometerAlt,
      },
    ],
    type: "start",
  };

  const iniciativasData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: "Iniciativas",
    title: "Nossas iniciativas e compromissos",
    paragraph:
      "Na T2M, nossas iniciativas e compromissos são fundamentados na busca contínua pela excelência e pelo impacto positivo em todas as áreas que atuamos. Estamos empenhados em promover a qualidade de vida dos nossos colaboradores, incentivar a inovação e garantir a inclusão digital em nossas soluções.",
    imageUrl: "/img/temp/iniciativas.png",
  };

  const qualidadeDeVidaData: ImageWithCardTextBannerInterface = {
    title: "Qualidade de Vida e Bem-Estar",
    paragraph:
      "A T2M mantém seu compromisso com o bem-estar de seus colaboradores e suas famílias, oferecendo um ambiente de trabalho saudável e equilibrado. Buscamos continuamente melhorar a qualidade de vida no dia a dia de nossos profissionais, promovendo opções de benefícios que atendem a diferentes necessidades, como flexibilidade de horário, apoio à saúde mental e programas de qualidade de vida.",
    imageAlt: "Mulher com casaco vermelho na natureza",
    imageUrl: "/img/temp/mulherCasacoVermelho.png",
    imageAlignment: "end",
  };

  const desenvolvimentoProfissionalData: ImageWithCardTextBannerInterface = {
    title: "Desenvolvimento Profissional e Inovação",
    paragraph:
      "Investimos no crescimento contínuo de nossa equipe por meio de treinamentos especializados e programas de capacitação. Incentivamos a inovação com a aplicação de metodologias ágeis e a exploração de novas tecnologias, garantindo que nossos profissionais estejam sempre na vanguarda das tendências de mercado e preparados para oferecer soluções inovadoras aos nossos clientes.",
    imageAlt: "Mulher usando óculos de realidade virtual",
    imageUrl: "/img/final/desenvolvimentoProfissional.jpg",
    imageAlignment: "start",
  };

  const acessibilidadeInclusao: ImageWithCardTextBannerInterface = {
    title: "Acessibilidade e Inclusão",
    paragraph:
      "Estamos comprometidos em promover a inclusão e acessibilidade digital em todas as nossas soluções. A T2M adota práticas que garantem que nossos produtos e serviços sejam acessíveis a todas as pessoas, independentemente de suas necessidades específicas, como a implementação de tecnologias de acessibilidade em aplicativos e sites, além de fomentar um ambiente de trabalho inclusivo, que respeita e valoriza a diversidade.",
    imageAlt: "Militar na cadeira de rodas junto com a sua família",
    imageUrl: "/img/final/acessibilidadeInclusao.jpeg",
    imageAlignment: "end",
  };

  const tresPilaresData: SimpleCallBannerInterface = {
    topTitle: "3 Pilares",
    title: "Nossos pilares estratégicos",
    paragraph:
      "A essência da T2M está fundamentada em uma visão clara, valores sólidos e uma missão inspiradora. Esses pilares norteiam todas as nossas ações, guiando nosso compromisso com a excelência, a inovação e a inclusão. Conheça abaixo os fundamentos que definem quem somos e como atuamos.",
    imageUrl: "/img/temp/3pilares.png",
    alignment: "start",
  };

  const quatroCardsMetodologiaData: ThreeTextCardsWithNumberCardBannerInterface = {
    textCards: [
      {
        topTitle: "Primeiro Pilar",
        title: "Visão",
        paragraph:
          "Ser referência nacional e internacional em qualidade de software, acessibilidade e segurança da informação, promovendo inovação tecnológica e contribuindo para o sucesso dos negócios de nossos clientes por meio de soluções independentes de tecnologia e metodologia.",
      },
      {
        topTitle: "Segundo Pilar",
        title: "Missão",
        paragraph:
          "Garantir que os produtos de nossos clientes atendam aos mais elevados padrões de qualidade, confiabilidade, acessibilidade e usabilidade, sempre respeitando os prazos e necessidades específicas de cada negócio, e capacitar continuamente profissionais para transformar o mercado de tecnologia.",
      },
      {
        topTitle: "Terceiro Pilar",
        title: "Valores",
        paragraph:
          "Na T2M, nosso compromisso é com a excelência, entregando serviços de alta qualidade respaldados por conhecimento técnico e experiência consolidada. Valorizamos a inovação, utilizando metodologias ágeis e tecnologias de ponta para transformar desafios em oportunidades. Atuamos com ética e isenção, garantindo decisões imparciais que priorizam os melhores interesses dos nossos clientes. Além disso, promovemos inclusão e sustentabilidade por meio da formação profissional, acessibilidade digital e práticas que impulsionam o desenvolvimento humano e tecnológico. Nosso comprometimento é focado nos resultados, respeitando prazos, confiabilidade e usabilidade, sempre em alinhamento com as necessidades dos nossos parceiros.",
      },
    ],
    // topTitle: "2024 em números",
    // numberCards: [
    //   {
    //     title: "971",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    //   {
    //     title: "972",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    //   {
    //     title: "973",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    //   {
    //     title: "974",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    //   {
    //     title: "975",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    //   {
    //     title: "976",
    //     paragraph: "BRASIL",
    //     country: "BR",
    //   },
    // ],
  };

  const importanciaTerceirizarTestesData: NumberCardsBannerInterface = {
    ods: [8, 9, 17],
    title: "A importância de terceirizar Testes de Qualidade de Software",
    paragraph:
      "A terceirização dos testes de qualidade de software é essencial em sistemas críticos, como os bancários, de controle aéreo e hospitalares, que exigem alta precisão e segurança.",
    numberCards: [
      {
        title: "Acesso a especialistas",
        icon: FaUserCheck,
        paragraph:
          "Empresas especializadas oferecem profissionais qualificados, garantindo testes mais profundos e o uso de práticas de ponta para assegurar a qualidade do software.",
      },
      {
        title: "Foco no core business",
        icon: FaLaptop,
        paragraph:
          "Com a terceirização, a equipe interna pode concentrar-se no desenvolvimento de novas funcionalidades, melhorando a produtividade e impulsionando o crescimento do negócio.",
      },
      {
        title: "Redução de custos e tempo",
        icon: FaRegCreditCard,
        paragraph:
          "Evitar a criação de equipes internas de testes reduz custos fixos e permite otimizar o investimento conforme a demanda, acelerando os processos de testes.",
      },
      {
        title: "Escalabilidade e flexibilidade",
        icon: FaCogs,
        paragraph:
          "Empresas terceirizadas conseguem ajustar a capacidade de testes conforme a demanda, atendendo picos e ajustando a escala conforme o lançamento de novos produtos.",
      },
      {
        title: "Imparcialidade e visão externa",
        icon: FaEye,
        paragraph:
          "Uma equipe externa traz uma visão imparcial do produto, ajudando a identificar falhas que uma equipe interna pode não perceber, melhorando a qualidade geral.",
      },
      {
        title: "Acesso a ferramentas e tecnologias avançadas",
        icon: FaTools,
        paragraph:
          "Empresas especializadas têm acesso a ferramentas de ponta para automação, testes de carga e outras práticas, evitando o alto custo de implementação interna.",
      },
    ],
    type: "border",
  };

  // const ondeAtuamos: SimpleCallBannerInterface = {
  //   topTitle: "Atuação",
  //   title: "Onde atuamos?",
  //   paragraph:
  //     "A T2M é uma empresa global, reconhecida por sua atuação em diversos países, oferecendo serviços de excelência em qualidade de software, privacidade e segurança da informação, acessibilidade digital, business agility e muito mais.",
  //   imageUrl: "/img/temp/ondeAtuamos.png",
  //   alignment: "end",
  // };

  // const paisesQuantidadeProjetos: NumberCardsBannerInterface = {
  //   topTitle: "Países e quantidades de projetos",
  //   numberCards: [
  //     {
  //       title: "971",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //     {
  //       title: "972",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //     {
  //       title: "973",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //     {
  //       title: "974",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //     {
  //       title: "975",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //     {
  //       title: "976",
  //       paragraph: "BRASIL",
  //       country: "BR",
  //     },
  //   ],
  // };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...trabalheConoscoData} />
      <DividingLine />
      <SimpleCallBanner {...experienciasExtraordinariasData} />
      <IconsCardsBanner {...servicosExcelenciaData} />
      <SimpleCallBanner {...iniciativasData} />
      <ImageWithCardTextBanner {...qualidadeDeVidaData} />
      <ImageWithCardTextBanner {...desenvolvimentoProfissionalData} />
      <ImageWithCardTextBanner {...acessibilidadeInclusao} />
      <SimpleCallBanner {...tresPilaresData} />
      <ThreeTextCardsWithNumberCardBanner {...quatroCardsMetodologiaData} />
      <DividingLine />
      <NumberCardsBanner {...importanciaTerceirizarTestesData} />
      {/* <SimpleCallBanner {...ondeAtuamos} />
      <NumberCardsBanner {...paisesQuantidadeProjetos} /> */}
    </div>
  );
};

export default QuemSomosPage;
