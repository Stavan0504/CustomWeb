export interface compare{
    data :{
    title: string;
    description: CompareBlock[];
    button: string[]; 
    content:[]
    }
  }
  export interface CompareChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
  }
  
  export interface CompareBlock {
    _key: string;
    _type: string;
    style?: string;
    children: CompareChild[];
}