"use client";

import dynamic from "next/dynamic";
import React from "react";
import { CallBannerInterface } from "@banners/CallBanner";
import { ImageWithCardTextBannerInterface } from "@banners/ImageWithCardTextBanner";
import { SimpleCallBannerInterface } from "@banners/SimpleCallBanner";
import { NumberCardsBannerInterface } from "../banners/NumberCardsBanner";
import { Loading } from "../ui/Loading";
import { Skeleton } from "../ui/skeleton";

const MemoizedCallBanner = dynamic(() => import("@/components/banners/CallBanner").then((mod) => mod.default), {
  loading: () => (
    <div className="h-screen flex items-center justify-center">
      <Loading size={100} speed={1.32} />
    </div>
  ),
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
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    import("@/components/banners/CallBanner");
  }, []);

  if (!isMounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loading size={100} speed={1.32} />
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-20 gap-[4.75rem]">
      {/* Ajustar todos os textos alt depois de trocar para as imagens finais */}
      <React.Suspense fallback={<Skeleton className="w-full aspect-[1440/572]" />}>
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
      <SimpleCallBanner {...normasCodigosLegislacoesData} />
      <ImageWithCardTextBanner {...normasCodigosLegislacoesTexto1Data} />
      <ImageWithCardTextBanner {...normasCodigosLegislacoesTexto2Data} />
      <ImageWithCardTextBanner {...normasCodigosLegislacoesTexto3Data} />
      <SimpleCallBanner {...comiteT2MData} />
      <ImageWithCardTextBanner {...comiteT2MTexto1Data} />
      <ImageWithCardTextBanner {...comiteT2MTexto2Data} />
      <SimpleCallBanner {...certificacoesPadroesInternacionaisData} />
      <ImageWithCardTextBanner {...certificacoesPadroesInternacionaisTexto1Data} />
      <ImageWithCardTextBanner {...certificacoesPadroesInternacionaisTexto2Data} />
      <SimpleCallBanner {...canaisDenunciaData} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto1Data} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto2Data} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto3Data} />
      <ImageWithCardTextBanner {...canaisDenunciaTexto4Data} />
      <SimpleCallBanner {...equidadeSalarialData} />
      <ImageWithCardTextBanner {...equidadeSalarialTexto1Data} />

      {/* Ajustar textos daqui pra baixo */}
      <SimpleCallBanner {...balancoGeralData} />
      <NumberCardsBanner {...numerosData} />
    </div>
  );
};

export default ESGPage;

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
  imageUrl: "/img/temp/esg/odsonu2.png",
  imageAlignment: "start",
  buttonText: "Quero fazer parte",
  buttonLink: "#",
  buttonTarget: "_blank",
  objectContain: true,
};

const gestaoResiduosData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/gestaoResiduos.jpg",
  topTitle: "Ambiental",
  title: "Gestão de Resíduos e Escolha de Materiais Sustentáveis",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: [
    "/img/ods/8.png",
    "/img/ods/10.png",
    "/img/ods/12.png",
    "/img/ods/13.png",
    "/img/ods/15.png",
    "/img/ods/16.png",
    "/img/ods/17.png",
  ],
};

const gestaoResiduosTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Nosso compromisso com o ESG é parte central de nossa estratégia, contribuindo para a redução dos impactos ambientais, o fortalecimento de práticas sociais inclusivas e a adoção de uma governança corporativa ética e responsável. Nosso esforço contínuo para integrar os ODS às operações fortalece nossa atuação sustentável, gerando valor para todas as partes interessadas.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/impactosAmbientais.jpg",
  imageAlignment: "end",
};

const contratosAssinadosData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/contratosAssinados.jpg",
  topTitle: "Ambiental",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  title: "Contratos Assinados Virtualmente",
  ods: ["/img/ods/12.png", "/img/ods/13.png", "/img/ods/15.png"],
};

const contratosAssinadosTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Como parte de nosso compromisso com a sustentabilidade, a T2M adotou uma política de digitalização de documentos e assinatura virtual de contratos, reduzindo significativamente a necessidade de impressão em papel. A transição para contratos digitais não só agiliza nossos processos como também preserva recursos naturais, diminuindo o consumo de papel, tinta e energia. Esta prática contribui diretamente para a redução do desmatamento e o uso sustentável dos recursos naturais. Ao longo do ano, essa prática resultou em uma expressiva redução de resíduos de papel, reforçando o compromisso da T2M com o meio ambiente e com uma gestão moderna e sustentável.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/digitalizacaoDocumentos.jpg",
  imageAlignment: "start",
};

