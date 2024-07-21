
import initTranslations from "../../i18n";

export default async function Page({ params: { locale } }) {
    const { t } = await initTranslations(locale, ["about"]);
    return (
        <>
        <h1>{t("header")}</h1>
        <h1>{t("greeting")}</h1>
        </>
    )
  }