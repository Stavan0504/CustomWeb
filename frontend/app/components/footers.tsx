import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import { FooterTypes } from "../types/footerTypes";
 
export default function Footer({ data }:FooterTypes) {
    console.log(data)
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) =>
        builder.image(source);
    return (
        <footer className="bg-sky-950 lg:grid lg:grid-cols-5">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src={urlFor(data.image).url()}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-white"> {data.Call} </span>

                            <a href="#" className="block text-2xl font-medium text-white hover:opacity-75 sm:text-3xl">
                                {data.number}
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-white">
                            <li>{data.timings}</li>
                        </ul>

                        <ul className="mt-8 flex gap-6">
                            {data.social.map((item, index) => (
                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-white transition hover:opacity-75"
                                    >
                                        <span className="sr-only">{item.socialTitle}</span>
                                        <svg className="size-9" viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true"><path
                                                fillRule="evenodd"
                                                d={item.Path}
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {data.features.map((item, index) => (
                            <div key={index} className="p-4 border rounded-lg">
                                <p className="font-medium text-white text-lg mb-2">{item.featuresTitle}</p>
                                <ul className="mt-4 space-y-2 text-sm">
                                    {item.featuresContent.map((content, contentIndex) => (
                                        <li key={contentIndex}>
                                            <a
                                                href="#"
                                                className="text-white transition hover:opacity-75"
                                            >
                                                {content}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="mt-12 border-t border-gray-100 pt-12">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <ul className="flex flex-wrap gap-4 text-xs">
                            {data.content.map((item, index) => (
                                <li>
                                <a href="#" className="text-white transition hover:opacity-75"> {item}</a>
                            </li>
                            ))}
                            
                        </ul>   
                    </div>
                </div>
            </div>
        </footer>
    )
}