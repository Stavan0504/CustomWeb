import { client } from "../app/lib/client";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { customComponents } from "@/components/customComponents";
import { comparisionType } from "../app/types/comparisionTypes";

export default function ComparePage({filteredContent}:comparisionType) {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
    return (
      <div className="grid w-1/5 sm:w-full place-content-center p-10">
        {filteredContent?.map((section, index) => (
          <div key={index} className="space-y-10">
            {section.content?.map((contentItem, contentIndex) => (
              <div key={contentIndex} className="bg-gradient-to-r sm:w-[1400px] w-[450px] ml-96 sm:p-8  from-[rgba(74,58,255,.2)] via-slate-100 to-[#f3dee5] rounded-lg shadow-lg border border-[#da3654]">
                {contentItem.filteredList.length > 0 ? (
                  <div className="flex gap-8">
                    {/* Left Column */}
                    <div className="w-1/2 sm:p-12 p-6">
                      {contentItem.filteredList.slice(0, 1).map((product: any, productIndex: any) => (
                        <div key={productIndex}>
                          <h1 className="text-xl font-bold p-8 text-[#da3654] mb-4">{product.name}</h1>
                          <ul className="list-disc sm:text-base text-sm space-y-2 sm:pl-5 pl-0 leading-loose text-gray-700">
                            <PortableText value={product.history} components={customComponents} />
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Center Divider Line */}
                    <div className="border-l-2 border-[#da3654]"></div>

                    {/* Right Column */}
                    <div className="w-1/2 sm:p-12 py-6 pr-6">
                      {contentItem.filteredList.slice(1, 2).map((product: any, productIndex: any) => (
                        <div key={productIndex}>
                          <h1 className="text-xl font-bold p-8 text-[#da3654] mb-4">{product.name}</h1>
                          <ul className="list-disc sm:text-base text-sm space-y-2 sm:pl-5 pl-0 leading-loose text-gray-700">
                            <PortableText value={product.history} components={customComponents} />
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-center text-gray-500">
                    No matching products found in this section.
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
}