const utilizacaoNuvemData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/nuvem.jpg",
  topTitle: "Ambiental",
  title: "Utilização de Nuvem, reduzindo o consumo de hardware",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: ["/img/ods/7.png", "/img/ods/9.png", "/img/ods/12.png", "/img/ods/13.png"],
};

const utilizacaoNuvemTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Na T2M, o uso das soluções em nuvem da Microsoft, como OneDrive, Azure e Teams, é essencial para reduzir o consumo de energia e a necessidade de novos hardwares físicos. Essas ferramentas diminuem a demanda por servidores físicos, que consomem muita energia e exigem manutenção. Com o objetivo da Microsoft de usar energia 100% renovável em seus datacenters até 2025, a T2M contribui para um futuro mais sustentável. Além disso, a nuvem oferece escalabilidade, eficiência, segurança e acessibilidade de dados, refletindo o compromisso da T2M com práticas tecnológicas sustentáveis e inovadoras.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/computacaoNuvem.jpg",
  imageAlignment: "end",
};

const consumoConscienteData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/consumoAgua.jpg",
  topTitle: "Ambiental",
  title: "Consumo consciente de Água",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: ["/img/ods/6.png", "/img/ods/12.png"],
};

const consumoConscienteTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "O consumo consciente de água é uma prioridade na T2M, e implementamos diversas práticas para reduzir o desperdício desse recurso vital. Além disso, promovemos campanhas internas de conscientização, incentivando nossos colaboradores a adotar hábitos responsáveis no uso de água tanto no ambiente de trabalho quanto em suas casas. Essa prática visa reduzir o consumo de água e contribuir para a preservação dos recursos hídricos, alinhando-se aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Com essas ações, buscamos minimizar nosso impacto ambiental e inspirar uma cultura de sustentabilidade entre nossos colaboradores.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/consumoConsciente.jpg",
  imageAlignment: "start",
};

const estimuloReducaoData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/veiculosCombustao.jpg",
  topTitle: "Ambiental",
  title: "Estímulo à redução do uso de veículos a combustão",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: ["/img/ods/3.png", "/img/ods/11.png", "/img/ods/12.png", "/img/ods/13.png"],
};

const estimuloReducaoTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M incentiva seus colaboradores a adotarem práticas de mobilidade mais sustentáveis, reduzindo o transito e a emissão de CO2 por veículos a combustão. Para facilitar essa transição, oferecemos incentivos para o uso de transporte público e compartilhado, esse estímulo à mobilidade sustentável reflete nosso compromisso em diminuir a emissão de gases de efeito estufa e reduzir nossa pegada de carbono. Além disso, promovemos a conscientização sobre os benefícios de uma mobilidade mais sustentável, contribuindo para o bem-estar dos colaboradores e para a preservação do meio ambiente.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/mobilidadeSustentavcel.jpg",
  imageAlignment: "end",
};

const cadeiaFornecedoresData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/meioambiente.jpg",
  topTitle: "Ambiental",
  title: "Cadeia de fornecedores comprometidos com o meio ambiente",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: ["/img/ods/9.png", "/img/ods/12.png", "/img/ods/13.png", "/img/ods/17.png"],
};

const cadeiaFornecedoresTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M preza por uma cadeia de fornecedores alinhada com seus valores de sustentabilidade, priorizando parcerias com empresas que adotam práticas ambientalmente responsáveis. Avaliamos criteriosamente nossos fornecedores para assegurar que eles compartilhem nosso compromisso com a preservação ambiental e com a redução de impactos negativos ao meio ambiente. Isso inclui fornecedores que adotam métodos sustentáveis em sua produção, utilizam materiais reciclados, implementam programas de redução de resíduos e cumprem com normas de responsabilidade ambiental. Ao integrar práticas de ESG em nossa cadeia de suprimentos, fortalecemos nosso compromisso com uma operação sustentável e ampliamos nosso impacto positivo ao influenciar outras organizações a adotarem práticas responsáveis",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/sustentabilidade.jpg",
  imageAlignment: "start",
};

const reciclagemMaterialData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/reciclagemBaterias.jpg",
  topTitle: "Ambiental",
  title: "Reciclagem de material eletrônico e baterias",
  icon: {
    icon: "/img/temp/esg/ambiental.png",
    iconAlt: "ícone referente ao tópico ambiental",
  },
  ods: ["/img/ods/6.png", "/img/ods/12.png", "/img/ods/13.png", "/img/ods/15.png"],
};

const reciclagemMaterialTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M adota práticas rigorosas de reciclagem de equipamentos eletrônicos e baterias, reconhecendo a importância do descarte adequado desses materiais para evitar impactos negativos ao meio ambiente. Os resíduos eletrônicos são enviados para empresas certificadas que garantem o tratamento correto e a reciclagem de componentes, contribuindo para a recuperação de materiais valiosos e a redução de resíduos tóxicos. Internamente, promovemos a conscientização sobre a importância da reciclagem de eletrônicos entre os colaboradores, incentivando o descarte adequado. Essa iniciativa reflete nosso compromisso com a economia circular, evitando a contaminação do solo e das águas e promovendo uma gestão de resíduos mais eficiente e responsável.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/lampada.jpg",
  imageAlignment: "end",
};

const patrocinadorIniciativasData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/capacitacaoProfissional.jpg",
  topTitle: "Social",
  icon: {
    icon: "/img/temp/esg/social.png",
    iconAlt: "ícone referente ao tópico social",
  },
  title: "Patrocinador de iniciativas de capacitação profissional",
  ods: ["/img/ods/4.png", "/img/ods/8.png", "/img/ods/10.png"],
};

const patrocinadorIniciativasTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M é um dos principais patrocinadores do Programa de Residência de Software do Serratec, que visa capacitar jovens em situação de vulnerabilidade econômica para carreiras na área de tecnologia. Além de patrocinar, a T2M disponibiliza funcionários para ministrarem aulas e monitorias, contribuindo ativamente para a formação dos residentes. A empresa também mantém uma parceria com a UFF na FEST (Fábrica Escola de Software e Teste), apoiando cursos essenciais como Product Owner, Scrum Master e Qualidade de Software. Essas ações reforçam o compromisso da T2M com a responsabilidade social e o desenvolvimento de talentos locais, promovendo uma economia mais inclusiva e sustentável.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/serratec.jpg",
  imageAlignment: "start",
};

const equipeGenteGestaoData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/mulheres.jpg",
  topTitle: "Social",
  icon: {
    icon: "/img/temp/esg/social.png",
    iconAlt: "ícone referente ao tópico social",
  },
  title: "Equipe de gente e gestão composta por mulheres",
  ods: ["/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
};

const equipeGenteGestaoTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "O time de Gente e Gestão da T2M é 100% composto por mulheres, evidenciando o forte compromisso da empresa com a diversidade e a inclusão. Além disso, cerca de 75% do time administrativo é formado por mulheres, pessoas com deficiência e pessoas pretas, reforçando a dedicação da T2M em promover um ambiente de trabalho plural e representativo. Esta equipe de Gente e Gestão desempenha um papel fundamental na construção de uma cultura organizacional acolhedora e igualitária, implementando políticas de desenvolvimento profissional e ações que valorizam a diversidade de perspectivas dentro da empresa. A T2M acredita que a inclusão é um pilar essencial para o sucesso de sua cultura organizacional, impulsionando a inovação e gerando um impacto social positivo.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/mulheres2.jpg",
  imageAlignment: "end",
};

const programaQualidadeVidaData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/final/esg/qualidadeVida2.png",
  topTitle: "Social",
  icon: {
    icon: "/img/temp/esg/social.png",
    iconAlt: "ícone referente ao tópico social",
  },
  title: "Programa de qualidade de vida",
  ods: ["/img/ods/3.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/12.png"],
};

const programaQualidadeVidaTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M promove o bem-estar de seus colaboradores por meio de seu Programa de Atividade Física, realizado todos os sábados. Esse programa visa melhorar a qualidade de vida e a saúde mental dos colaboradores, incentivando-os a adotar um estilo de vida mais saudável e ativo. As atividades são adaptadas para atender diferentes níveis de condicionamento, promovendo o engajamento e a integração entre os participantes. A T2M acredita que investir na saúde dos colaboradores contribui para um ambiente de trabalho mais produtivo e feliz.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/atividadeFisica.jpg",
  imageAlignment: "start",
};

const campanhasSolidariasData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/final/esg/campanhasSolidarias.png",
  topTitle: "Social",
  icon: {
    icon: "/img/temp/esg/social.png",
    iconAlt: "ícone referente ao tópico social",
  },
  title: "Campanhas solidárias",
  ods: ["/img/ods/1.png", "/img/ods/10.png"],
};

const campanhasSolidariasTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M promove, ao longo de todo o ano, a campanha Gesto Solidário, campanha para arrecadação de alimentos e roupas, destinados a instituições locais e pessoas em situação de rua. Durante o período de festas, organizamos também a campanha Adote sua Cartinha de Natal, especialmente voltada envio de presentes para crianças em situação de vulnerabilidade e com diversidade funcional, levando alegria e apoio as comunidades e instituições. A T2M incentiva ativamente seus colaboradores a participarem dessas ações, fortalecendo a cultura de solidariedade e engajamento social dentro da empresa. Esse apoio coletivo é essencial para o sucesso das campanhas e para ampliar nosso impacto positivo na comunidade.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/arrecadacaoAlimentos.jpg",
  imageAlignment: "end",
};

const voluntariadoApoioData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/final/esg/socialVoluntarioApoio.png",
  topTitle: "Social",
  icon: {
    icon: "/img/temp/esg/social.png",
    iconAlt: "ícone referente ao tópico social",
  },
  title: "Voluntariado e apoio a iniciativas de empregabilidade",
  ods: ["/img/ods/4.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
};

const voluntariadoApoioTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M tem um compromisso sólido com o voluntariado e o apoio à empregabilidade, participando ativamente de programas e iniciativas que promovem a inclusão social e o desenvolvimento de jovens talentos. A empresa colabora com feiras de emprego voltadas para pessoas em situação de vulnerabilidade, como mães solo, LGBTQIAP+, pessoas com diversidades  funcionais, refugiados, egressos do sistema prisional e jovens em busca do primeiro emprego. Além disso, a T2M incentiva seus colaboradores a se voluntariarem como palestrantes e instrutores em cursos preparatórios que abordam habilidades técnicas e comportamentais essenciais, preparando os participantes para se destacarem no mercado de trabalho.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/apoioEmpregabilidade.png",
  imageAlignment: "start",
};

const normasCodigosLegislacoesData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/legislacao.jpeg",
  topTitle: "Governança",
  icon: {
    icon: "/img/temp/esg/governanca.png",
    iconAlt: "ícone referente ao tópico governança",
  },
  title: "Normas, códigos e legislações internas e externas da T2M",
  ods: ["/img/ods/8.png", "/img/ods/10.png", "/img/ods/12.png", "/img/ods/16.png"],
};

const normasCodigosLegislacoesTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M, fundada no Brasil em 2002, atua com forte compromisso de transparência e conformidade com as normas, códigos e legislações aplicáveis tanto no contexto corporativo quanto nacional. Nossa normativa se estende a todos os colaboradores, parceiros e diretoria, orientando responsabilidades legais e compromissos éticos que sustentam as operações da T2M.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/legislacao2.jpeg",
  imageAlignment: "end",
};

const normasCodigosLegislacoesTexto2Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Nosso Código de Ética e Conduta, aliado às Políticas de Antissuborno, Compliance, e Diversidade e Inclusão, servem como guias de referência para condutas adequadas com clientes, fornecedores e parceiros. Esses documentos, além de promoverem padrões éticos, reduzem a probabilidade de ocorrências de condutas inadequadas.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/legislacao3.jpeg",
  imageAlignment: "start",
};

const normasCodigosLegislacoesTexto3Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Para reforçar o alinhamento com nossas diretrizes, todos os colaboradores devem periodicamente completar o Curso de Políticas Internas, disponível em nossa Intranet, onde são revisados valores, normas e políticas internas.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/legislacao4.jpeg",
  imageAlignment: "end",
};

const comiteT2MData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/comites.jpg",
  topTitle: "Governança",
  icon: {
    icon: "/img/temp/esg/governanca.png",
    iconAlt: "ícone referente ao tópico governança",
  },
  title: "Comitês da T2M",
  ods: ["/img/ods/3.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/16.png"],
};

const comiteT2MTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Compliance: Este comitê é responsável pela gestão independente e autônoma do Programa de Integridade da T2M, garantindo os garantindo os recursos necessários para assegurar a imparcialidade das práticas de compliance na empresa. Além de incentivar o reporte de suspeitas e violações, o comitê busca cultivar uma cultura de responsabilidade em todos os níveis, incentivando a prevenção e detecção de fraudes. O Compliance Officer, função essencial neste processo, possui autonomia e acesso direto à Alta Direção, bem como autoridade para gerenciar o Sistema de Antissuborno e Compliance da organização.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/compliance.jpg",
  imageAlignment: "start",
};

const comiteT2MTexto2Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "CIPA (Comissão Interna de Prevenção de Acidentes): Em cumprimento à NR-5, a CIPA da T2M tem a função de identificar e mitigar riscos no ambiente de trabalho, promover campanhas de conscientização e treinamentos, além de estar envolvido em questões de assédio, fortalecendo a cultura de segurança e prevenção entre nossos colaboradores. Atualmente, a comissão é composta por 10 membros, sendo 30% mulheres, o que reforça nosso compromisso com a diversidade e inclusão.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/prevencao.jpg",
  imageAlignment: "end",
};

