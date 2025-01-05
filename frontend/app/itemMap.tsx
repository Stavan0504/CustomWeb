import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import { dataTypes } from "./types/dataTypes";
import { Suspense } from 'react';

// Loading components for different sections
const LoadingSpinner = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-sky-900"></div>
  </div>
);


const Navbar = dynamic(() => import('../components/navbar'), {
  loading: LoadingSpinner,
  ssr: true
});

const Tech = dynamic(() => import('../components/techStack'), {
  loading: LoadingSpinner,
  ssr: false 
});

const Case = dynamic(() => import('../components/caseStudy'), {
  loading: LoadingSpinner
});

const PaymentPlans = dynamic(() => import('../components/Plans'), {
  loading: LoadingSpinner
});

const Compare = dynamic(() => import('../components/compare'), {
  loading: LoadingSpinner
});

const Feedback = dynamic(() => import('../components/feedback'), {
  loading: LoadingSpinner
});

const Carousel = dynamic(() => import('../components/carousel'), {
  loading: LoadingSpinner,
  ssr: false // Carousels typically work better with client-side rendering
});

const Blogs = dynamic(() => import('../components/Blogs'), {
  loading: LoadingSpinner,
  ssr: true // Blog content should be server-side rendered for SEO
});

const Footer = dynamic(() => import('../components/footers'), {
  loading: LoadingSpinner,
  ssr: true
});

const Scroll = dynamic(() => import('../components/scrollSection'), {
  loading: LoadingSpinner,
  ssr: false
});

const componentMap = {
  navbar: Navbar,
  hero: Hero,
  case: Case,
  tech: Tech,
  paymentSection: PaymentPlans,
  compare: Compare,
  feedback: Feedback,
  carousel: Carousel,
  blog: Blogs,
  scroll: Scroll,
  footerSection: Footer
};

export default function ItemMap({ data }: dataTypes) {
  return (
    <div>
      {data.sections.map((section: any, index: number) => {
        const Component = componentMap[section._type as keyof typeof componentMap];
        if (!Component) return null;
        return (
          <Suspense key={`${section._type}-${index}`} fallback={<LoadingSpinner />}>
            <Component data={section} />
          </Suspense>
        );
      })}
    </div>
  );
}