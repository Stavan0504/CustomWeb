import { defineField,defineType } from "sanity";

export default defineType({
    name:'techStack',
    title:'Tech Stack',
    type:'object',
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string'
        }),
        defineField({
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'string'}]
        }),
    ]
    });