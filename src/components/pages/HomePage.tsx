"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { TwoCardsTextBannerInterface } from "@banners/TwoCardsTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { ImageWithTopicsBannerInterface } from "@banners/ImageWithTopicsBanner";
import { FaAccessibleIcon } from "react-icons/fa6";

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
const ImageWithTopicsBanner = dynamic(() =>
  import("@/components/banners/ImageWithTopicsBanner").then((mod) => mod.ImageWithTopicsBanner)
);

const HomePage: React.FC = () => {
  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/Frame3.png",
    buttonLink: "#",
    buttonText: "Baixe o Relatório de Impacto Social (PDF)",
    buttonTarget: "_blank",
    title: "Relatório de Impacto Social",
    paragraph:
      "Impacto Social e Desenvolvimento Sustentável que apresenta as ações e os compromissos da T2M com práticas de responsabilidade social, ambiental e de governança (ESG).",
  };

  const mensagemCeoData: ImageWithCardTextBannerInterface = {
    imageAlt: "Foto do Guilherme, CEO da T2M",
    imageUrl: "/img/temp/mensagemCeo.png",
    title: "Liderança inovadora.",
    topTitle: "Mensagem do nosso CEO",
    paragraph:
      "Este Relatório de Impacto Social e Desenvolvimento Sustentável de 2024 reflete nosso compromisso com a transparência e responsabilidade social na T2M. Ele serve como um canal fundamental para comunicar nossas ações e avanços em sustentabilidade, alinhando nossas práticas aos Objetivos de Desenvolvimento Sustentável da ONU e aos princípios de ESG.",
    buttonText: "Leia a mensagem do nosso CEO",
    buttonLink: "/mensagem-ceo",
    imageAlignment: "start",
  };

  const sobreRelatorioData: ImageWithCardTextBannerInterface = {
    title: "Sobre este relatório",
    paragraphs: [
      "Este Relatório de Impacto Social e Desenvolvimento Sustentável apresenta as ações e os compromissos da T2M com práticas de responsabilidade social, ambiental e de governança (ESG).",
      "Ele reflete nossos esforços para criar um impacto positivo em nossa comunidade, promover um ambiente de trabalho inclusivo e sustentável e minimizar nossa pegada ambiental. ",
      "Ao compartilhar nossas conquistas e desafios, este relatório reforça nosso compromisso com a transparência e com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU, além de guiar nossa evolução contínua em direção a um futuro mais sustentável.",
    ],
    imageAlt: "Foto das ODS da ONU",
    imageUrl: "/img/temp/odsonu.png",
    imageAlignment: "end",
    objectContain: true,
  };

  const processoMaterialidadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/Frame3.png",
    title: "Processo de materialidade",
    paragraph:
      "Mantemos um relacionamento constante e transparente com todas as nossas partes interessadas, de indivíduos a organizações, para que possamos entender suas expectativas e preocupações e traduzi-las em informações de valor estratégico para auxiliar a gestão de nossos negócios. ",
  };

  const partesInteressadasData: IconsCardsBannerInterface = {
    title: "Partes interessadas",
    paragraph:
      "Seguimos um processo interno para identificar e selecionar as referidas partes interessadas com base nos critérios de interação e impacto no negócio, e estabelecemos diferentes mecanismos de diálogo com cada parte interessada como pode ser visto a seguir.",
    icons: [
      {
        id: 1,
        title: "Colaboradores da Arcos Dourados",
        paragraph:
          "Pesquisas de Clima, Arcos Dorados Digital, AD Weekly, Rede Social Corporativa, Yammer, AD Podcasts, Encontros AD, E-mails, Portas Abertas -Portas Transparentes, Relatório de Impacto Social e Desenvolvimento Sustentável, Sites Arcos Dorados e Receita do Futuro, McProtegidos (Protocolos, Cartazes, Treinamentos)",
        icon: FaAccessibleIcon,
      },
      {
        id: 2,
        title: "Clientes",
        paragraph:
          "Conte-nos como foi sua experiência, Portas Abertas, Relatório de Impacto Social e Desenvolvimento Sustentável, Serviço de Atendimento ao Cliente, Site Arcos Dorados, Site Receita do Futuro, McProtegidos (Cartazes)",
        icon: FaAccessibleIcon,
      },
      {
        id: 3,
        title: "Mídia",
        paragraph:
          "Comunicados à imprensa, Entrevistas, Eventos de Relações Públicas, Relatório de Impacto Social e Desenvolvimento Sustentável, site Arcos Dorados, site Receita do Futuro, Demonstrativos Financeiros, Formulário 20-F",
        icon: FaAccessibleIcon,
      },
      {
        id: 4,
        title: "Comunidade (vizinhos ou representantes de ONGS)",
        paragraph:
          "Conte-nos como foi sua experiência, Portas Abertas, Relatório de Impacto Social e Desenvolvimento Sustentável, Site Arcos Dorados, Site Receita do Futuro",
        icon: FaAccessibleIcon,
      },
      {
        id: 5,
        title: "Entidades governamentais",
        paragraph:
          "Demonstrações Financeiras, Formulário 20-F, Relatório de Impacto Social e Desenvolvimento Sustentável, site Arcos Dorados",
        icon: FaAccessibleIcon,
      },
      {
        id: 6,
        title: "Acionistas, franqueados, entidades financeiras",
        paragraph:
          "Assembleia Geral de Acionistas, Formulário Anual 20-F, Relatório Anual de Impacto Social e Desenvolvimento Sustentável, Demonstrações Financeiras Trimestrais, Relatórios de Resultados Trimestrais, Conferências e Eventos Públicos Periódicos com Investidores, Comunicados Periódicos à Imprensa, Interações Contínuas com Analistas de Vendas, Site Arcos Dorados, Site Receita do Futuro",
        icon: FaAccessibleIcon,
      },
      {
        id: 7,
        title: "Fornecedores ou distribuidores",
        paragraph:
          "Reunião com fornecedores, Portal de Fornecedores, Portas Abertas, Relatório de Impacto Social e Desenvolvimento Sustentável, Sites Arcos Dorados e Receita do Futuro",
        icon: FaAccessibleIcon,
      },
    ],
    type: "center",
  };

  const metodologiaData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: "Metodologia",
    title: "Como definimos o conteúdo do relatório?",
    paragraph:
      "Conduzimos todos os anos um exercício de materialidade para averiguar os pontos de vista das partes interessadas sobre os tópicos ambientais, sociais e econômicos mais relevantes para a gestão sustentável, bem como aqueles que desejam aprender mais. O exercício é realizado de acordo com as recomendações das normas da Global Reporting Initiative e com base na materialidade definida pelos indicadores SASB para o setor de restaurantes.",
    imageUrl: "/img/temp/metodologia.png",
  };

  const quatroCardsMetodologiaData: ThreeTextCardsWithNumberCardBannerInterface = {
    textCards: [
      {
        topTitle: "Revisão",
        title: "Preferência da indústria e análise de questões materiais do período anterior",
        paragraph:
          "Decidimos incluir os tópicos 'Embalagem e reciclagem (Economia Circular)' e 'Ética e Integridade e combate à corrupção'. Outros tópicos materiais foram renomeados para definir com mais precisão o escopo de sua gestão.",
      },
      {
        topTitle: "Priorização",
        title: "Avaliação de questões materiais pelos tomadores da decisão da empresa",
        paragraph: "11 membros do conselho de administração participaram do processo de priorização.",
      },
      {
        topTitle: "Análise",
        title: "Apreciação de sugestões das partes interessadas",
        paragraph:
          "No processo de validação, perguntamos sobre as principais questões e preocupações que nossas partes interessadas sentiram que deveriam ser incluídas além das prioridades da Empresa. A maioria das respostas poderia ser categorizada em questões materiais já listadas, como embalagens recicláveis ou eliminação de canudos de plástico (Embalagem e reciclagem), segurança do alimento (Segurança do alimento), e reciclagem do óleo vegetal (Gestão responsável de recursos)",
      },
    ],
    topTitle: "Validação",
    title: "Consulta às partes interessadas da organização sobre questões materiais",
    numberCards: [
      {
        title: "971",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "972",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "973",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "974",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "975",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "976",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "977",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "978",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "979",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "970",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "911",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "922",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "933",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "944",
        paragraph: "BRASIL",
        country: "BR",
      },
      {
        title: "955",
        paragraph: "BRASIL",
        country: "BR",
      },
    ],
  };

  const matrizMaterialidadeData: SimpleCallBannerInterface = {
    alignment: "start",
    topTitle: "Relatório",
    title: "Matriz de materialidade",
    paragraph:
      "Este relatório foi elaborado com base nas questões materiais priorizadas pela Arcos Dorados e validadas junto às partes interessadas da Empresa.",
    imageUrl: "/img/temp/matrizmaterialidade.png",
  };

  const matrizMaterialidadeTopicosData: ImageWithTopicsBannerInterface = {
    captions: [
      {
        color: "bg-[#51BFCC]",
        title: "Compromisso com as Famílias",
      },
      {
        color: "bg-[#7ABA43]",
        title: "Oportunidade para os Jovens",
      },
      {
        color: "bg-[#ED883A]",
        title: "Governo",
      },
      {
        color: "bg-[#DC332E]",
        title: "Abastecimento Sustentável",
      },
      {
        color: "bg-[#2A6B73]",
        title: "Mudanças Climáticas",
      },
      {
        color: "bg-[#6B3114]",
        title: "Diversidade e Inclusão",
      },
      {
        color: "bg-[#FF0000]",
        title: "Economia Circular",
      },
    ],
    topics: [
      {
        color: "bg-[#4ABCD2]",
        number: 1,
        title: "Segurança Do Alimento",
        paragraph: "Externa",
      },
      {
        color: "bg-[#7CBB4A]",
        number: 2,
        title: "Direitos humanos e práticas trabalhistas justas",
        paragraph: "Externa/Interna",
      },
      {
        color: "bg-[#F08540]",
        number: 3,
        title: "Ética e integridade e combate à corrupção",
        paragraph: "Externa/Interna",
      },
      {
        color: "bg-[#7BBB47]",
        number: 4,
        title: "Emprego Jovem",
        paragraph: "Externa/Interna",
      },
      {
        color: "bg-[#7CB949]",
        number: 5,
        title: "Saúde e segurança de nossa gente",
        paragraph: "Interna",
      },
      {
        color: "bg-[#6C1653]",
        number: 6,
        title: "Embalagem e reciclagem (Economia Circular)",
        paragraph: "Externa",
      },
      {
        color: "bg-[#4FBCCD]",
        number: 7,
        title: "Nutrição e publicidade responsável",
        paragraph: "Externa",
      },
      {
        color: "bg-[#286C73]",
        number: 8,
        title: "Gestão responsável de recursos",
        paragraph: "Externa/Interna",
      },
      {
        color: "bg-[#6A311B]",
        number: 9,
        title: "Diversidade e inclusão",
        paragraph: "Externa/Interna",
      },
      {
        color: "bg-[#DD3031]",
        number: 10,
        title: "Abastecimento responsável",
        paragraph: "Externa",
      },
      {
        color: "bg-[#4BC1D4]",
        number: 11,
        title: "Apoio à comunidade local",
        paragraph: "Externa",
      },
      {
        color: "bg-[#DE2D34]",
        number: 12,
        title: "Criação de gado sustentável e livre de desmatamento",
        paragraph: "Externa",
      },
      {
        color: "bg-[#266C76]",
        number: 13,
        title: "Mudanças climáticas",
        paragraph: "Externa",
      },
    ],
    imageAlt: "Gráfico da matriz de materialidade da T2M",
    imageUrl: "/img/temp/graficomaterialidade.png",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>
      <ImageWithCardTextBanner {...mensagemCeoData} />
      <DividingLine />
      <ImageWithCardTextBanner {...sobreRelatorioData} />
      <SimpleCallBanner {...processoMaterialidadeData} />
      <IconsCardsBanner {...partesInteressadasData} />
      <SimpleCallBanner {...metodologiaData} />
      <ThreeTextCardsWithNumberCardBanner {...quatroCardsMetodologiaData} />
      <SimpleCallBanner {...matrizMaterialidadeData} />
      <ImageWithTopicsBanner {...matrizMaterialidadeTopicosData} />
    </div>
  );
};

export default HomePage;
