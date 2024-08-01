import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import Image from "next/image";

const i18nNamespaces = ['home'];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (

    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main className="container flex-grow flex flex-col relative m-auto items-center py-10 px-24">
        <h1>{t('header')}</h1>
        
        <Link href="/about">{t('greeting')}</Link>

        <div className="grid md:grid-cols-2 mt-10">
          <div>
              <h2 className="text-xl font-bold">Next.js App Router with i18next (Tutorial)</h2>

              <p className="my-4">The next-i18n-router is a lightweight package to implement internationalized routing and locale detection specifically in App Router projects. It is a recommended resource in Next’s App Router docs since Next’s built-in internationalized routing feature was removed in the App Router.</p>

              <p className="my-4">next-i18n-router will prefix all of our paths with the current locale, except for our default locale which will still be available at the base path with no prefix.</p>

For example, if I have a page at /about , the paths would appear like so:

English: example.com/about

French: example.com/fr/about

Italian: example.com/it/about
          </div>
          <div>
            <Image src="/sysadmin.jpg" alt="admin" width={500} height={400} />
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
