import { PortableText } from "@portabletext/react";
import { customComponents } from "./customComponents";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import { Case } from "../types/caseStudy";
export default function CaseStudy({ data }: Case) {
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
    
    return (
        <section className="bg-white py-20 px-4 md:px-24 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mr-12 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{data.title}</h2>
                <p className="text-xl text-gray-700 mb-6 ml-4 md:ml-24">{data.description}</p>
                <img 
                    src={urlFor(data.caseImage).url()} 
                    alt={data.title} 
                    className="w-full md:w-3/4 h-auto" 
                />
                <ul className="block mt-6">
                    {data.assessment.map((assessment, index) => (
                        <li key={index} className="mt-0 mb-8 mx-0">
                            <label className="text-base font-normal leading-[1em] text-[#5d63a9]">{assessment}</label>
                            <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0">
                                <div className="bg-whitesmoke rounded-full mb-2">
                                    <div className="bg-red-600 rounded-full h-3" style={{ width: `${index === 0 ? 100 : 90}%` }}></div>
                                </div>
                                <div className="bg-whitesmoke rounded-full mb-2">
                                    <div className="bg-orange-500 rounded-full h-3" style={{ width: `${index === 1 ? 90 : 80}%` }}></div>
                                </div>
                                <div className="bg-whitesmoke rounded-full mb-2">
                                    <div className="bg-green-500 rounded-full h-3" style={{ width: `${index === 2 ? 93 : 85}%` }}></div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="max-w-lg mb-12 ml-4 md:ml-10 text-black scale-100 md:scale-125">
                <PortableText value={data.text} components={customComponents} />
            </div>
        </section>
    );
}
