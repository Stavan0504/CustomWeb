import { BlogsProps } from "./blogTypes"
import { feedback } from "./feedbackTypes"
import { Herotypes } from "./heroTypes"
import { SanityImageAssetDocument } from "next-sanity";
import { Case } from "./caseStudy"
import { Plantypes } from "./planTypes"
import { Techtypes } from "./techTypes"
import { compare } from "./compareTypes"
import { ScrollTypes } from "./scrollTypes"
export interface dataTypes{
    data:{
    Slug:{current:string,
    _type:string,
    }
    _createdAt:string,
    _id:string,
    _rev:string,
    _type:string,
    _updatedAt:string,
    sections:Section[]
}
}
export interface Section{
        _type:string,
        BlogProps:BlogsProps,
         heading: string; description: any; 
         blogConent: Blog[]; 
         button: string; 
}
interface Blog {
    title: string;
    description: string;
    image: SanityImageAssetDocument;
    button: string[]; 
  }
  
