import { SanityImageAssetDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../lib/client";
import { PortableText } from '@portabletext/react';
import '../globals.css';
import { ScrollTypes } from "../types/scrollTypes";
import { customComponents } from "./customComponents";

export default function Scroll({ data }: ScrollTypes) {
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
              className="w-72 h-56 sm:w-60 sm:h-44 md:w-64 md:h-48 lg:w-72 lg:h-56"
            />
          </li>
        ))}

        {data.scrollImage.map((item, index) => (
          <li key={index + data.scrollImage.length} className="flex-shrink-0 mx-4">
            <img
              src={urlFor(item).url()}
              alt="{item.name}"
              className="w-72 h-56 sm:w-60 sm:h-44 md:w-64 md:h-48 lg:w-72 lg:h-56"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col lg:flex-row justify-between items-center rounded-lg py-20 px-6 sm:px-10 md:px-20">
        <div className="px-4 sm:px-8 md:px-10 lg:px-40 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-5">
            {data.title}
          </h1>
          <PortableText value={data.description} components={customComponents} />
        </div>
        <div className="mt-10 lg:mt-0 lg:mr-20 w-full lg:w-auto text-center">
          <img
            src={urlFor(data.buttonImage).url()}
            alt="{data.title}"
            className="w-32 h-12 sm:w-36 sm:h-14 md:w-40 md:h-16 ml-auto mr-auto lg:ml-14"
          />
          <button className="bg-[#222549] text-white p-4 sm:p-5 md:p-6 w-56 sm:w-64 md:w-72 h-14 text-xs sm:text-base sm:h-16 font-bold mt-8 rounded-full transition-all duration-500 hover:bg-[#da3654]">
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
}
