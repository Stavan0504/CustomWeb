import React from "react";
interface NavbarProps {
    sections: {
      logo: string;
      name: string;
      links: string[];
      button: string;
    };
  }
  

export default function Navbar({ sections }: NavbarProps) {
  return (
    <nav className="flex justify-around items-center py-4 px-8 bg-slate-200shadow-md w-full z-10">
      <img src={sections.logo} alt={sections.name} className="h-8" />
      <ul className="flex space-x-6">
        {sections.links.map((link, i) => (
          <li key={i}>
            <a href={link} className="text-lg text-gray-700 hover:text-blue-500">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <button className="bg-red-500 text-white py-2 scale-125 px-6 rounded-full hover:bg-blue-600">
        {sections.button}
      </button>
    </nav>
  );
}
