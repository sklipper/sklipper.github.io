import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import data from "../lib/data";
import LinkX from "../components/link-x";
import ProfileInfo from "../components/profile-info";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Contact({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}/contact`;

  return (
    <>
      <NextSeo
        title={t("site_title")}
        description={t("site_description")}
        canonical={url}
        openGraph={{
          type: "profile",
          site_name: t("site_name"),
          locale: query && query.lang === "fa" ? "fa_IR" : "en_US",
          url: url,
          title: t("site_title"),
          description: t("site_description"),
          images: [data.site.og.image1],
        }}
      />

      <Layout title={t("contact")} darkMode={darkMode}>
        <div className="flex flex-col flex-grow">
          <h1 className="mb-8">{t("contact")}</h1>
          <div className="">
            <p className="">
              Sklipper Software (Pooyandegane Andishehaye Nozohoure Ayande Institute)
            </p>
            <p className="mt-4">
              No. 34, Fajr Alley, Namjou St., Rasht
            </p>
            <p className="mt-4">
              (+98) 933 0643113
            </p>
            <p className="mt-0">
              (+98) 13 33367053
            </p>
            <p className="mt-4">
              sklipper.software@gmail.com
            </p>
            <div className="mt-8">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d594.7071898659284!2d49.58425881549075!3d37.26299676995393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1698957625750!5m2!1sen!2sde" width="400" height="300" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
