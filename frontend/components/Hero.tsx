import { PortableText } from "@portabletext/react";
import { customComponents } from "./customComponents";
import { SanityImageAssetDocument } from "next-sanity";
import { client } from "../app/lib/client";
import { Herotypes } from "../app/types/heroTypes";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";

export default function Hero({ data }: Herotypes) {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

    return (
        <section className=" bg-gradient-to-r from-[rgba(192,191,201,0.2)] via-slate-100 to-[#f3dee5] px-5 sm:px-[10%] h-full">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <div className="flex-1 text-center sm:text-left">
                    <div className=" scale-90 sm:scale-125 text-base">
                        <PortableText value={data.content} components={customComponents} />
                    </div>
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full sm:w-fit scale-100 sm:scale-125 mb-36 mt-12">
                        {data.button.map((btnText, idx) => (
                            <button key={idx} className="bg-gray-800 text-white px-6 py-2 mt-8 sm:mt-0 rounded-full hover:bg-red-700">
                                {btnText}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex-1 mt-14 sm:mt-0">
                    <Image
                        loading="eager"
                        src={urlFor(data.homeImage).url()}
                        alt={data.title}
                        width={488}
                        height={501}
                        className="hidden sm:block ml-28 sm:ml-40 max-w-sm sm:max-w-full"
                    />
                </div>
            </div>
            <p className="text-justify mt-10 sm:mt-20 text-sm sm:text-2xl">
  {data.info}
</p>
  </section>
    );
}
