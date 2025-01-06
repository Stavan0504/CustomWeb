import {defineQuery} from 'next-sanity';
export const MAIN_QUERY = defineQuery(`*[_type == "post"][0]{
    sections[]->{...}
    }
    `)

export const NAVBAR_QUERY =  defineQuery( `*[_type == "navbar"][0]{
   ...
  }`);