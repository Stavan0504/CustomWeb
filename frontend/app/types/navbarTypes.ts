export interface sections {
    _type: string;
    name: string;
    _id: string;
    Slug: {
      current: string;
      _type: string;
    };
    _updatedAt: string;
    sections: NavbarSection[];
    _createdAt: string;
    _rev: string;
  }
  
  interface NavbarSection {
    name: string;
    logo: string;
    links: string[];
    _key: string;
    button: string;
    _type: string;
  }
  