import clsx from "clsx";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning={true}>
      <body className={clsx(inter.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex h-auto flex-col">
            <NavBar />
            <div className="flex flex-col text-[#212529] justify-center items-center">
              <span className="mt-4 text-4xl font-medium">ANRI</span>
              <span className="text-xl">2006</span>
            </div>
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
