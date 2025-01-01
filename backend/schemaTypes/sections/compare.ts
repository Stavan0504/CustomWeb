import {defineField,defineType} from 'sanity'
export default defineType({
    name:'compare',
    title:'Compare',
    type:'object',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
            title: 'Description',
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'object',fields: [
                defineField({
                    name: 'products',
                    type: 'array',
                    title: 'Products',
                    of: [{type: 'string'}]
                }),
                defineField({
                    name: 'details',
                    type: 'string',
                    title: 'Details',
                }),
                defineField({
                    name: 'text',
                    type: 'blockContent',
                    title: 'Text',
                }),
            ]}]
            
        }),
    ]
})
