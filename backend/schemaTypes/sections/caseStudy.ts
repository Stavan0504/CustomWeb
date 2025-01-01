import { defineField,defineType } from "sanity";
export default defineType({
    name:'case',
    title:'Case Study',
    type:'object',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'string'
        }),
        defineField({
            name:'description',
            title:'Description',
            type:'text'
        }),
        defineField({
            name:'caseImage',
            title:'Case Image',
            type:'image',
        }),
        defineField({
            name:'text',
            title:'Text',
            type:'blockContent'
        }),
        defineField({
            name:'assessment',
            type:'array',
            title:'Assessment',
            of:[{type:'string'}]
        })
    ]

})