import { defineField, defineType } from "sanity";

export default defineType({
    name: "footerSection",
    title: "Footer",
    type: "object",
    fields: [
        defineField({
            name: "footerLogo",
            title: "Footer Logo",
            type: "image",
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
        }),
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
            name: "footerItems",
            title: "Footer Items",
            type: "array",
            of: [
                defineField({
                    name: "footerItem",
                    title: "Footer Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "label",
                            title: "Label",
                            type: "string",
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "footerEmail",
            title: "Footer Email",
            type: "string",
        }),
        defineField({
            name: "footerCopyright",
            title: "Footer Copyright",
            type: "string",
        }),
    ],
});