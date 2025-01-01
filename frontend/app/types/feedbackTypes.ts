import { SanityImageAssetDocument } from "@sanity/client";
export interface feedback{
    data :{
    title: string;
    description: FeedbackBlock[];
    button: string[]; 
    content:[];
    rotateImage:SanityImageAssetDocument;
    authorImage:SanityImageAssetDocument;
    image:SanityImageAssetDocument;
    author:string;
    }
  }
  interface FeedbackChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
  }
  
   interface FeedbackBlock {
    _key: string;
    _type: string;
    style?: string;
    children: FeedbackChild[];
}