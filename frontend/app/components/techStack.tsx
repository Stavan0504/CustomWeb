import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import Image from 'next/image';
import { Techtypes } from "../types/techTypes";

export default function Tech({ data }: Techtypes) {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

    return (
        <div className="tech bg-slate-100 py-10 overflow-x-hidden">
            {data.title.techs.map((tech: any, index: number) => (
                <div key={index} className="container mx-auto text-center">
                    <h1 className="text-2xl mb-8 text-blue-600">{tech.name}</h1>
                    
                    {/* Responsive Grid Layout */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-16 items-center px-4 md:px-36">
                        {tech.image.map((techImage: any, index: number) => (
                            <div
                                key={index}
                                className="flex flex-col w-full h-32 items-center rounded-lg shadow-md border-4 border-dashed border-red-400"
                            >
                                <Image
                                    width={64}
                                    height={64}
                                    src={urlFor(techImage).url()}
                                    alt="{techImage.name}"  
                                    className="w-32 h-32 sm:w-64 sm:h-64 object-contain mb-4"   
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
