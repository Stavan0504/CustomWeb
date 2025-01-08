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
            name:'table',
            type:'array',
            title:'Table',
            of:[{type:'string'}]

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
                    of: [{type: 'object',fields: [
                        defineField({
                            name: 'name',
                            type: 'string',
                            title: 'Name',
                        }),
                        defineField({
                            name: 'slug',
                            type: 'slug',
                            title: 'Slug',
                            options: {
                                source: (doc, options) => options.parent.name,
                                maxLength: 96,
                            }
                        })  ,
                        defineField({
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: {hotspot: true}
                        }), 
                        defineField({
                            name: 'content',
                            type: 'blockContent',
                            title: 'Content',   
                        }),
                        defineField({
                            name:'history',
                            type:'blockContent',
                            title:'History',    
                        }),
                        defineField({
                            name:'features',
                            type:'array',
                            title:'Features',
                            of:[{type:'object',fields:[
                                defineField({
                                    name:'object',
                                    type:'string',
                                    title:'Object',
                                }),
                                defineField({
                                    name:'value',
                                    type:'string',
                                    title:'Value',
                                })
                            ]
                            }]
                        })
                    ]}]
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
