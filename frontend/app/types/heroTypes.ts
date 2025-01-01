import { SanityImageAssetDocument } from "next-sanity";
export interface Herotypes{
    data :{
    title: string;
    homeImage: SanityImageAssetDocument;
    description: HeroBlock[];
    button: string[]; 
    info: string;
    content:[]
    }
  }
  interface HeroChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
  }
  
   interface HeroBlock {
    _key: string;
    _type: string;
    style?: string;
    children: HeroChild[];
}