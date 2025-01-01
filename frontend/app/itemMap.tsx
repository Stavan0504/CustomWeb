import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Case from "./components/caseStudy";
import PaymentPlans from "./components/Plans";
import Tech from "./components/techStack";
import Compare from "./components/compare";
import Feedback from "./components/feedback";
import Caraousel from "./components/carousel";
import Blogs from "./components/Blogs";
import Footer from "./components/footers";
import Scroll from "./components/scrollSection";
export default function ItemMap({ data }: any) {
  return (
    <div>
      {
        data.sections.map((section: any) => {
          console.log(section._type)
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
  )

}