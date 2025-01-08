import {defineQuery} from 'next-sanity';
export const MAIN_QUERY = defineQuery(`*[_type == "post"][1]{
    sections[]->{...}
    }
    `)
   export const COMPARE_QUERY = defineQuery(`
        *[_type == "post"][0]{
          sections[]->{
            ...,
            sections[]{
              ...,
              content[]{
              ...,
              products[]{
              name,
               content,
                image,      
                slug,
                history,    
                features[]{
                  object,
                  value},

   }}}
            }
        }
     ` );
    
     export const FOOTER_QUERY = defineQuery(`*[_type == "footerSection"][0]{
      title,
      description,
      footerLogo {
        asset->{
          _id,
          url
        }
      },
      button,
      contactText,
      contactEmail,
      buttonImage {
        asset->{
          _id,
          url
        }
      },
      footerItems[] {
        label
      },
      footerEmail,
      footerCopyright,
    }
  `);

  export const HEADER_QUERY =  defineQuery( `*[_type == "navbar"][0]{
    name,
    logo {
      asset->{
        url
      }
    },
    links[],
    button
  }`);
 