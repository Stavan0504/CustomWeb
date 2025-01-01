import { SanityImageAssetDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/client";
import { PortableText } from '@portabletext/react'
import '../globals.css';
import { ScrollTypes } from "../types/scrollTypes";
import { customComponents } from "./customComponents";

export default function Scroll({ data }:ScrollTypes) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
  
  return (

    <div className="w-full py-20 grid grid-cols-1 overflow-hidden">
      <ul className="flex animate-infinite-scroll">
        {data.scrollImage.map((item, index) => (
          <li key={index} className="flex-shrink-0 mx-4">
            <img
              src={urlFor(item).url()}
              alt="{item.name}"
              className="w-72 h-56"
            />
          </li>
        ))}

        {data.scrollImage.map((item, index) => (
          <li key={index + data.scrollImage.length} className="flex-shrink-0 mx-4">
            <img
              src={urlFor(item).url()}
              alt="{item.name}"
              className="w-72 h-56"
            />
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center rounded-lg py-20 px-20">
      <div className="px-40 w-3/4">
          <h1 className="text-3xl font-bold text-blue-900 mb-5">{data.title}</h1>
          <PortableText value={data.description} components={customComponents}/>
      </div>
      <div className="mr-20">
        <img src={urlFor(data.buttonImage).url()} alt="{data.title} "className="w-40 h-16 ml-14" />
        <button className="bg-[#222549] text-white p-6 w-72 h-16 font-bold py-3 mt-8 rounded-full transition-all duration-500 hover:bg-[#da3654]">
          {data.button}
        </button>
      </div>
      </div>
    </div>
  );
}
