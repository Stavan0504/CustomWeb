import {defineField,defineType} from 'sanity'
export default defineType({
    name:'navbar',
    title:'Navbar',
    type: 'object',
    fields: [
        defineField( {
            name: 'name',
            type: 'string',
            title: 'Title',
        }),
        defineField( {
            name: 'logo',
            type: 'string',
            title: 'Logo',
        }),
        defineField({
            type:'array',
            name: 'links',
            title: 'Links',
            of: [{type: 'string'}],
        }),
        defineField({
            name:'button',
            type: 'string',
            title: 'Button',
        })
    ]
})