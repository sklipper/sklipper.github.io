import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import data from "../lib/data";
import LinkX from "../components/link-x";
import Hero from "../components/hero";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";
import { getPostsData } from "../lib/posts";
import Posts from "../components/posts";

export async function getStaticProps() {
  const postsData = getPostsData({
    page: 1,
    limit: 3,
  });
  return {
    props: {
      postsData,
    },
  };
}

export default function Home({ postsData, darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}`;
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

      <Layout darkMode={darkMode} className="with-bg">
        <Hero darkMode={darkMode} />
      </Layout>
    </>
  );
}
