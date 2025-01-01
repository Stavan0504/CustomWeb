import { SanityImageAssetDocument } from "next-sanity";
export interface Case{
    data :{
    title: string;
    description: string;
    caseImage: SanityImageAssetDocument;
    button: string[]; 
    assessment:string[];
    text:ContentBlock[];
    }
  }
  export interface ContentChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
  }
  
  export interface ContentBlock {
    _key: string;
    _type: string;
    style?: string;
    children: ContentChild[];
  }
