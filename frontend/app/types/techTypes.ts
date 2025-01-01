import { SanityImageAssetDocument } from "next-sanity";
export interface Techtypes{
    data :{
    title: {
        techs:[{
            name:string,
            image:SanityImageAssetDocument[]
        }]
    };
    description: TechBlock[];
    button: string[]; 
    content:[];
    rotateImage:string;
    authorImage:string;
    image:SanityImageAssetDocument;
}
}
interface tech{
    _type: "string";
    _key: string;
    techs:string
}
interface TechChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
}

 interface TechBlock {
    _key: string;
    _type: string;
    style?: string;
    children: TechChild[];
}