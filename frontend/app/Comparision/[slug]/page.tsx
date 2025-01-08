import React from "react";
import { COMPARE_QUERY } from "../../lib/queries";
import dynamic from "next/dynamic";
import { client } from "../../lib/client";
const Data = dynamic(() => import('../../../components/dataComponent'))
const Features = dynamic(() => import('../../../components/historyComponent'))
const Table = dynamic(() => import('../../../components/tableComponent'))
interface Product {
  name: string;
  slug: { current: string };
  content: Array<any>;
  features:Array<string>
  image: any;
}
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "post"]{"slug": slug.current}`);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
async function ComparisionPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const formattedSlug = slug.replace(/%20/g, "-");
  const splitSlug = formattedSlug.split("Vs");
  const firstSlug = splitSlug[0].toLowerCase();
  const secondSlug = splitSlug[1] ? splitSlug[1].toLowerCase() : '';
  const data = await client.fetch(COMPARE_QUERY, { slug });
  const filteredContent = data.sections?.map((section:any) => {
      return {
        ...section,
        content: section.sections[0].content?.map((content:any) => {
          const filteredData = (content.products || []).filter((item:any) => {
            return [firstSlug, secondSlug].includes(item.slug?.current);
          });
          return {
            ...content,
            filteredList: filteredData,
          };
        })
          .filter((content:any) => content.filteredList.length > 0),
      };
    })
    .filter((section:any) => section.content && section.content.length > 0);

    function formatSlug(slug:string) {
      return slug
        .replace(/-/g, ' ') 
        .replace(/\b\w/g, (char) => char.toUpperCase());
    }

  return (
    <div className="bg-gray-50 w-full">
      <div className="  sm:px-6  lg:px-0">
        <div className="text-center w-full bg-gradient-to-r from-[rgba(74,58,255,.2)] via-slate-100 to-[#f3dee5] mb-12 py-24">
          <h1 className="text-3xl sm:text-6xl font-bold text-red-500 capitalize mb-2">
            {formatSlug(firstSlug)} VS {formatSlug(secondSlug)}
          </h1>
        </div>
      <Data filteredContent={filteredContent}/>
      <Features filteredContent={filteredContent}/>
      <Table filteredContent={filteredContent} />
      </div>
    </div>
  );
  
  
  
}

export default ComparisionPage;
