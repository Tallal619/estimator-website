// src/app/page.tsx
import HeroSection from "../components/hero-section";
import ServiceCard from "../components/service-card";

export const metadata = {
  title: "Construction Estimator",
  description: "Get accurate construction project estimates.",
  openGraph: {
    title: "Construction Estimator",
    description: "Get accurate construction project estimates.",
    url: "http://yourwebsite.com",
    images: [
      {
        url: "/images/hero.jpg",
        width: 800,
        height: 600,
        alt: "Hero Image",
      },
    ],
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <ServiceCard title="Residential Estimation" description="Get accurate estimates for your home construction." />
          <ServiceCard title="Commercial Estimation" description="We offer commercial construction estimation services." />
          <ServiceCard title="Renovation Estimation" description="Renovating your space? Get a precise cost breakdown." />
        </div>
      </section>
    </div>
  );
}
