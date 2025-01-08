import { client } from "../app/lib/client";
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { customComponents } from "@/components/customComponents";
import { comparisionType } from "../app/types/comparisionTypes";
export default function ComparePage({ filteredContent }:comparisionType) {
const builder = imageUrlBuilder(client);
const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
return(
    <div className="grid sm:px-20 px-10 grid-cols-2 sm:grid-cols-2">
    {filteredContent?.map((section, index) => (
      <div key={index} className="space-y-10">
        {section.content?.map((contentItem, contentIndex) => (
          <div key={contentIndex} className="space-y-4">
            {contentItem.filteredList.length > 0 ? (
              <div className="space-y-8">
                {contentItem.filteredList.map((product, productIndex:number) => (
                  <div
                    key={productIndex}
                    className="p-6 bg-white  sm:justify-center border rounded-lg flex flex-col sm:w-[1400px] w-[400px] sm:flex-row-reverse items-center sm:items-start space-y-6 sm:space-x-6"
                  >
                    <div className="mb-4 sm:mb-0 sm:w-1/3">
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        className="w-32 h-36 max-w-xs mx-auto rounded-md"
                      />
                    </div>
                    <div className="space-y-4 sm:w-2/3 ">
                      <h3 className="sm:text-xl text-sm font-semibold p-4   sm:w-56 w-28  text-center mb-3 bg-red-500 text-white ">
                        {product.name}
                      </h3>

                      <div className="text-gray-600 text-justify font-semibold mb-4">
                        <PortableText value={product.content} components={customComponents} />
                      </div>

    
                    </div>
                    <div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No matching products found in this section.</p>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
)
}
