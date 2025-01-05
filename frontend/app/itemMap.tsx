import dynamic from "next/dynamic";
import Hero from "../components/Hero";
const Tech = dynamic(() => import('../components/techStack'))
const Navbar = dynamic(() => import('../components/navbar'))
const Case = dynamic(() => import('../components/caseStudy'))
const PaymentPlans = dynamic(() => import('../components/Plans'))
const Compare = dynamic(() => import('../components/compare'))
const Feedback = dynamic(() => import('../components/feedback'))
const Caraousel = dynamic(() => import('../components/carousel'))
const Blogs = dynamic(() => import('../components/Blogs'))
const Footer = dynamic(() => import('../components/footers'))
const Scroll = dynamic(() => import('../components/scrollSection'))
import { dataTypes } from "./types/dataTypes";
import { Suspense } from "react";

export default function ItemMap({ data }: dataTypes) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div>
      {
        data.sections.map((section:any) => {
          switch (section._type) {
            case "navbar":
              return <Navbar sections={section} />;
            case "hero":
              return <Hero data={section} />;
            case "case":
              return <Case data={section} />;
            case "tech":
              return <Tech data={section} />;
            case "paymentSection":
              return <PaymentPlans data={section} />;
            case "compare":
              return <Compare data={section} />;
            case "feedback":
              return <Feedback data={section} />;
            case "carousel":
              return <Caraousel data={section} />;
            case "blog":
              return <Blogs data={section} />;
            case "scroll":
              return <Scroll data={section} />;
            case "footerSection":
              return <Footer data={section} />;
            default:
              return null;
          }
        })
      }
    </div>
    </Suspense>
  )

}