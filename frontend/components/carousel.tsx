import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../app/lib/client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { customComponents } from "./customComponents";

export default function CarouselSection({ data }: any) {
  const builder = imageUrlBuilder(client);
  const urlFor = (source: SanityImageAssetDocument) => builder.image(source);

  return (
    <div className="px-4 sm:px-8 lg:px-40">
      <div className="relative p-8 sm:p-12 lg:p-16 overflow-y-hidden bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-8">
          <div className="flex flex-col justify-center text-white px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold mb-6">{data.title}</h1>
            <PortableText value={data.description} components={customComponents} />
          </div>
          <div className="h-1 sm:h-2 lg:h-72 lg:w-[2px] bg-white mx-auto"></div>
          <div className="flex flex-col items-center sm:items-start justify-center pr-6">
            <Carousel className="w-full ml-1 sm:ml-0 max-w-lg">
              <CarouselContent className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                {data.reviews.map((review: any, index: any) => (
                  <CarouselItem
                    key={index}
                    className="flex-shrink-0 w-full p-6 rounded-lg shadow-md"
                  >
                    <p className="mb-4 text-white font-bold">{review.review}</p>
                    <div className="flex items-center mt-4 space-x-4">
                      {review.image && (
                        <Image
                          src={urlFor(review.image).url()}
                          alt="{review.name}"
                          width={40}
                          height={40}
                          loading="lazy"
                          className="rounded-full"
                        />
                      )}
                      <h2 className="text-lg font-semibold text-white">{review.author}</h2>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-between items-center mt-4">
                <CarouselPrevious aria-label="Previous Button" className="text-black p-2 hidden sm:block  bg-white rounded-full shadow hover:bg-gray-100 flex-shrink-0 sm:absolute sm:left-0 sm:ml-4 lg:ml-0 lg:static" />
                <CarouselNext aria-label="Next Button" className="text-black p-2 bg-white hidden sm:block rounded-full shadow hover:bg-gray-100 flex-shrink-0 sm:absolute sm:right-0 sm:mr-4 lg:mr-0 lg:static" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
