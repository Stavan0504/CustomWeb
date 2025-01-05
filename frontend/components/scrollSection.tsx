import { SanityImageAssetDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../app/lib/client";
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import '../app/globals.css';
import { ScrollTypes } from "../app/types/scrollTypes";
import { customComponents } from "./customComponents";

export default function Scroll({ data }: ScrollTypes) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

  return (
    <div className="w-full py-20 grid grid-cols-1 overflow-hidden">
      <ul className="flex animate-infinite-scroll">
        {data.scrollImage.map((item, index) => (
          <li key={index} className="flex-shrink-0 mx-4">
            <Image
              width={218}
             height={54}
             loading="lazy"
              src={urlFor(item).url()}
              alt="{item.name}"
              className=" sm:w-60 sm:h-48 md:w-64 md:h-48 lg:w-72 lg:h-[216px]"
            />
          </li>
        ))}

        {data.scrollImage.map((item, index) => (
          <li key={index + data.scrollImage.length} className="flex-shrink-0 mx-4">
            <Image
              src={urlFor(item).url()}
              alt="{item.name}"
              width={218}
              loading="lazy"
              height={54}
              className="sm:w-60 sm:h-44 md:w-64 md:h-48 lg:w-72 lg:h-[216px]"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col lg:flex-row justify-between items-center rounded-lg py-20 px-6 sm:px-10 md:px-20">
        <div className="px-4 sm:px-8 md:px-10 lg:px-40 w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bol mb-5">
            {data.title}
          </h1>
          <PortableText value={data.description} components={customComponents} />
        </div>
        <div className="mt-10 lg:mt-0 lg:mr-20 w-full lg:w-auto text-center">
          <Image
            height={65}
            loading="lazy"
            width={170}
            src={urlFor(data.buttonImage).url()}
            alt="{data.title}"
            className="w-32 h-12 sm:w-36 sm:h-14 md:w-[170px] md:h-[65px] ml-auto mr-auto lg:ml-14"
          />
          <button className="bg-[#222549] text-white p-4 sm:p-5 md:p-6 w-56 sm:w-64 md:w-72 h-14 text-xs sm:text-base sm:h-16 font-bold mt-8 rounded-full transition-all duration-500 hover:bg-[#da3654]">
            {data.button}
          </button>
        </div>
      </div>
    </div>
  );
}
