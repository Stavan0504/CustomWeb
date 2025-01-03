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
    sections:Sections[]
}
}
interface Sections{
    _key:string,
    _type:string,
}
