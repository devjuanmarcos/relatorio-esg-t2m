import type { Metadata } from "next";
import "./globals.css";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { ThemeProvider } from "next-themes";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import { Noto_Sans, Open_Sans, Montserrat } from "next/font/google";
import { Footer } from "@/components/footer/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import CombinedHeader from "@/components/header/CombinedHeader";

const APP_NAME = "T2M - Test to Market";
const APP_DEFAULT_TITLE = "T2M - Test to Market";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "T2M - Test to Market";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const notosans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-notosans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  const fontClasses = `${opensans.variable} ${notosans.variable} ${montserrat.variable}`;
  return (
    <html
      className="transition-all h-full w-full scrollbar-thin scrollbar-webkit duration-200 ease-in-out"
      suppressHydrationWarning
      lang={params.locale}
    >
      <body className={fontClasses}>
        <NextIntlClientProvider messages={messages} locale={params.locale}>
          <WindowSizeProvider>
            <HtmlFontSizeProvider>
              <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
                <div className="header">
                  <CombinedHeader locale={params.locale} />
                </div>
                <main className="">{children}</main>
                <Footer />
              </ThemeProvider>
            </HtmlFontSizeProvider>
          </WindowSizeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
