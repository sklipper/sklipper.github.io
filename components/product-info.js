import ImageX from "./image-x";

export default function ProductInfo({ image, imageAlt, title, subtitle, url }) {
    return (
        <div className="flex flex-col lg:flex-row items-center">
            <div className="flex flex-col">
                <a href={url} target="_blank" className="relative flex-shrink-0 w-72 h-72 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-4">
                    <ImageX
                        src={image}
                        alt={imageAlt}
                        layout="fill"
                        objectFit="cover"
                    />
                </a>
            </div>
            <div className="flex flex-col lg:ml-8 lg:mr-8 self-start">
                <h2 className="text-start pb-2">
                    <span className="font-bold text-2xl">
                        <a href={url}>{title}</a>  
                    </span>
                </h2>
                <h4 className="text-start pb-2">
                    <span className="text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </span>
                </h4>
                {/* https://www.aparat.com/v/ote8O */}
            </div>
        </div>
    );
}