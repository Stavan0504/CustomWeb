import Image from "next/image";
import { SanityImageAssetDocument } from "@sanity/client";
import Link from "next/link";
import { FooterData } from "../app/types/footerTypes";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../app/lib/client";
import { PortableText } from '@portabletext/react';
import { customComponents } from "./customComponents";

export default async function Footer({data}:FooterData) {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

  return (
    <footer>
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
            src={urlFor(data.footerLogo).url()}
            alt="{data.title}"
            className="w-32 h-12 sm:w-36 sm:h-14 md:w-[170px] md:h-[65px] ml-auto mr-auto lg:ml-14"
          />
          <button className="bg-[#222549] text-white p-4 sm:p-5 md:p-6 w-56 sm:w-64 md:w-72 h-14 text-xs sm:text-base sm:h-16 font-bold mt-8 rounded-full transition-all duration-500 hover:bg-[#da3654]">
            {data.button}
          </button>
        </div>
      </div>
      
      <div className="py-4 px-2 sm:px-6 bg-[#222549] lg:px-[10%] text-white flex flex-col md:flex-row items-center justify-between">
        
        <div className="flex items-center md:mb-0">
          {data.footerLogo && (
            <Image
              src={urlFor(data.buttonImage).url()}
              alt="Footer Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
        </div>
    
        <ul className="flex flex-wrap justify-center md:justify-start space-x-8 text-xl">
          {data.footerItems.map((item, index) => (
            <li key={index} className="hover:underline">
              {item.label}
            </li>
          ))}
        </ul>
       
        <div className="text-center md:text-right text-xl mt-4 md:mt-0">
          <Link
            href={`mailto:${data.footerEmail}`}
            className="underline hover:text-gray-300"
          >
            {data.footerEmail}
          </Link>
          <p className="text-gray-400 mt-2">{data.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}