const certificacoesPadroesInternacionaisData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/certificacoes.png",
  topTitle: "Governança",
  icon: {
    icon: "/img/temp/esg/governanca.png",
    iconAlt: "ícone referente ao tópico governança",
  },
  title: "Certificações e padrões internacionais",
  paragraph: "Além dos comitês, a T2M está alinhada com padrões internacionais de integridade e ética empresarial.",
  ods: ["/img/ods/3.png", "/img/ods/8.png", "/img/ods/12.png", "/img/ods/16.png"],
};

const certificacoesPadroesInternacionaisTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Contamos com as certificações ISO 37001:2017, que estabelece e aprimora O sistema de gestão antissuborno e promove uma cultura de transparência; e a ISO 37301:2021, que define os padrões para sistemas de compliance, assegurando conformidade com leis e regulamentações aplicáveis.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/verificado.jpg",
  imageAlignment: "end",
};

const certificacoesPadroesInternacionaisTexto2Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Essas certificações são um relfexo do nosso compromisso com práticas empresariais éticas, transparentes e responsáveis. Essas iniciativas demonstram o compromisso da T2M em manter um ambiente de trabalho seguro, ético e em conformidade com as melhores práticas do mercado.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/certificado2.jpeg",
  imageAlignment: "start",
};

const canaisDenunciaData: SimpleCallBannerInterface = {
  alignment: "end",
  imageUrl: "/img/temp/esg/canalDenuncia.jpg",
  topTitle: "Governança",
  icon: {
    icon: "/img/temp/esg/governanca.png",
    iconAlt: "ícone referente ao tópico governança",
  },
  title: "Canais de denúncias",
  ods: ["/img/ods/3.png", "/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png", "/img/ods/16.png"],
};

const canaisDenunciaTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "A T2M disponibiliza um Canal de Denúncias diretamente ligado ao Comitê de Ética, que recebe e analisa todas as denúncias enviadas, além de supervisionar a implementação, o monitoramento e a integridade do Programa de Compliance da empresa.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/canalDenuncia2.jpg",
  imageAlignment: "start",
};

const canaisDenunciaTexto2Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "As denúncias podem ser realizadas de forma anônima, através de um formulário de fácil acesso, garantindo confidencialidade e segurança para os denunciantes.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/anonimo.jpg",
  imageAlignment: "end",
};

const canaisDenunciaTexto3Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Além deste canal, também oferecemos um Canal de Denúncias específico da CIPA, direcionado para a comunicação de casos de assédio e outros incidentes relacionados à segurança e bem-estar no ambiente de trabalho.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/denuncia.jpeg",
  imageAlignment: "start",
};

const canaisDenunciaTexto4Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Toda informação pessoal compartilhada é tratada com rigoroso sigilo, assegurando a privacidade dos colaboradores. Ambos os canais têm como objetivo promover um ambiente seguro, ético e acolhedor para todos.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/sigilo.jpg",
  imageAlignment: "end",
};

const equidadeSalarialData: SimpleCallBannerInterface = {
  alignment: "start",
  imageUrl: "/img/temp/esg/equipeSalarial.jpg",
  topTitle: "Governança",
  icon: {
    icon: "/img/temp/esg/governanca.png",
    iconAlt: "ícone referente ao tópico governança",
  },
  title: "Equidade salarial",
  paragraph:
    "A T2M disponibiliza do Relatório de Transparência e Igualdade Salarial de Mulheres e Homens, relatório que reforça o compromisso com a justiça social.",
  ods: ["/img/ods/5.png", "/img/ods/8.png", "/img/ods/10.png"],
};

const equidadeSalarialTexto1Data: ImageWithCardTextBannerInterface = {
  paragraph:
    "Este relatório apresenta critérios de remuneração e ações para garantir diversidade, como a criação de um Plano de Cargos e Salários ou Plano de Carreira, políticas de contratação de mulheres (negras, com deficiência, em situação de violência, chefes de família, LGBTQIA+, indígenas) e políticas de promoção de mulheres para cargos de direção e gerência.",
  imageAlt: "Escritório da T2M",
  imageUrl: "/img/temp/esg/salarial.jpg",
  imageAlignment: "end",
};

const balancoGeralData: SimpleCallBannerInterface = {
  alignment: "start",
  topTitle: "Realizações",
  title: "Nosso balanço geral",
  imageUrl: "/img/temp/esg/balancoGeral.jpg",
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
