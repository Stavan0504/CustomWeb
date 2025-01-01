import { PortableText } from "@portabletext/react";
import { customComponents } from "./customComponents";
import { SanityImageAssetDocument } from "next-sanity";
import { client } from "../lib/client";
import { Herotypes } from "../types/heroTypes";
import imageUrlBuilder from '@sanity/image-url';

export default function Hero({ data }:Herotypes) {
        
        const builder = imageUrlBuilder(client);
        const urlFor = (source: SanityImageAssetDocument) =>
          builder.image(source);
        
    return (
        <section className="hero bg-slate-200  overflow-x-hidden py-20 px-56 flex items-center justify-between h-screen relative">
            <div className="hero__content max-w-lg">
                <div className="text-blue-900 scale-125">
                    <PortableText value={data.content} components={customComponents} />
                </div>
                <div className="flex space-x-4 scale-125 mb-36">
                    {data.button.map((btnText, idx) => (
                        <button key={idx} className="bg-gray-800 text-white px-6 py-3 mt-8 rounded-full hover:bg-red-700">
                            {btnText}
                        </button>
                    ))}
                </div>
            </div>
            <img src={urlFor(data.homeImage).url()} alt={data.title} className="w-1/3 h-auto mt-14" />
            <h1 className="text-blue-900 absolute bottom-0 left-0 w-full text-center py-4 px-80 text-xl">{data.info}</h1>
        </section>
    );
}

