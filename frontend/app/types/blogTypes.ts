import { SanityImageAssetDocument } from "next-sanity";

interface Blog {
    title: string;
    description: string;
    image: SanityImageAssetDocument;
    button: string[]; 
  }
  
export interface BlogsProps {
    data: {
      heading: string;
      description: any;
      blogConent: Blog[];
      button: string; 
    };
  }