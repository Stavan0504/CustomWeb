import React from "react";
import { client } from "./lib/client";
import { MAIN_QUERY } from "./lib/queries";
import ItemMap from "./itemMap";

export default async function Home() {
    const data = await client.fetch(MAIN_QUERY);
    
    return (
      <div className="bg-slate-200 font-[family-name:var(--font-geist-sans)]   overflow-x-hidden">
        {data.sections.map((section: any, index: number) => {
          return <ItemMap data={section}></ItemMap>
        })}
      </div>  
    );
}
