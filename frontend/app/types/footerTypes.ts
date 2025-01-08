import { ScrollTypes } from "./scrollTypes";
import { SanityImageAssetDocument } from "next-sanity";
export interface FooterData {

  title: string;
  description: FeedbackBlock[];
  footerLogo: SanityImageAssetDocument
  contactButtonText: string;
  button:string
  buttonImage: SanityImageAssetDocument
  footerItems: FooterItem[];
  footerEmail: string;
  footerCopyright: string;
    
}

export interface FooterItem {
  label: string;
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