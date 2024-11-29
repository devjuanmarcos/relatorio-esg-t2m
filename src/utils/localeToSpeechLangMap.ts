export const localeToSpeechLangMap: { [key: string]: string } = {
  "zh-Hant": "zh-TW", // Chinês Tradicional
  "zh-Hans": "zh-CN", // Chinês Simplificado
  en: "en-US", // Inglês
  pt: "pt-BR", // Português
  es: "es-ES", // Espanhol
  ja: "ja-JP", // Japonês
  de: "de-DE", // Alemão
  fr: "fr-FR", // Francês
  it: "it-IT", // Italiano
  bn: "bn-BD", // Bengali
  hi: "hi-IN", // Hindi
  ru: "ru-RU", // Russo
  ko: "ko-KR", // Coreano
  vi: "vi-VN", // Vietnamita
  te: "te-IN", // Telugu
  yue: "zh-HK", // Cantonês
  mr: "mr-IN", // Marathi
  ta: "ta-IN", // Tamil
  tr: "tr-TR", // Turco
  ur: "ur-PK", // Urdu
  gu: "gu-IN", // Gujarati
  pl: "pl-PL", // Polonês
  uk: "uk-UA", // Ucraniano
  ms: "ms-MY", // Malaio
  kn: "kn-IN", // Kannada
  or: "or-IN", // Oriya
  pa: "pa-IN", // Punjabi
  ro: "ro-RO", // Romeno
  az: "az-AZ", // Azerbaijano
  fa: "fa-IR", // Persa
  my: "my-MM", // Birmanês
  th: "th-TH", // Tailandês
  nl: "nl-NL", // Holandês
  yo: "yo-NG", // Iorubá
  sd: "sd-IN", // Sindhi
};

export const getSpeechLangFromLocale = (locale: string): string => {
  // Tenta obter o idioma baseado na mapagem, se não encontra, retorna o padrão (pt-BR)
  return localeToSpeechLangMap[locale] || "pt-BR";
};
