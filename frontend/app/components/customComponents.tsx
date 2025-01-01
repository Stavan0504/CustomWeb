
import React from "react";
import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";


export const customComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }) => {
            const builder = imageUrlBuilder({
                projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
                dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || ""
            });
            const urlFor = (source: string) => builder.image(source).url();
            return (
                <Image
                src={urlFor(value)}
                alt="Background"
                height={200}
                width={200}
                objectFit="cover"
                className="rounded-lg"
                />
            );
        },
    },
    block: (() => {
        let headingCounter = 0;
        return {
            h1: ({ children }) => {
                return (
                    <h1 className="text-3xl font-bold my-4 mt-40">
                        {children}
                    </h1>
                );
            },
            h2: ({ children }) => {
                
                return (    
                    <h2 className="text-2xl font-bold my-4">
                        {children}
                    </h2>
                );
            },
            h3: ({ children }) => {
                const id = `id-${headingCounter++}`;
                return (
                    <h3 id={id} className="text-xl font-bold my-4">
                        {children}
                    </h3>
                );
            },
            h4: ({ children }) => {
                const id = `id-${headingCounter++}`;
                return (
                    <h4 id={id} className="text-lg font-bold my-4">
                        {children}
                    </h4>
                );
            },
            normal: ({ children }) => <p className="text-base my-2">{children}</p>,
            blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-600">
                    {children}
                </blockquote>
            ),
        };
    })(),
    marks: {
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        link: ({ children, value }: { children: React.ReactNode; value?: { href: string } }) => (
            <a
                href={value?.href || "#"}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        ),
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-1">{children}</li>,
    },
};
