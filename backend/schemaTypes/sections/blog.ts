import {defineField,defineType} from 'sanity'

export default defineType({
    name:'blog',
    type:'object',
    title:'Blog',
    fields:[
        defineField({
            name:'heading',
            title:'Heading',
            type:'string'
        }),
        defineField({
            name:'description',
            type:'blockContent',
            title:'Description',
        }),
        defineField({
            name:'blogConent',
            title:'Blog Content',
            type:'array',
            of:[{type:'object',fields:[
                defineField({
                    name:'image',
                    type:'image',
                    title:'Image'
                }),
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
                    name:'button',
                    title:'Button',
                    type:'array',
                    of:[{type:"string"}]
                })
            ]}]
        }),
        defineField({
            name:'button',
            title:'Button',
            type:'string',
        })
    ]

})