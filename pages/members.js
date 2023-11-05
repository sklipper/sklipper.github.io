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

export default function Members({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}/members`;

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

      <Layout title={t("members")} darkMode={darkMode}>
        <div className="flex flex-col flex-grow">
          <h1 className="mb-8">{t("members")}</h1>
          <div className="mb-8">
            <ProfileInfo member={data.mahjoob} avatar={false} />
          </div>
          <div className="mb-8">
            <ProfileInfo member={data.mirbostani} avatar={false} />
          </div>
          <div className="mb-8">
            <ProfileInfo member={data.nouri} avatar={false} />
          </div>
          <div className="mb-8">
            <ProfileInfo member={data.majidsabet} avatar={false} />
          </div>          
          <div className="mb-8">
            <ProfileInfo member={data.solmaznouri} avatar={false} />
          </div>
        </div>
      </Layout>
    </>
  );
}
