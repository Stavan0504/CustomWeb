export interface Plantypes{
    data :{
    title: string;
    description: PlanBlock[];
    button: string[]; 
    content:[];
    duration:Plan[];
    features:string[];

    }
  }
  interface Plan{
    duration:string;
    available:[{
        _key:string;
        name:string;
        offer: string[];
    }]
    [key: string]: any;
  }
  interface PlanChild {
    _key: string;
    text: string;
    marks: string[];
    _type: string;
  }
  
  interface PlanBlock {
    _key: string;
    _type: string;
    style?: string;
    children: PlanChild[];
}