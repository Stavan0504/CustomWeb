import { defineField,defineType } from "sanity";

export default defineType({
    name:'hero',
    title:'Hero',
    type:'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'content',
            type: 'blockContent',
            title: 'Content',
        }),
        defineField({
            name: 'button',
            type: 'array',
            title: 'Button',
            of:[{type:'string'}]
        }),
        defineField({
            name: 'homeImage',
            type: 'image',
            title: 'Home Image',
        }),
        defineField({
            name: 'info',
            type: 'string',
            title: 'Info',
        }),
    ]
})