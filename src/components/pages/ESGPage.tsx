"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => <span>Carregando...</span>,
});

const SimpleCallBanner = dynamic(() =>
  import("@/components/banners/SimpleCallBanner").then((mod) => mod.SimpleCallBanner)
);

const ImageWithCardTextBanner = dynamic(() =>
  import("@/components/banners/ImageWithCardTextBanner").then((mod) => mod.ImageWithCardTextBanner)
);

const NumberCardsBanner = dynamic(() =>
  import("@/components/banners/NumberCardsBanner").then((mod) => mod.NumberCardsBanner)
);

const ESGPage: React.FC = () => {
  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  const callBannerData: CallBannerInterface = {
    imageUrl: "/img/temp/capacitandoComunidade.jpg",
    buttonLink: "https://www.t2mlab.com/nosso-blog/",
    buttonText: "Nosso blog",
    buttonTarget: "_blank",
    title: "Compromisso ESG",
    paragraph:
      "Este relatório apresenta as ações de impacto ambiental, social e de governança (ESG) implementadas por nossa empresa ao longo do último ano, destacando como essas iniciativas estão alinhadas aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.",
  };

  const oportunidadesInclusivasData: ImageWithCardTextBannerInterface = {
    topTitle: "Estratégia",
    title: "Nosso compromisso",
    paragraph:
      "Nosso compromisso com o ESG é parte central de nossa estratégia, contribuindo para a redução dos impactos ambientais, o fortalecimento de práticas sociais inclusivas e a adoção de uma governança corporativa ética e responsável. Nosso esforço contínuo para integrar os ODS às operações fortalece nossa atuação sustentável, gerando valor para todas as partes interessadas.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
    buttonText: "Quero fazer parte",
    buttonLink: "#",
    buttonTarget: "_blank",
  };

  const gestaoResiduosData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental",
    title: "Gestão de Resíduos e Escolha de Materiais Sustentáveis",
  };

  const gestaoResiduosTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "Nosso compromisso com o ESG é parte central de nossa estratégia, contribuindo para a redução dos impactos ambientais, o fortalecimento de práticas sociais inclusivas e a adoção de uma governança corporativa ética e responsável. Nosso esforço contínuo para integrar os ODS às operações fortalece nossa atuação sustentável, gerando valor para todas as partes interessadas.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const contratosAssinadosData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Contratos Assinados Virtualmente",
  };

  const contratosAssinadosTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "Como parte de nosso compromisso com a sustentabilidade, a T2M adotou uma política de digitalização de documentos e assinatura virtual de contratos, reduzindo significativamente a necessidade de impressão em papel. A transição para contratos digitais não só agiliza nossos processos como também preserva recursos naturais, diminuindo o consumo de papel, tinta e energia. Esta prática contribui diretamente para a redução do desmatamento e o uso sustentável dos recursos naturais. Ao longo do ano, essa prática resultou em uma expressiva redução de resíduos de papel, reforçando o compromisso da T2M com o meio ambiente e com uma gestão moderna e sustentável.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const utilizacaoNuvemData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Utilização de Nuvem, reduzindo o consumo de hardware",
  };

  const utilizacaoNuvemTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "Na T2M, a migração para a computação em nuvem faz parte de nossa estratégia para reduzir o consumo de energia e minimizar a necessidade de novos hardwares físicos. Com o uso de soluções em nuvem, diminuímos significativamente a demanda por servidores físicos, que exigem manutenção constante e consomem grande quantidade de energia elétrica. Essa abordagem reduz nossa pegada ambiental e promove uma operação mais eficiente, com maior escalabilidade e menor consumo de recursos. Além disso, a utilização de nuvem permite que nossas operações tenham uma continuidade robusta e segura, mesmo em situações de emergência, garantindo também que nossos dados estejam protegidos e acessíveis. A transição para a nuvem reflete nosso compromisso com práticas tecnológicas avançadas e sustentáveis, atendendo às demandas atuais sem comprometer os recursos das futuras gerações.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const consumoConscienteData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Consumo consciente de Água",
  };

  const consumoConscienteTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "O consumo consciente de água é uma prioridade na T2M, e implementamos diversas práticas para reduzir o desperdício desse recurso vital. Além disso, promovemos campanhas internas de conscientização, incentivando nossos colaboradores a adotar hábitos responsáveis no uso de água tanto no ambiente de trabalho quanto em suas casas. Essa prática visa reduzir o consumo de água e contribuir para a preservação dos recursos hídricos, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Com essas ações, buscamos minimizar nosso impacto ambiental e inspirar uma cultura de sustentabilidade entre nossos colaboradores.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const estimuloReducaoData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Estímulo à redução do uso de veículos a combustão",
  };

  const estimuloReducaoTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M incentiva seus colaboradores a adotarem práticas de mobilidade mais sustentáveis, reduzindo o transito e a emissão de CO2 por veículos a combustão. Para facilitar essa transição, oferecemos incentivos para o uso de transporte público e compartilhado, esse estímulo à mobilidade sustentável reflete nosso compromisso em diminuir a emissão de gases de efeito estufa e reduzir nossa pegada de carbono. Além disso, promovemos a conscientização sobre os benefícios de uma mobilidade mais sustentável, contribuindo para o bem-estar dos colaboradores e para a preservação do meio ambiente.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const cadeiaFornecedoresData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Cadeia de fornecedores comprometidos com o meio ambiente",
  };

  const cadeiaFornecedoresTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M preza por uma cadeia de fornecedores alinhada com seus valores de sustentabilidade, priorizando parcerias com empresas que adotam práticas ambientalmente responsáveis. Avaliamos criteriosamente nossos fornecedores para assegurar que eles compartilhem nosso compromisso com a preservação ambiental e com a redução de impactos negativos ao meio ambiente. Isso inclui fornecedores que adotam métodos sustentáveis em sua produção, utilizam materiais reciclados, implementam programas de redução de resíduos e cumprem com normas de responsabilidade ambiental. Ao integrar práticas de ESG em nossa cadeia de suprimentos, fortalecemos nosso compromisso com uma operação sustentável e ampliamos nosso impacto positivo ao influenciar outras organizações a adotarem práticas responsáveis",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const reciclagemMaterialData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Ambiental (e)",
    title: "Reciclagem de material eletrônico e baterias",
  };

  const reciclagemMaterialTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M adota práticas rigorosas de reciclagem de equipamentos eletrônicos e baterias, reconhecendo a importância do descarte adequado desses materiais para evitar impactos negativos ao meio ambiente. Os resíduos eletrônicos são enviados para empresas certificadas que garantem o tratamento correto e a reciclagem de componentes, contribuindo para a recuperação de materiais valiosos e a redução de resíduos tóxicos. Internamente, promovemos a conscientização sobre a importância da reciclagem de eletrônicos entre os colaboradores, incentivando o descarte adequado. Essa iniciativa reflete nosso compromisso com a economia circular, evitando a contaminação do solo e das águas e promovendo uma gestão de resíduos mais eficiente e responsável.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const patrocinadorIniciativasData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Social (e)",
    title: "Patrocinador de iniciativas de capacitação profissional",
  };

  const patrocinadorIniciativasTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M é um dos principais patrocinadores do Programa de Residência de Software do Serratec, que visa capacitar jovens em situação de vulnerabilidade econômica para carreiras na área de tecnologia. Além de patrocinar, a T2M disponibiliza funcionários para ministrarem aulas e monitorias, contribuindo ativamente para a formação dos residentes. A empresa também mantém uma parceria com a UFF na FEST (Fábrica Escola de Software e Teste), apoiando cursos essenciais como Product Owner, Scrum Master e Qualidade de Software. Essas ações reforçam o compromisso da T2M com a responsabilidade social e o desenvolvimento de talentos locais, promovendo uma economia mais inclusiva e sustentável.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const equipeGenteGestaoData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/patrocinador.jpg",
    topTitle: "Social (e)",
    title: "Equipe de gente e gestão composta por mulheres",
  };

  const equipeGenteGestaoTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "O time de Gente e Gestão da T2M é 100% composto por mulheres, evidenciando o forte compromisso da empresa com a diversidade e a inclusão. Além disso, cerca de 75% do time administrativo é formado por mulheres, pessoas com deficiência e pessoas pretas, reforçando a dedicação da T2M em promover um ambiente de trabalho plural e representativo. Esta equipe de Gente e Gestão desempenha um papel fundamental na construção de uma cultura organizacional acolhedora e igualitária, implementando políticas de desenvolvimento profissional e ações que valorizam a diversidade de perspectivas dentro da empresa. A T2M acredita que a inclusão é um pilar essencial para o sucesso de sua cultura organizacional, impulsionando a inovação e gerando um impacto social positivo.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const programaQualidadeVidaData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/qualidadeVida2.png",
    topTitle: "Social (e)",
    title: "Programa de qualidade de vida",
  };

  const programaQualidadeVidaTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M promove o bem-estar de seus colaboradores por meio de seu Programa de Atividade Física, realizado todos os sábados. Esse programa visa melhorar a qualidade de vida e a saúde mental dos colaboradores, incentivando-os a adotar um estilo de vida mais saudável e ativo. As atividades são adaptadas para atender diferentes níveis de condicionamento, promovendo o engajamento e a integração entre os participantes. A T2M acredita que investir na saúde dos colaboradores contribui para um ambiente de trabalho mais produtivo e feliz.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const campanhasSolidariasData: SimpleCallBannerInterface = {
    alignment: "start",
    imageUrl: "/img/temp/campanhasSolidarias.png",
    topTitle: "Social (e)",
    title: "Campanhas solidárias",
  };

  const campanhasSolidariasTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M promove, ao longo de todo o ano, a campanha Gesto Solidário, campanha para arrecadação de alimentos e roupas, destinados a instituições locais e pessoas em situação de rua. Durante o período de festas, organizamos também a campanha Adote sua Cartinha de Natal, especialmente voltada envio de presentes para crianças em situação de vulnerabilidade e com diversidade funcional, levando alegria e apoio as comunidades e instituições. A T2M incentiva ativamente seus colaboradores a participarem dessas ações, fortalecendo a cultura de solidariedade e engajamento social dentro da empresa. Esse apoio coletivo é essencial para o sucesso das campanhas e para ampliar nosso impacto positivo na comunidade.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "end",
  };

  const voluntariadoApoioData: SimpleCallBannerInterface = {
    alignment: "end",
    imageUrl: "/img/temp/socialVoluntarioApoio.png",
    topTitle: "Social (e)",
    title: "Voluntariado e apoio a iniciativas de empregabilidade",
  };

  const voluntariadoApoioTexto1Data: ImageWithCardTextBannerInterface = {
    paragraph:
      "A T2M tem um compromisso sólido com o voluntariado e o apoio à empregabilidade, participando ativamente de programas e iniciativas que promovem a inclusão social e o desenvolvimento de jovens talentos. A empresa colabora com feiras de emprego voltadas para pessoas em situação de vulnerabilidade, como mães solo, LGBTQIAP+, pessoas com diversidades  funcionais, refugiados, egressos do sistema prisional e jovens em busca do primeiro emprego. Além disso, a T2M incentiva seus colaboradores a se voluntariarem como palestrantes e instrutores em cursos preparatórios que abordam habilidades técnicas e comportamentais essenciais, preparando os participantes para se destacarem no mercado de trabalho.",
    imageAlt: "Escritório da T2M",
    imageUrl: "/img/temp/escritoriopretoebranco.png",
    imageAlignment: "start",
  };

  const balancoGeralData: SimpleCallBannerInterface = {
    alignment: "start",
    topTitle: "Realizações",
    title: "Nosso balanço geral",
    imageUrl: "/img/temp/patrocinador.jpg",
  };

  const numerosData: NumberCardsBannerInterface = {
    topTitle: "2024 em números",
    numberCards: [
      {
        title: "20",
        paragraph: "PAÍSES",
      },
      {
        title: "20",
        paragraph: "PAÍSES",
      },
      {
        title: "20",
        paragraph: "PAÍSES",
      },
      {
        title: "20",
        paragraph: "PAÍSES",
      },
      {
        title: "20",
        paragraph: "PAÍSES",
      },
      {
        title: "20",
        paragraph: "PAÍSES",
      },
    ],
  };

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      <React.Suspense>
        <MemoizedCallBanner {...callBannerData} />
      </React.Suspense>

      <ImageWithCardTextBanner {...oportunidadesInclusivasData} />
      <SimpleCallBanner {...gestaoResiduosData} />
      <ImageWithCardTextBanner {...gestaoResiduosTexto1Data} />
      <SimpleCallBanner {...contratosAssinadosData} />
      <ImageWithCardTextBanner {...contratosAssinadosTexto1Data} />
      <SimpleCallBanner {...utilizacaoNuvemData} />
      <ImageWithCardTextBanner {...utilizacaoNuvemTexto1Data} />
      <SimpleCallBanner {...consumoConscienteData} />
      <ImageWithCardTextBanner {...consumoConscienteTexto1Data} />
      <SimpleCallBanner {...estimuloReducaoData} />
      <ImageWithCardTextBanner {...estimuloReducaoTexto1Data} />
      <SimpleCallBanner {...cadeiaFornecedoresData} />
      <ImageWithCardTextBanner {...cadeiaFornecedoresTexto1Data} />
      <SimpleCallBanner {...reciclagemMaterialData} />
      <ImageWithCardTextBanner {...reciclagemMaterialTexto1Data} />
      <SimpleCallBanner {...patrocinadorIniciativasData} />
      <ImageWithCardTextBanner {...patrocinadorIniciativasTexto1Data} />
      <SimpleCallBanner {...equipeGenteGestaoData} />
      <ImageWithCardTextBanner {...equipeGenteGestaoTexto1Data} />
      <SimpleCallBanner {...programaQualidadeVidaData} />
      <ImageWithCardTextBanner {...programaQualidadeVidaTexto1Data} />
      <SimpleCallBanner {...campanhasSolidariasData} />
      <ImageWithCardTextBanner {...campanhasSolidariasTexto1Data} />
      <SimpleCallBanner {...voluntariadoApoioData} />
      <ImageWithCardTextBanner {...voluntariadoApoioTexto1Data} />
      <SimpleCallBanner {...balancoGeralData} />
      <NumberCardsBanner {...numerosData} />
    </div>
  );
};

export default ESGPage;
