import { PortableText } from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import Image from 'next/image';
import { customComponents } from './customComponents';
import { feedback } from '../types/feedbackTypes';

export default function Feedback({ data }:feedback) {
    
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) =>
      builder.image(source);

    return (
        <div className="relative p-40 overflow-y-hidden">
            <div className='justify-end text-sky-950 p-20 absolute ml-[610px] w-5/12'>
            <div className="grid grid-rows-1">
                <h1 className='text-5xl font-semibold text-sky-950 mb-1 font-italic' style={{lineHeight:'76px',}}>{data.title}</h1>
                <div className='font-montserrat'>
                <PortableText value={data.description} components={customComponents} />
                </div>
                </div>                
                <div className='grid grid-cols-2 mt-8 mr-56 relative'>
                <Image alt={data.author} src={urlFor(data.authorImage).url()} height={90} width={90} className='rounded-full' />
                <h1 className='text-xl font-semibold text-sky-950 mt-8'>{data.author}</h1>
                </div>
            </div>
            <Image 
                src={urlFor(data.rotateImage).url()} 
                alt="Feedback Image" 
                className='animate-spin-slow' 
                width={600} 
                height={600} 
            />
            
            <Image 
                src={urlFor(data.image).url()} 
                alt="Feedback Image" 
                className="absolute top-1/2 ml-[298px] transform -translate-x-1/2 -translate-y-1/2" 
                width={70} 
                height={70} 
            />
        </div>
    );
}
