import {defineField,defineType} from 'sanity'
export default defineType({
    name: 'scroll',
    title: 'Scroll',
    type: 'object',
    fields: [
        defineField({
            name:'scrollImage',
            type:'array',
            title:'Scroll Image',
            of:[{type:'image'}]
        }),
      
    ]
})