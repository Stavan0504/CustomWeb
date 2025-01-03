import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import { FooterTypes } from "../types/footerTypes";

export default function Footer({ data }: FooterTypes) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

  return (
    <footer className="bg-sky-950 lg:grid lg:grid-cols-5">
      
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={urlFor(data.image).url()}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      
      <div className="px-4 py-8 sm:py-12 sm:px-6 lg:col-span-3 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-white">{data.Call}</span>
              <a
                href="#"
                className="block text-xl sm:text-2xl lg:text-3xl font-medium text-white hover:opacity-75"
              >
                {data.number}
              </a>
            </p>

            <ul className="mt-4 space-y-1 text-sm text-white">
              <li>{data.timings}</li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-4 sm:gap-6">
              {data.social.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white transition hover:opacity-75"
                  >
                    <span className="sr-only">{item.socialTitle}</span>
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      viewBox="0 0 24 24"
                      fill="#FFFFFF"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d={item.Path} clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {data.features.map((item, index) => (
              <div key={index} className="p-4 border border-gray-700 rounded-lg">
                <p className="font-medium text-white text-lg mb-2">{item.featuresTitle}</p>
                <ul className="mt-2 space-y-2 text-sm">
                  {item.featuresContent.map((content, contentIndex) => (
                    <li key={contentIndex}>
                      <a href="#" className="text-white transition hover:opacity-75">
                        {content}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              {data.content.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white transition hover:opacity-75">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
