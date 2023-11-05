import LinkX from "./link-x";
import ImageX from "./image-x";
import data from "../lib/data";
import {
    useTranslation,
    useLanguageQuery,
    LanguageSwitcher,
} from "next-export-i18n";

export default function Hero({ darkMode }) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div className="sk-hero relative isolate">
            <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-32">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Empowering Communication, Enhancing Education</h1>
                    <p className="mt-10 text-lg leading-8 text-gray-200">
                        We specialize in crafting innovative learning applications through NLP-powered solutions. With a commitment to excellence and a focus on user-centric design, we're here to transform the way you learn and communicate.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <LinkX href={{pathname: "/about", query: query}}>
                            <a className="text-sm font-semibold leading-6 text-gray-500 dark:text-gray-200 hover:text-gray-800">
                            {t("learn_more")} <span aria-hidden="true">→</span>
                            </a>
                        </LinkX>
                    </div>
                </div>
            </div>
        </div>
    );
}