import { PortableText } from '@portabletext/react';
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../app/lib/client";
import Image from 'next/image';
import { customComponents } from './customComponents';
import { feedback } from '../app/types/feedbackTypes';

export default function Feedback({ data }: feedback) {
    
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) =>
      builder.image(source);

    return (
        <div className="relative p-8 sm:p-16 lg:p-40 overflow-y-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-center relative">
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
                    <div className="relative overflow-x-hidden overflow-y-hidden">
                        <Image 
                            src={urlFor(data.rotateImage).url()} 
                            alt="Feedback Image" 
                            className="animate-spin-slow" 
                            width={600} 
                            height={600} 
                        />
                        <Image 
                            src={urlFor(data.image).url()} 
                            alt="Feedback Image" 
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
                            width={70} 
                            height={70} 
                        />
                    </div>
                </div>
                
                <div className="lg:w-1/2 text-center lg:text-left p-8 sm:p-16 lg:p-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibol mb-4 font-italic leading-tight">{data.title}</h1>
                    <div className="font-montserrat mb-8">
                        <PortableText value={data.description} components={customComponents} />
                    </div>
                    <div className="flex justify-center lg:justify-start space-x-4">
                        <div className="flex items-center justify-center">
                            <Image 
                                alt={data.author} 
                                src={urlFor(data.authorImage).url()} 
                                height={90} 
                                width={90} 
                                className="rounded-full" 
                            />
                        </div>
                        <h1 className="text-xl sm:text-lg lg:text-xl font-semibold text-sky-950 mt-4 lg:mt-0">{data.author}</h1>
                    </div>
                </div>

                
               
            </div>
        </div>
    );
}
