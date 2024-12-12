import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./button";
import { Input } from "./input";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { FaSearch, FaTimes } from "react-icons/fa"; // Importando ícones de pesquisa e limpar
import { Calendar } from "lucide-react";

type Category =
  | "mulher"
  | "racial"
  | "lgbtqiapn+"
  | "diversidade funcional"
  | "etária"
  | "corpo"
  | "ambiental"
  | "filantropica";

interface CategoryRecord {
  imageUrl: string;
  imageAlt: string;
  title: string;
}

interface Event {
  title: string;
  date: string;
  category: Category;
}

const categoryImages: Record<Category, CategoryRecord> = {
  mulher: {
    imageUrl: "/img/temp/calendario/mulher.png",
    imageAlt: "Imagem referente à categoria Mulher.",
    title: "Mulher",
  },
  racial: {
    imageUrl: "/img/temp/calendario/racial.png",
    imageAlt: "Imagem referente à categoria Racial.",
    title: "Racial",
  },
  "lgbtqiapn+": {
    imageUrl: "/img/temp/calendario/lgbtqiapn+.png",
    imageAlt: "Imagem referente à categoria LGBTQIAPN+.",
    title: "LGBTQIAPN+",
  },
  "diversidade funcional": {
    imageUrl: "/img/temp/calendario/diversidade funcional.png",
    imageAlt: "Imagem referente à categoria Diversidade Funcional.",
    title: "Diversidade Funcional",
  },
  etária: {
    imageUrl: "/img/temp/calendario/etaria.png",
    imageAlt: "Imagem referente à categoria Etária.",
    title: "Etária",
  },
  corpo: {
    imageUrl: "/img/temp/calendario/corpo.png",
    imageAlt: "Imagem referente à categoria Corpo.",
    title: "Saúde e bem estar",
  },
  ambiental: {
    imageUrl: "/img/temp/calendario/ambiental.png",
    imageAlt: "Imagem referente à categoria Ambiental.",
    title: "Ambiental",
  },
  filantropica: {
    imageUrl: "/img/temp/calendario/filantrópica.png",
    imageAlt: "Imagem referente à categoria Filantrópica.",
    title: "Filantrópica",
  },
};

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const EventCard = ({ title, category, date }: { title: string; category: Category; date: string }) => {
  const eventDate = new Date(date);
  const day = eventDate.getDate();
  const formattedDate = eventDate.toLocaleDateString("pt-BR", { year: "numeric", month: "long", day: "numeric" });

  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${eventDate.toISOString().replace(/[-:]/g, "").split(".")[0]}/${eventDate.toISOString().replace(/[-:]/g, "").split(".")[0]}&details=${encodeURIComponent(
    "Evento relacionado à categoria " + category
  )}`;

  const categoryData = categoryImages[category]; // Pegando os dados da categoria

  return (
    <div className="grid grid-cols-3 min-h-40 items-center p-4 border rounded-lg shadow-md hover:shadow-lg transition relative  ">
      <div className="flex z-30 bg-background col-span-3 sm:col-span-2">
        <span className="hidden 2sm:flow-root text-[3.75rem] mr-4 font-bold min-w-[4.25rem] text-center">{day}</span>
        {/* Exibindo o dia do evento */}
        <div>
          <div className="text-sm  font-semibold">{categoryData.title}</div> {/* Exibindo o título da categoria */}
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="">{formattedDate}</p>
          <div className="flex items-center mt-2">
            <Link
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "link", size: "link" })}
            >
              Adicionar ao Google Agenda
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:flex absolute w-32 h-40 aspect-square z-10 right-0">
        <Image
          src={categoryData.imageUrl} // Usando a imagem associada à categoria
          alt={categoryData.imageAlt} // Usando o texto alternativo da categoria
          width={300}
          height={300}
          objectFit="cover"
          className="w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

const AcordionCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>("Janeiro");
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  // Filtra os eventos com base no mês selecionado ou pela pesquisa
  const filteredEvents = events.filter((event) => {
    // Se houver algo no campo de pesquisa, ignora o filtro do mês
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());

    if (searchQuery) {
      // Se houver pesquisa, apenas filtra pela pesquisa
      return matchesSearch;
    } else {
      // Caso contrário, filtra tanto pelo mês quanto pela pesquisa (que estará vazia)
      const eventMonth = new Date(event.date).toLocaleString("pt-BR", { month: "long" }).toLowerCase();
      const matchesMonth = selectedMonth ? eventMonth === selectedMonth.toLowerCase() : true;
      return matchesMonth && matchesSearch;
    }
  });

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col px-2 lg:px-12 ">
      <div className="flex items-start gap-4 w-full px-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <span
              className="flex gap-2 items-center h-10 border-primary bg-background text-base 
            py-2 px-4 border rounded-lg cursor-pointer "
            >
              <Calendar className="text-primary w-4 h-4 " />
              {selectedMonth || "Selecione um mês"}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-[12.5rem] p-0">
            <Command>
              <CommandInput placeholder={"Escolha um mês"} />
              <CommandList>
                <CommandEmpty>Escolha um mês</CommandEmpty>
                <CommandGroup>
                  {months.map((month) => (
                    <CommandItem
                      key={month}
                      value={month}
                      onSelect={() => {
                        setSelectedMonth(month);
                        setOpen(false);
                      }}
                    >
                      <div className="flex w-full justify-between">{month}</div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Campo de pesquisa com ícones */}
        <div className="relative w-full max-w-[25rem]">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            value={searchQuery}
            onChange={(e: any) => setSearchQuery(e.target.value)}
            placeholder="Buscar eventos"
            className="w-full py-2 pl-10 pr-6 border border-primary rounded-lg"
          />
          {searchQuery && (
            <FaTimes
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={clearSearch}
            />
          )}
        </div>
      </div>
      <div className="w-full p-4 ">
        {selectedMonth && !searchQuery && (
          <h2 className="text-2xl font-bold mb-6">Calendário ESG - Eventos de {selectedMonth}</h2>
        )}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event, index) => (
              <EventCard key={index} title={event.title} category={event.category} date={event.date} />
            ))
          ) : (
            <p className="">Nenhum evento encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcordionCalendar;

const events: Event[] = [
  // Janeiro
  { title: "Dia Mundial da Cultura Africana e Afrodescendente", date: "2025-01-24", category: "racial" },
  { title: "Dia Nacional da Visibilidade Trans", date: "2025-01-29", category: "lgbtqiapn+" },
  { title: "Dia Mundial do Braille", date: "2025-01-04", category: "diversidade funcional" },
  { title: "Dia Nacional do Aposentado", date: "2025-01-24", category: "etária" },

  // Fevereiro
  { title: "Dia Internacional de Mulheres e Meninas na Ciência", date: "2025-02-11", category: "mulher" },
  { title: "Dia Mundial das Doenças Raras", date: "2025-02-29", category: "diversidade funcional" },

  // Março
  { title: "Dia Internacional da Mulher", date: "2025-03-08", category: "mulher" },
  { title: "Dia Mundial da Luta Contra a Discriminação Racial", date: "2025-03-21", category: "racial" },
  { title: "Dia Internacional da Visibilidade Trans", date: "2025-03-31", category: "lgbtqiapn+" },
  { title: "Dia Internacional da Síndrome de Down", date: "2025-03-21", category: "diversidade funcional" },
  { title: "Dia de Combate ao Sedentarismo", date: "2025-03-10", category: "corpo" },
  { title: "Dia Nacional da Saúde e da Nutrição", date: "2025-03-31", category: "corpo" },
  { title: "Dia Nacional do Cuidador de Idosos", date: "2025-03-20", category: "etária" },
  { title: "Dia Mundial da Água", date: "2025-03-22", category: "ambiental" },

  // Abril
  { title: "Dia Nacional da Mulher", date: "2025-04-30", category: "mulher" },
  { title: "Dia dos Povos Indígenas", date: "2025-04-19", category: "racial" },
  { title: "Dia Internacional da Assexualidade", date: "2025-04-06", category: "lgbtqiapn+" },
  { title: "Dia do Transtorno do Espectro Autista", date: "2025-04-02", category: "diversidade funcional" },
  { title: "Dia Mundial da Atividade Física", date: "2025-04-06", category: "corpo" },
  { title: "Dia Mundial da Saúde", date: "2025-04-07", category: "corpo" },

  // Maio
  { title: "Dia Internacional de Luta pela Saúde da Mulher", date: "2025-05-28", category: "mulher" },
  { title: "Dia Nacional da Luta Contra o Racismo", date: "2025-05-13", category: "racial" },
  { title: "Dia Internacional contra a Homofobia", date: "2025-05-17", category: "lgbtqiapn+" },
  { title: "Dia Nacional da Luta Antimanicomial", date: "2025-05-18", category: "diversidade funcional" },

  // Junho
  { title: "Dia de Luta por uma Educação Não-sexista e sem Discriminação", date: "2025-06-21", category: "mulher" },
  { title: "Dia Internacional do Orgulho LGBTI+", date: "2025-06-28", category: "lgbtqiapn+" },
  { title: "Dia Nacional do Teste do Pezinho", date: "2025-06-06", category: "diversidade funcional" },
  {
    title: "Dia Nacional de Luta Contra a Esclerose Lateral Amiotrófica (ELA)",
    date: "2025-06-21",
    category: "diversidade funcional",
  },
  {
    title: "Dia Mundial de Conscientização da Violência Contra a Pessoa Idosa",
    date: "2025-06-15",
    category: "etária",
  },
  { title: "Dia da Imunização", date: "2025-06-09", category: "corpo" },
  { title: "Dia Mundial do Refugiado", date: "2025-06-20", category: "ambiental" },
  { title: "Dia Mundial do Meio Ambiente", date: "2025-06-05", category: "ambiental" },

  // Julho
  { title: "Dia Internacional da Mulher Negra Latino-americana e Caribenha", date: "2025-07-25", category: "mulher" },
  { title: "Dia Nacional de Combate à Discriminação Racial", date: "2025-07-03", category: "racial" },
  { title: "Dia do Intérprete de Libras", date: "2025-07-26", category: "diversidade funcional" },
  {
    title: "Dia Nacional de Prevenção de Acidentes de Trabalho",
    date: "2025-07-27",
    category: "diversidade funcional",
  },

  // Agosto
  { title: "Sanção da Lei nº 11.340/06 (Maria da Penha)", date: "2025-08-07", category: "mulher" },
  { title: "Dia Internacional dos Povos Indígenas", date: "2025-08-09", category: "racial" },
  { title: "Dia Nacional do Orgulho Lésbico", date: "2025-08-19", category: "lgbtqiapn+" },
  {
    title: "Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla",
    date: "2025-08-21",
    category: "diversidade funcional",
  },
  { title: "Dia Nacional do Voluntariado", date: "2025-08-28", category: "filantropica" },

  // Setembro
  { title: "Dia Internacional de Ação pela Igualdade da Mulher", date: "2025-09-06", category: "mulher" },
  { title: "Dia Internacional da Visibilidade Bissexual", date: "2025-09-23", category: "lgbtqiapn+" },
  { title: "Dia Nacional da Luta das Pessoas com Deficiência", date: "2025-09-21", category: "diversidade funcional" },
  { title: "Dia do Surdo", date: "2025-09-21", category: "diversidade funcional" },
  { title: "Dia Contra a Gordofobia", date: "2025-09-10", category: "corpo" },
  { title: "Dia da Árvore", date: "2025-09-21", category: "ambiental" },
  { title: "Dia Mundial sem Carro", date: "2025-09-22", category: "ambiental" },

  // Outubro
  { title: "Dia Nacional de Luta contra a Violência à Mulher", date: "2025-10-10", category: "mulher" },
  { title: "Dia da Visibilidade Intersexual", date: "2025-10-26", category: "lgbtqiapn+" },
  { title: "Dia Nacional da Pessoa com Deficiência Física", date: "2025-10-11", category: "diversidade funcional" },
  {
    title: "Dia da Luta Contra o Preconceito às Pessoas com Nanismo",
    date: "2025-10-25",
    category: "diversidade funcional",
  },
  { title: "Dia Nacional e Internacional da Pessoa Idosa", date: "2025-10-01", category: "etária" },
  { title: "Dia Internacional para a Erradicação da Pobreza", date: "2025-10-17", category: "filantropica" },

  // Novembro
  { title: "Dia da Instituição do Direito ao Voto Feminino no Brasil", date: "2025-11-03", category: "mulher" },
  { title: "Dia da Consciência Negra", date: "2025-11-20", category: "racial" },
  { title: "Dia Nacional de Prevenção e Combate à Surdez", date: "2025-11-10", category: "diversidade funcional" },
  { title: "Dia Mundial e Nacional do Diabético", date: "2025-11-14", category: "diversidade funcional" },
  { title: "Dia Nacional do Doador de Sangue", date: "2025-11-25", category: "filantropica" },

  // Dezembro
  { title: "Dia da Pansexualidade", date: "2025-12-08", category: "lgbtqiapn+" },
  { title: "Dia Internacional da Pessoa com Deficiência", date: "2025-12-03", category: "diversidade funcional" },
  { title: "Dia dos Direitos Humanos", date: "2025-12-10", category: "filantropica" },
];
