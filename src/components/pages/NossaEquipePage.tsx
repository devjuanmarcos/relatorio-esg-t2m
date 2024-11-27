"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { IconsCardsBannerInterface } from "@banners/IconsCardsBanner";
import { FaAccessibleIcon } from "react-icons/fa6";
import { Simple2TitleImageBannerInterface } from "@/components/banners/Simple2TitleImageBanner";
import { SimpleTextBannerInterface } from "@/components/banners/SimpleTextBanner";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const IconsCardsBanner = dynamic(() =>
  import("@/components/banners/IconsCardsBanner").then((mod) => mod.IconsCardsBanner)
);

const Simple2TitleImageBanner = dynamic(() =>
  import("@/components/banners/Simple2TitleImageBanner").then((mod) => mod.Simple2TitleImageBanner)
);

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const SimpleTextBanner = dynamic(() =>
  import("@/components/banners/SimpleTextBanner").then((mod) => mod.SimpleTextBanner)
);

const NossaEquipePage: React.FC = () => {
  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/nossaequipe.png",
    buttonLink: "https://www.t2mlab.com/trabalhe-conosco-2/",
    buttonText: "Quero fazer parte da equipe",
    buttonTarget: "_blank",
    title: "Nossa equipe",
    paragraph:
      "O sucesso de nossos projetos é impulsionado pela expertise e dedicação de nossa equipe. Formada por profissionais altamente capacitados e apaixonados pelo que fazem, nossa equipe está sempre pronta para enfrentar novos desafios, entregar soluções inovadoras e colaborar com nossos clientes para alcançar resultados excepcionais.",
  };

  const divisaoPorCategoriaData: IconsCardsBannerInterface = {
    title: "Divisão por categoria",
    paragraph:
      "Ampliando a eficácia, a qualidade e a segurança dos seus negócios e serviços, trazendo resultados superiores.",
    icons: [
      {
        id: 1,
        title: "Qualidadede Software",
        paragraph:
          "Nossas soluções abrangentes em Qualidade de Software otimizam cada etapa do desenvolvimento de seus projetos, garantindo eficiência, confiabilidade e satisfação do cliente.",
        icon: FaAccessibleIcon,
      },
      {
        id: 2,
        title: "Privacidade e Segurança de Dados",
        paragraph:
          "Nosso foco está em compreender e superar os desafios de Segurança da Informação, atendendo os clientes de forma consultiva.",
        icon: FaAccessibleIcon,
      },
      {
        id: 3,
        title: "Acessibilidade Digital",
        paragraph:
          "Na T2M, entendemos que a acessibilidade digital é um compromisso com a inclusão social e a inovação.",
        icon: FaAccessibleIcon,
      },
      {
        id: 4,
        title: "Business Agility",
        paragraph:
          "Nosso objetivo é ajudar nossos clientes a se adaptarem rapidamente às mudanças de mercado, para aproveitar as oportunidades emergentes.",
        icon: FaAccessibleIcon,
      },
    ],
    type: "start",
  };

  const compromissoComDiversidadeData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/biomob.png",
    title: "Compromisso com a diversidade e inclusão",
    paragraph:
      "Recentemente fechamos uma parceria com a BIOMOB, voltada para projetos sociais e serviços ligados à diversidade e inclusão, para aprimorar o nosso comportamento em relação a estes temas e à acessibilidade de forma geral.",
  };

  const ambienteExtremoValorData: IconsCardsBannerInterface = {
    title: "Um ambiente de extremo valor",
    paragraph:
      "Nosso compromisso é criar um ambiente onde todos se sintam valorizados, independentemente de sua origem, gênero, etnia, ou qualquer outra característica pessoal.",
    images: [
      {
        id: 1,
        title: "Gênero",
        paragraph: "Garantimos igualdade de oportunidades, reconhecendo a força de uma equipe equilibrada em gênero.",
        imageUrl: "/img/temp/genero.png",
        imageAlt: "ícone de gênero",
      },
      {
        id: 2,
        title: "Raça",
        paragraph:
          "Celebramos todas as etnias e trabalhamos para que nossa equipe seja um reflexo da pluralidade de nossa sociedade.",
        imageUrl: "/img/temp/raca.png",
        imageAlt: "ícone de raça",
      },
      {
        id: 3,
        title: "Idade",
        paragraph:
          "Respeitamos a sabedoria dos mais experientes e a energia dos mais jovens, entendendo que todos têm contribuições valiosas.",
        imageUrl: "/img/temp/idade.png",
        imageAlt: "ícone de idade",
      },
      {
        id: 5,
        title: "Diversidades Funcionais",
        paragraph:
          "Oferecemos um ambiente de trabalho acessível e inclusivo, reconhecendo as habilidades e talentos de pessoas com deficiência.",
        imageUrl: "/img/temp/diversidade.png",
        imageAlt: "ícone de diversidades funcionais",
      },
      {
        id: 6,
        title: "Acessibilidade",
        paragraph:
          "Tanto os nossos escritórios, quanto o nosso site são acessíveis para pessoas com limitações visuais, auditivas, físicas e cognitivas.",
        imageUrl: "/img/temp/acessibilidade.png",
        imageAlt: "ícone de acessibilidade",
      },
    ],
    type: "center",
  };

  const graficosDistribuicaoData: Simple2TitleImageBannerInterface = {
    firstImage: {
      title: "Diversidade de Gênero na Nossa Equipe",
      imageUrl: "/img/temp/grafico1.png",
      imageAlt: "Gráfico da diversidade de Gênero na Nossa Equipe",
    },
    secondImage: {
      title: "Diversidade de Gênero na Nossa Equipe",
      imageUrl: "/img/temp/grafico2.png",
      imageAlt: "Gráfico da distribuição por faixa etária",
    },
  };

  const propostaDeValorData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/propostaValor2.png",
    title: "Nossa proposta de valor para o funcionário",
    paragraph:
      "Na nossa empresa, acreditamos que o sucesso está diretamente ligado ao respeito, ética e inclusão em todos os aspectos do ambiente de trabalho.",
  };

  const culturaRespeitoData: ImageWithCardTextBannerInterface = {
    title: "Cultura de Respeito, Ética e Inclusão",
    paragraph:
      "Promovemos uma cultura de transparência e equidade, onde todos os colaboradores têm as mesmas oportunidades de crescimento e reconhecimento. Nosso compromisso com a diversidade e inclusão é refletido em práticas que garantem um espaço seguro e respeitoso, onde todos podem se expressar e contribuir com seu potencial máximo.",
    imageAlt: "Mulher com casaco vermelho na natureza",
    imageUrl: "/img/temp/mulherCasacoVermelho.png",
    imageAlignment: "end",
  };

  const beneficiosValorizamData: ImageWithCardTextBannerInterface = {
    title: "Acessibilidade e Inclusão",
    paragraph:
      "Além disso, oferecemos uma gama de benefícios que visam o bem-estar e qualidade de vida dos nossos colaboradores, como assistência médica e odontológica, auxílios diversos (home-office, alimentação, refeição e transporte), seguro de vida, Wellhub e plano de carreira.",
    imageAlt: "Mulher usando óculos de realidade virtual",
    imageUrl: "/img/temp/desenvolvimentoProfissional.png",
    imageAlignment: "start",
  };

  const direitosHumanosData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/direitosHumanos.png",
    topTitle: "Cultivar",
    title: "Direitos humanos e práticas trabalhistas justas",
    paragraph:
      "Estamos comprometidos em criar ambientes de trabalho inclusivos, onde todos têm as mesmas oportunidades de alcançar seu pleno potencial. Acreditamos que a promoção dos direitos humanos e a construção de espaços respeitosos são essenciais para a preservação da integridade de nossa marca e para o nosso sucesso contínuo.",
  };

  const compromissoDireitosHumanosData: SimpleTextBannerInterface = {
    title: "Compromisso com os Direitos Humanos e Normas Internacionais",
    paragraph:
      "Compromisso firme de respeito aos direitos humanos, alinhando nossas práticas aos princípios estabelecidos pela Declaração Universal dos Direitos Humanos e normas reconhecidas internacionalmente. Nossos valores estão fundamentados nos Princípios Orientadores das Nações Unidas sobre Empresas e Direitos Humanos, assim como na Carta Internacional dos Direitos Humanos e na Declaração da Organização Internacional do Trabalho (OIT) sobre Direitos Fundamentais no Trabalho. Essas diretrizes são incorporadas em nossas Normas de Conduta nos Negócios, que se aplicam igualmente a todos os colaboradores, fornecedores e parceiros da T2M, garantindo um ambiente de trabalho inclusivo, respeitoso e seguro.",
  };

  const garantiaAmbienteData: SimpleTextBannerInterface = {
    title: "Garantia de um Ambiente de Trabalho Seguro e Respeitoso",
    paragraph:
      "Compromisso firme de respeito aos direitos humanos, alinhando nossas práticas aos princípios estabelecidos pela Declaração Universal dos Direitos Humanos e normas reconhecidas internacionalmente. Nossos valores estão fundamentados nos Princípios Orientadores das Nações Unidas sobre Empresas e Direitos Humanos, assim como na Carta Internacional dos Direitos Humanos e na Declaração da Organização Internacional do Trabalho (OIT) sobre Direitos Fundamentais no Trabalho. Essas diretrizes são incorporadas em nossas Normas de Conduta nos Negócios, que se aplicam igualmente a todos os colaboradores, fornecedores e parceiros da T2M, garantindo um ambiente de trabalho inclusivo, respeitoso e seguro.",
  };

  const diversidadeInclusao: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/diversidadeInclusao.png",
    topTitle: "Nosso posicionamento",
    title: "Diversidade e inclusão",
    paragraph:
      "Comprometidos com a criação de um ambiente inclusivo onde a diversidade é um valor essencial. Acreditamos que a combinação de diferentes perspectivas, experiências e talentos fortalece a nossa cultura e nos impulsiona a alcançar novos horizontes.",
  };

  const diversidadeGeneroData: SimpleTextBannerInterface = {
    title: "Diversidade de Gênero",
    paragraph:
      "Na T2M, acreditamos que a igualdade de gênero é um fator crucial para o sucesso e a inovação. Trabalhamos para criar um ambiente em que homens, mulheres e pessoas não binárias tenham suas vozes ouvidas e seus talentos plenamente reconhecidos. Implementamos iniciativas voltadas à equidade, oferecendo as mesmas oportunidades de desenvolvimento e crescimento para todos, independentemente de seu gênero. Para nós, um ambiente equilibrado e justo é a base para soluções criativas e para a construção de um futuro mais inclusivo.",
  };

  const diversidadeSexualData: SimpleTextBannerInterface = {
    title: "Diversidade Sexual",
    paragraph:
      "O respeito à diversidade sexual é um dos alicerces da nossa cultura na T2M. Nos orgulhamos de promover um ambiente acolhedor e seguro para que colaboradores LGBTQIA+ possam expressar sua identidade com autenticidade. Mais do que combater o preconceito, celebramos a individualidade e incentivamos práticas que transformam a inclusão em um pilar estratégico. Acreditamos que, ao valorizar diferentes formas de amar e ser, fortalecemos nossa capacidade de colaborar e inovar como equipe.",
  };

  const diversidadeCulturalData: SimpleTextBannerInterface = {
    title: "Diversidade Cultural",
    paragraph:
      "Na T2M, abraçamos a riqueza cultural e histórica que a diversidade racial traz para a nossa empresa. Encaramos a pluralidade de raças e etnias como uma oportunidade de aprendizado e evolução. Com políticas firmes contra o racismo e ações proativas para garantir igualdade de oportunidades, trabalhamos para construir um ambiente onde cada indivíduo seja valorizado pelo que é, contribuindo com perspectivas únicas que nos tornam mais fortes como organização.",
  };

  const diversidadeRacialData: SimpleTextBannerInterface = {
    title: "Diversidade Racial",
    paragraph:
      "A diversidade racial na T2M é vista como uma riqueza que fortalece nosso ambiente de trabalho e amplia nossas perspectivas. Estamos comprometidos com a promoção de um ambiente que respeita, acolhe e valoriza todas as raças e etnias, reconhecendo a importância de diferentes experiências de vida para o desenvolvimento de soluções criativas e eficazes. Temos políticas claras contra qualquer forma de racismo e trabalhamos para garantir que todos os colaboradores, independentemente de sua origem racial, tenham as mesmas oportunidades de crescimento, sendo respeitados e valorizados por sua contribuição única para a empresa.",
  };

  const diversidadeDeficienciaData: SimpleTextBannerInterface = {
    title: "Diversidade para Pessoas com Deficiência",
    paragraph:
      "A inclusão de pessoas com deficiência é mais do que uma prioridade para a T2M; é um compromisso com a equidade e a acessibilidade. Adaptamos nossos espaços e processos para garantir que todos os nossos colaboradores possam atuar com autonomia e dignidade. Além disso, promovemos a conscientização interna para criar um ambiente verdadeiramente inclusivo, onde as habilidades de cada indivíduo são valorizadas e onde barreiras se transformam em pontes para o sucesso compartilhado.",
  };

  const saudeBemEstarData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/saudebemestar.png",
    topTitle: "Pilar",
    title: "Saúde e Bem-Estar",
    paragraph:
      "Se você valoriza um lugar onde seu bem-estar é uma prioridade, venha conhecer como cuidamos de nossa equipe para que ela se sinta apoiada e saudável em todos os aspectos da vida.",
  };

  const saudeBemEstarTextoData: SimpleTextBannerInterface = {
    title: "Saúde e Bem-estar",
    paragraph:
      "Na T2M, reconhecemos que a saúde e o bem-estar de nossos colaboradores são pilares para o crescimento sustentável da empresa e para o sucesso individual. Promovemos iniciativas que incentivam o cuidado integral, incluindo programas de saúde física e mental, assistência médica e odontológica, além de suporte psicológico para enfrentar os desafios do dia a dia. Criamos um ambiente que prioriza o equilíbrio entre vida profissional e pessoal, garantindo que cada colaborador tenha recursos para cultivar hábitos saudáveis e alcançar seus objetivos com qualidade de vida.",
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <IconsCardsBanner {...divisaoPorCategoriaData} />
      <SimpleCallBanner {...compromissoComDiversidadeData} />
      <IconsCardsBanner {...ambienteExtremoValorData} />
      <Simple2TitleImageBanner {...graficosDistribuicaoData} />
      <SimpleCallBanner {...propostaDeValorData} />
      <ImageWithCardTextBanner {...culturaRespeitoData} />
      <ImageWithCardTextBanner {...beneficiosValorizamData} />
      <SimpleCallBanner {...direitosHumanosData} />
      <SimpleTextBanner {...compromissoDireitosHumanosData} />
      <SimpleTextBanner {...garantiaAmbienteData} />
      <SimpleCallBanner {...diversidadeInclusao} />
      <SimpleTextBanner {...diversidadeGeneroData} />
      <SimpleTextBanner {...diversidadeSexualData} />
      <SimpleTextBanner {...diversidadeCulturalData} />
      <SimpleTextBanner {...diversidadeRacialData} />
      <SimpleTextBanner {...diversidadeDeficienciaData} />
      <SimpleCallBanner {...saudeBemEstarData} />
      <SimpleTextBanner {...saudeBemEstarTextoData} />
    </div>
  );
};

export default NossaEquipePage;
