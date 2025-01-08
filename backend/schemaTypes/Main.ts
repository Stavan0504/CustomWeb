import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {  
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name:'sections',
        type:'array',
        of:[{type:'reference',to:{type:'sections'}}]
    })
  ],
})
