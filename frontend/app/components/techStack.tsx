import React from "react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import Image from 'next/image';
import { Techtypes } from "../types/techTypes";
export default function Tech({ data }:Techtypes) {
   const builder = imageUrlBuilder(client);
      const urlFor = (source: SanityImageAssetDocument) =>
        builder.image(source);
  
  return (
    
    <div className="tech bg-slate-100 py-10  overflow-x-hidden">
        {data.title.techs.map((tech:any) => (<div className="container mx-auto text-center">
        <h1 className="text-2xl mb-8 text-blue-600">{tech.name}</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 items-center p-36 ">
          {tech.image.map((tech:any, index:any) => (
            <div
              key={index}
              className="flex flex-col w-full h-32 items-center rounded-lg shadow-md border-4 border-dashed border-red-400"
            >
              <Image
                width={64}
                height={64}
                src={urlFor(tech).url()}
                alt="{tech.name}"
                className="w-64 h-64 object-contain mb-4"
              />
            </div>
          ))}
        </div>
      </div>))} 
    </div>
  );
}