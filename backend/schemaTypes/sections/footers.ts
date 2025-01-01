import { defineField,defineType } from "sanity";
export default defineType({
    name: "footerSection",
    title: "Footer",
    type: "object",
    fields: [
        defineField({
            name:'image',
            title:'Image',
            type:'image',
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Title",
        }),
        defineField({
            name: "timings",
            type: "text",
            title: "Timings",
        }),
        defineField({
            name: "Call",
            type: "string",
            title: "Call",
        }),
        defineField({
            name: "number",
            type: "string",
            title: "Number",
        }),
        defineField({
            name:'features',
            type:'array',
            of:[{type:"object",fields:[
                defineField({
                    name:'featuresTitle',
                    type:'string',
                    title:'Title',
                }),
                defineField({
                    name:'featuresContent',
                    type:'array',
                    of:[{type:'string'}]
                })
            ]}]
        }),
        defineField({
            name:'social',
            type:'array',
            of:[{type:"object",fields:[defineField({
                name:'socialTitle',
                type:'string',
                title:'Title',
            }),
            defineField({
                name:'Path',
                type:'string',
                title:'Path',
            })]}
                
            ]
        }),
        defineField({
            name:'content',
            type:'array',
            of:[{type:"string"}]

        })
        ],
})
console.log('This is footer');
