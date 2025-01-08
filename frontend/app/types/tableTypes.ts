import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";


export interface Feature {
    object: string;  
    value: string;   
  }
  
  export interface Product {
    name: string; 
    image: SanityImageAssetDocument;
    content: PortableTextBlock[]; 
    slug: { current: string };
    features: { object: string; value: string }[];
  }
  
  
  export interface ContentItem {
    filteredList: Product[];  
    products: Product[];  
  }
  
  
  export interface Section {
    content: ContentItem[];
    sections?: { content: { products: Product[] }[] }[];
  }
  
  
  export interface comparisonType {
    filteredContent: Section[];
    
  }
  