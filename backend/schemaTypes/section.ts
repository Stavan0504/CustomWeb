import {defineField,defineType} from 'sanity'

export default defineType({
    name:'sections',
    type:'document',
    title:'Sections',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name',
        }),
        defineField({
            name: 'Slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name',
                maxLength: 96,
            }
        }),
        defineField({
            name: 'sections',
            type: 'array',
            title: 'Sections',
            of: [
                { type:'navbar'},
                { type:'hero' },
                { type:'case' },
                { type:'tech' },
                { type:'paymentSection' },
                { type:'features' },
                { type:'compare' },
                { type:'feedback' },
                { type:'carousel' },
                { type:'blog' },
                { type:'scroll' },
                { type:'footerSection' }
            ]
        })
    ]
})