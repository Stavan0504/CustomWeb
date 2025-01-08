import { client } from "../app/lib/client";
import { PortableText, PortableTextBlock } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { customComponents } from "@/components/customComponents";
import { comparisonType } from "../app/types/tableTypes";
export interface Product {
  name: string;
  image: SanityImageAssetDocument;
  features: { object: string; value: string }[];
  content: PortableTextBlock[];
}



export default function ComparePage({ filteredContent }:comparisonType) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
  return (
    <div className="grid w-full place-content-center p-10">
      {filteredContent?.map((section, index) => (
        <div key={index} className="space-y-10">
          {section.content?.map((contentItem, contentIndex) => (
            <div key={contentIndex} className="bg-custom-gradient w-[450px] sm:w-[1400px]">
              {contentItem.filteredList.length > 0 ? (
                <div className="flex gap-8">
                  <div className="w-full p-12 ">
                    <table className="w-full text-white ">  
                      <thead>
                        <tr>
                          <th className="text-start pl-4">Framework</th>
                          {contentItem.filteredList.map((product: any, index: number) => (
                            <th key={index} className="p-4 ml-40">{product.name}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {contentItem.filteredList[0]?.features.map((feature: any, featureIndex: number) => (
                          <tr key={featureIndex}>
                            <td className="p-4 ">{feature.object}</td>
                            {contentItem.filteredList.map((product: any, productIndex: number) => (
                              <td key={productIndex} className="text-center font-semibold ml-40 p-4">
                                {product.features[featureIndex]?.value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
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