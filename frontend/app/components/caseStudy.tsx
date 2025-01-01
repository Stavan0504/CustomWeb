import { PortableText } from "@portabletext/react";
import { customComponents } from "./customComponents";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageAssetDocument } from "@sanity/client";
import { client } from "../lib/client";
import { Case } from "../types/caseStudy";
export default function CaseStudy({ data }:Case) {
    
    const builder = imageUrlBuilder(client);
    const urlFor = (source: SanityImageAssetDocument) =>
      builder.image(source);
    return (
        <section className="bg-white py-20 px-24 flex items-center">
            <div className="w-1/2 mr-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">{data.title}</h2>
                <p className="text-xl text-gray-700 mb-6 ml-24">{data.description}</p>
                <img src={urlFor(data.caseImage).url()} alt={data.title} className="w-3/4 h-auto" />
            <ul className="block mt-6">
                <li className="mt-0 mb-8 mx-0">
                    <label className="text-base font-normal leading-[1em] text-[#5d63a9]">{data.assessment[0]}</label>
                    <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0">
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "100%", backgroundColor: "#E53A36", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "90%", backgroundColor: "#FB8C00", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "93%", backgroundColor: "#18B663", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mt-0 mb-8 mx-0">
                    <label className="text-base font-normal leading-[1em] text-[#5d63a9]">{data.assessment[1]}</label>
                    <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0">
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "100%", backgroundColor: "#E53A36", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "90%", backgroundColor: "#FB8C00", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "84%", backgroundColor: "#18B663", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mt-0 mb-8 mx-0">
                    <label className="text-base font-normal leading-[1em] text-[#5d63a9]">{data.assessment[2]}</label>
                    <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0">
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "100%", backgroundColor: "#E53A36", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "90%", backgroundColor: "#FB8C00", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "97%", backgroundColor: "#18B663", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mt-0 mb-8 mx-0">
                    <label className="text-base font-normal leading-[1em] text-[#5d63a9]">{data.assessment[3]}</label>
                    <div className="relative z-0 block [&>*>div]:absolute [&>*>div]:w-auto [&>*>div]:left-0">
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "100%", backgroundColor: "#E53A36", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "90%", backgroundColor: "#FB8C00", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                        <div style={{ width: "100%", backgroundColor: "whitesmoke", borderRadius: "40px" }}>
                            <div style={{ height: "0.75em", width: "87%", backgroundColor: "#18B663", borderRadius: "40px", textAlign: "right", marginTop: "0.25em" }}>
                                <span style={{ padding: "10px", color: "black", fontWeight: "900" }}></span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
                </div>
                    
            <div className="max-w-lg mb-12 ml-10 text-black scale-125 ">
                <PortableText value={data.text} components={customComponents} />
            </div>
        </section>
    );
}
