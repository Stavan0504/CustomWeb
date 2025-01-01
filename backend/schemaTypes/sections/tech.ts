import { defineField,defineType } from "sanity";

export default defineType({
    name:'tech',
    title:'Tech',
    type:'object',
    fields:[
        defineField({
            name:'title',
            title:'Title',
            type:'object',
            fields:[
                defineField({
                    name:'Field',
                    type:'string',
                    title:'Field'
                }),
                defineField({
                    name:'techs',
                    type:'array',
                    title:'Techs',
                    of:[{type:'object',fields:[
                        defineField({
                        name:'name',
                        title:'Name',
                        type:'string'
                    }),
                    defineField({
                        name:'image',
                        title:'Image',
                        type:'array',
                        of:[{type:'image'}]
                    }),
                ]}]
                }),
            ]
        }),
    ]

})