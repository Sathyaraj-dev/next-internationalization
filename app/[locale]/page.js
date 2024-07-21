import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (

    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="container flex-grow flex flex-col relative m-auto items-center p-24">
        <h1>{t('header')}</h1>
        
        <Link href="/about">{t('greeting')}</Link>
        {/* <LanguageChanger /> */}
      </main>
    </TranslationsProvider>
    // <main className="container flex-grow flex flex-col relative m-auto items-center p-24">
    //   <div>
    //     <h1 className="text-2xl xl:text-4xl mb-3">{t("header")}</h1>
    //     <p className="text-lg">{t("greeting")}</p>
    //   </div>

    //   <Link href="/about">
    //       About page
    //   </Link>

    //   <div className="grid grid-cols-2">

    //   </div>
    // </main>
  );
}
