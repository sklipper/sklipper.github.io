import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import data from "../lib/data";
import LinkX from "../components/link-x";
import ProductInfo from "../components/product-info";
import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

export default function Products({ darkMode }) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  const url = `${data.site.url}/products`;

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

      <Layout title={t("products")} darkMode={darkMode}>
        <div className="flex flex-col flex-grow">
          <h1>{t("products")}</h1>
          <div className="mt-8">
            <ProductInfo
              image="/products/persona-icon.png"
              imageAlt="Persona - Seeking Soulmate"
              title="Persona - Seeking Soulmate"
              subtitle="Persona is the mysterious world of undiscovered human nature. It is a doorway that opens to the inner world of oneself. In here you can find people who want to get to know themselves better, meet other opinions, and search for their best match! Persona is a role-playing game that helps you discover your real personality, create your ideal persona, express your feelings, needs, and wishes, and learn what others think about you."
              url="https://sklipper.com/persona/?lang=en"
            />
          </div>
          <div className="mt-8">
            <ProductInfo
              image="/products/vingo-icon.png"
              imageAlt="Vingo"
              title="Vingo"
              subtitle="A versatile and powerful study helper application designed to elevate your learning experience. This dynamic application combines features such as spaced repetition, Markdown note-taking, and voice recording, making it an indispensable companion for students and knowledge seekers alike. Seamlessly switch between English, German, and Persian with our embedded dictionary feature, and take control of your study materials with our innovative graph-based tags management system. Enhance your understanding and retention by adding audio, video, and images to your study cards, and let our auto card generation feature create flashcards from context effortlessly. With our study helper application, knowledge acquisition has never been more effective."
              url="https://github.com/mirbostani/vingo-app"
            />
          </div>
          <div className="mt-8">
            <ProductInfo
              image="/products/robustqa-icon.jpeg"
              imageAlt="RobustQA"
              title="RobustQA"
              subtitle="A Framework for Adversarial Text Generation Analysis on Question Answering Systems"
              url="https://github.com/mirbostani/RobustQA"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
