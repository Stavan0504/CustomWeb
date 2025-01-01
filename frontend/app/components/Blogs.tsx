import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import { BlogsProps } from "../types/blogTypes";
import Image from "next/image";
import { customComponents } from "./customComponents";

export default function Blogs({ data }:BlogsProps) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) =>
    builder.image(source);
  

  return (
    <div className="px-40 py-10">
    <div className="relative px-5 py-16 overflow-y-hidden bg-gradient-to-br from-blue-400 via-sky-200 to-pink-500">
      <div className="flex flex-col items-center min-h-screen">
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-6">{data.heading}</h1>
          <div className="max-w-3xl mx-auto text-6xl text-gray-700">
            <PortableText value={data.description} components={customComponents} />
          </div>
        </div>  

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {data.blogConent.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={urlFor(blog.image).url()}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                {blog.button.map((button, index) => (
                    <p className='bg-red-900 text-white transition-all duration-700 mb-3 hover:text-red-900 hover:bg-gray-200 rounded-lg p-4 text-xs h-10 flex justify-center'>{button}</p>
                ))}
                </div>
                <h2 className="text-xl font-bold text-sky-900 mb-3">{blog.title}</h2>
                <p className="text-gray-700 text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="flex justify-center bg-red-900 rounded-full mt-5 w-50 p-5 text-lg font-bold text-white hover:bg-sky-950 hover:text-white transition-all duration-500 h-12 py-3">{data.button}</button>
      </div>
      <div>
      </div>
    </div>
    </div>
  );
}
