import { SanityImageAssetDocument } from "@sanity/client";
export interface FooterTypes {
    data: {
        title: string;
        timings:string;
        social:[{
            socialTitle:string,
            Path:string
        }];
        featuresTitle:string
        description: string;
        Call:string;
        number:string;
        button: string;
        content: string[];
        image: SanityImageAssetDocument;
        features: Features[];
        };
}
interface Features {
    featuresContent: [];
    featuresTitle:string
}
