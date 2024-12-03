"use client";

import dynamic from "next/dynamic";
import React from "react";
import { DividingLine } from "../ui/dividingLine";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { ThreeTextCardsWithNumberCardBannerInterface } from "@banners/ThreeTextCardsWithNumberCardBanner";
import { ImageWithTopicsBannerInterface } from "@banners/ImageWithTopicsBanner";
import { FaAccessibleIcon } from "react-icons/fa6";
import { useIsMounted } from "@/hooks/useIsMounted";
import { Loading } from "../ui/Loading";
import {
  FaBalanceScale,
  FaCertificate,
  FaEye,
  FaRecycle,
  FaShoppingCart,
  FaCalendarAlt,
  FaHandsHelping,
  FaMapMarkedAlt,
  FaTree,
  FaUserTie,
  FaHandshake,
  FaHandHoldingHeart,
  FaPeopleCarry,
  FaGavel,
  FaChartLine,
  FaTruckLoading,
  FaHands,
  FaGift,
  FaLeaf,
  FaUsers,
  FaBuilding,
  FaBookOpen,
  FaTint,
  FaLightbulb,
  FaHeartbeat,
  FaBriefcase,
  FaEnvelope,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { MdBusinessCenter } from "react-icons/md";

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

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const HomePage: React.FC = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/final/impactoSocial.jpg",
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
    buttonLink: "/mensagem-do-nosso-ceo",
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
    imageUrl: "/img/final/materialidade.jpg",
    title: "Processo de materialidade",
    paragraph:
      "Mantemos um relacionamento constante e transparente com todas as nossas partes interessadas, de indivíduos a organizações, para que possamos entender suas expectativas e preocupações e traduzi-las em informações de valor estratégico para auxiliar a gestão de nossos negócios. ",
  };

  const partesInteressadasData: IconsCardsBannerInterface = {
    title: "Partes Interessadas",
    paragraph:
      "A T2M valoriza a colaboração com todas as partes interessadas para promover inovação, transparência e soluções de impacto positivo. Estabelecemos canais de diálogo e iniciativas que refletem o compromisso com nossos valores e objetivos estratégicos.",
    icons: [
      {
        id: 1,
        title: "Colaboradores",
        paragraph:
          "Programas de capacitação contínua, pesquisa de clima organizacional, encontros de alinhamento estratégico e workshops para colaboradores.",
        icon: FaUserTie,
      },
      {
        id: 2,
        title: "Clientes",
        paragraph:
          "Reuniões de acompanhamento e apresentação de resultados, suporte dedicado para resolver questões e aprimorar os serviços.",
        icon: FaHandshake,
      },
      {
        id: 3,
        title: "Parceiros estratégicos",
        paragraph:
          "Acordos de colaboração para projetos de impacto, participação em eventos de mercado, palestras e conferências, além de encontros periódicos para fortalecer parcerias e alianças estratégicas.",
        icon: FaHandHoldingHeart,
      },
      {
        id: 4,
        title: "Comunidade",
        paragraph:
          "Iniciativas de responsabilidade social, participação em eventos locais, apoio a ONGs e projetos comunitários, promovendo impacto positivo e sustentável nas áreas em que atuamos com eficiência.",
        icon: FaPeopleCarry,
      },
      {
        id: 5,
        title: "Governança e compliance",
        paragraph:
          "Alinhamento estratégico com regulamentações, políticas robustas de compliance e interações contínuas com entidades governamentais e reguladoras do setor. Certificações ISO 37101 e ISO 37301, além de práticas sólidas de antissuborno e adesão a um rigoroso código de ética.",
        icon: FaGavel,
      },
      {
        id: 6,
        title: "Diversidade e equidade",
        paragraph:
          "Promoção de um ambiente inclusivo por meio de iniciativas que valorizam a diversidade cultural, social e de gênero. Políticas para equiparar oportunidades, incentivar a equidade e garantir respeito mútuo, construindo uma cultura organizacional sustentável e plural.",
        icon: FaBalanceScale,
      },
    ],

    type: "center",
  };

  const metodologiaData: SimpleCallBannerInterface = {
    alignment: "end",
    topTitle: "Metodologia",
    title: "Como definimos o conteúdo do relatório?",
    paragraph:
      "Anualmente, conduzimos um exercício de materialidade para compreender as perspectivas das partes interessadas sobre os temas ambientais, sociais e econômicos mais relevantes para a gestão sustentável, identificando também oportunidades para promover aprendizado e incentivar o engajamento com as melhores práticas.",
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
  };

  const greenwashingDesenvolvimentoSustentavelData: NumberCardsBannerInterface = {
    alignment: "center",
    topTitle: "Greenwashing x Desenvolvimento Sustentável",
    title: "A verdade por trás das práticas de sustentabilidade",
    paragraph:
      "Muitas empresas utilizam práticas de greenwashing, apresentando iniciativas ambientais superficiais sem mudar realmente seus processos, o que prejudica a transparência e desorienta consumidores e investidores.",
    extraButtonBottom: {
      buttonLink:
        "https://www.t2mlab.com/greenwashing-x-desenvolvimento-sustentavel-a-verdade-por-tras-das-praticas-de-sustentabilidade/",
      buttonTarget: "_blank",
      buttonText: "Continue lendo o artigo no nosso site oficial",
    },
    numberCards: [
      {
        title: "Impacto Ambiental Real",
        icon: FaTree,
        paragraph:
          "Empresas comprometidas com o desenvolvimento sustentável realizam mudanças reais, como a redução das emissões de carbono e o uso responsável dos recursos naturais, para causar impacto ambiental positivo.",
      },
      {
        title: "Transparência Corporativa",
        icon: FaEye,
        paragraph:
          "Para evitar greenwashing, é crucial que as empresas publiquem relatórios claros sobre suas ações e conquistas sustentáveis, com dados verificáveis e metas concretas.",
      },
      {
        title: "Consumo Consciente",
        icon: FaShoppingCart,
        paragraph:
          "Consumidores conscientes podem identificar práticas de greenwashing ao buscar marcas com compromissos sustentáveis comprovados, como o uso de materiais recicláveis e políticas de redução de desperdício.",
      },
      {
        title: "Certificações e Auditorias",
        icon: FaCertificate,
        paragraph:
          "A obtenção de certificações reconhecidas e auditorias externas ajuda a validar o compromisso das empresas com a sustentabilidade, oferecendo confiança aos consumidores e investidores.",
      },
      {
        title: "Economia Circular",
        icon: FaRecycle,
        paragraph:
          "A economia circular é uma alternativa ao modelo tradicional de 'descarte após o uso', incentivando as empresas a reciclar, reutilizar e reduzir os resíduos, promovendo uma abordagem sustentável e regenerativa.",
      },
      {
        title: "O Papel da Governança",
        icon: FaBalanceScale,
        paragraph:
          "A governança desempenha um papel fundamental no combate ao greenwashing, pois orienta as decisões empresariais para práticas responsáveis e alinhadas aos ODS, garantindo integridade e responsabilidade.",
      },
    ],
    type: "border",
  };

  const sustentabilidadeData: SimpleCallBannerInterface = {
    title: "Sustentabilidade",
    paragraph:
      "Estamos comprometidos em contribuir para o desenvolvimento sustentável por meio dos nossos negócios e operações, gerando valor delongo prazo para nossos clientes, funcionários, fornecedores, acionistas e a sociedade.",
    alignment: "end",
    imageUrl: "/img/temp/esg/plantar.jpg",
  };

  const movimentoRegenerativoData: NumberCardsBannerInterface = {
    ods: [11, 13, 15],
    title: "Movimento Regenerativo Tempo de Plantar",
    paragraph:
      "Ao apoiar projetos culturais e de plantação de árvores, como o Movimento Regenerativo Tempo de Plantar, fortalecemos o protagonismo das comunidades e promovemos o sentimento de pertencimento. Com o plantio de árvores, além de proteger o meio ambiente, criamos um legado duradouro, garantindo que as futuras gerações cresçam em um território que valoriza e preserva suas memórias e a natureza ao seu redor.",
    numberCards: [
      {
        title: "Movimento autogestionário",
        icon: FaHandsHelping,
        paragraph:
          "Anualmente, no período das chuvas (outubro a março), o movimento estimula a participação ativa das pessoas no plantio de árvores, criando uma conexão direta com a natureza e promovendo uma maior conscientização ambiental.",
      },
      {
        title: "Em dezembro de 2024",
        icon: FaCalendarAlt,
        paragraph:
          "Em dezembro de 2024, a T2M plantou 100 mudas no arboreto do Vale das Videiras. Este marco faz parte de um esforço contínuo para promover a restauração da vegetação nativa e a recuperação de áreas degradadas.",
      },
      {
        title: "A espectativa para 2025",
        icon: FaTree,
        paragraph:
          "Para 2025, a meta é dobrar o plantio de árvores em toda a cidade, com o apoio de todos os colaboradores. O objetivo é restaurar bosques nativos e espécies autóctones, com a participação ativa da comunidade e de iniciativas locais.",
      },
    ],
    type: "border",
  };

  const nossasCampanhasData: NumberCardsBannerInterface = {
    ods: [1, 3, 5, 8, 10],
    title: "Nossas campanhas",
    paragraph:
      "Além de oferecer testes automatizados de excelência, a T2M se orgulha em criar e produzir suas próprias campanhas",
    numberCards: [
      {
        title: "Gesto Solidário",
        icon: FaHands,
        paragraph:
          "Desde 2014, realizamos campanhas solidárias, como arrecadação de alimentos, roupas de frio, produtos de higiene e tampinhas plásticas trocadas por cadeiras de rodas, fraldas e bengalas. ",
      },
      {
        title: "Dia das Boas Ações",
        icon: FaGift,
        paragraph:
          "O DBA - Cuidando de Quem Cuida é um evento para mães e cuidadores, oferecendo cuidados estéticos, palestras e dicas de bem-estar, integrando o movimento global Dia das Boas Ações (DBA).",
      },
      {
        title: "Bioconecta",
        icon: MdBusinessCenter,
        paragraph:
          "A Bioconecta é uma feira de empregabilidade que oferece oportunidades de primeiro emprego, com foco em mães solteiras e pessoas com deficiência, promovendo inclusão e igualdade no mercado de trabalho.",
      },
    ],
    type: "border",
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
    <div className="flex flex-col mb-20 gap-[4.75rem] ">
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
      <NumberCardsBanner {...greenwashingDesenvolvimentoSustentavelData} />
      <SimpleCallBanner {...sustentabilidadeData} />
      <NumberCardsBanner {...movimentoRegenerativoData} />
      <NumberCardsBanner {...nossasCampanhasData} />
      <SimpleCallBanner {...matrizMaterialidadeData} />
      <ImageWithTopicsBanner {...matrizMaterialidadeTopicosData} />
    </div>
  );
};

export default HomePage;
