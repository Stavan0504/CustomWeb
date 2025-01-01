import { defineField,defineType } from "sanity";
export default defineType({
    name:'feedback',
    title:'Feedback',
    type:'object',
    fields:[
        defineField({
            name:'title',
            type:'string',
            title:'Title',
        }),
        defineField({
            name:'description',
            type:'blockContent',
            title:'Description',

        }),
        defineField({
            name:'image',
            type:'image',
            title:'Image',
        }),
        defineField({
            name:'authorImage',
            type:'image',
            title:'Author Image',
        }),
        defineField({
            name:'rotateImage',
            type:'image',
            title:'RotateImage'
        }),
        defineField({
            name:'author',
            title:'Author',
            type:'string'
        })
    ]
})