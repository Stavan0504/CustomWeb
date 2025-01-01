import {defineField,defineType} from 'sanity'
export default defineType({
    name: 'scroll',
    title: 'Scroll',
    type: 'object',
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
            name:'scrollImage',
            type:'array',
            title:'Scroll Image',
            of:[{type:'image'}]
        }),
        defineField({
            name: 'button',
            type: 'string',
            title: 'Button',
                
        }),
        defineField({
            name:'buttonImage',
            type:'image',
            title:'Button Image',
        })
    ]
})