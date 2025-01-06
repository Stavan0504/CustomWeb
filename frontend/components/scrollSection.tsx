import { SanityImageAssetDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../app/lib/client";
import Image from 'next/image';

import '../app/globals.css';
import { ScrollTypes } from "../app/types/scrollTypes";


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
      
    </div>
  );
}
