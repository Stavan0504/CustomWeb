import {defineField,defineType} from 'sanity'

export default defineType({
        name:'paymentSection',
        title:'Payment Section',
        type:'object',
        fields:[
            defineField( {
                name: 'title',
                type: 'string',
                title: 'Title',
            }),
            defineField( {
                title:'Duration',
                name:'duration',
                type:'array',
                of:[{type:'plans'}]

            }),
            defineField({
                name:'features',
                title:'Features',
                type:'array',
                of:[{type:'string'}]
            }),
            defineField({
                name:'button',
                type: 'string',
                title: 'Button',
            })
        ]
        
    })