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

export default function About({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}/about`;

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

      <Layout title={t("about")} darkMode={darkMode}>
        <div className="flex flex-col flex-grow">
          <h1 className="mb-8">{t("about")}</h1>
          <div className="mb-8">
            <p className="mb-8">
              Established in October 2013 and officially registered as Pooyandegane Andishehaye Nozohoure Ayande Institute (Persian: موسسه پویندگان اندیشه های نوظهور آینده), in Rasht, Iran, our company has always centered its efforts on delivering Natural Language Processing (NLP) solutions in the domains of communication and education. From the beginning, our primary focus has been to leverage cutting-edge technology to enhance language learning and educational experiences, making them more effective and accessible for every user.
            </p>
            <p className="mb-8">
              Our proficiency in software development extends beyond our core NLP solutions for communication and education. We are equally dedicated to designing educational and serious mobile games, study helper applications, and a wide range of software solutions. Additionally, we offer sofware development services and consultancy to assist other companies in achieving their technological goals.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
