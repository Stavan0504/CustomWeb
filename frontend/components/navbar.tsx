'use client'
import { SanityImageAssetDocument } from "next-sanity";
import Image from "next/image";
import React, { useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../app/lib/client";
import { HEADER_QUERY } from "@/app/lib/queries";

interface NavbarProps {
  sections: {
    logo: SanityImageAssetDocument;
    name: string;
    links: string[];
    button: string;
  };
}

export default function Navbar({ sections }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
      const builder = imageUrlBuilder(client);
      const urlFor = (source: SanityImageAssetDocument) => builder.image(source);
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-r from-[rgba(74,58,255,.2)] via-slate-100 to-[#f3dee5] shadow-md w-full z-10">
      <Image src={urlFor(sections.logo).url()} alt={sections.name} className="sm:h-8 sm:w-64" height={120} width={120} />
      <div className="hidden md:flex space-x-6">
        <ul className="flex space-x-6">
          {sections.links.map((link, i) => (
            <li key={i}>
              <a
                href={link}
                className="text-lg text-gray-700 hover:text-blue-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      
      <button
        className="md:hidden text-gray-700 hover:text-blue-500"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type='button'
        title="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden z-20 absolute top-16 left-0 right-0 bg-gradient-to-r from-[#dfdcff] via-slate-100 to-[#f3dee5] p-4 shadow-md`}
      >
        <ul className="flex flex-col space-y-4">
          {sections.links.map((link, i) => (
            <li key={i}>
              <a
                href={link}
                className="text-lg  hover:text-blue-500"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button className="bg-sky-950 text-white py-2 sm:scale-125 scale-75 px-6 rounded-full">
        {sections.button}
      </button>
    </nav>
  );
}
