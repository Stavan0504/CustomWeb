import { SanityImageAssetDocument } from "@sanity/client";
export interface ScrollTypes{
    data:{
        
            _type: string;
            title: string;
            description: FeedbackBlock[];
            scrollImage: SanityImageAssetDocument[];
            button: string;
            buttonImage: SanityImageAssetDocument;
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