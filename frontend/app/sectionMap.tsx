import React from 'react';
import ItemMap from './itemMap';
export default function SectionMap([section]:any){
    return (
        <div>
            {section.map((section:any, index:any) => {
                    <ItemMap data={section}></ItemMap>                
            })}
        </div>
    )
}