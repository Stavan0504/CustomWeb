import React from 'react';
import ItemMap from './itemMap';
export default function SectionMap([section]:any){
    console.log('section');
    return (
        <div>
            {section.map((section:any, index:any) => {
                    <ItemMap data={section}></ItemMap>                
            })}
        </div>
    )
}