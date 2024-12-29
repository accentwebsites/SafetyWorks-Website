import Image from "next/image";
import HeroSection from "@/components/about/HeroSection";
import SafetyCommitmentSection from "@/components/about/SafetyCommitmentSection";
import ComplianceSection from "@/components/about/ComplianceSection";
import TimelineSection from "@/components/about/TimelineSection";
import TeamSection from "@/components/about/TeamSection";
import TestimonialsSection from "@/components/about/TestimonialsSection";
import CTASection from "@/components/about/CTASection";

export const metadata = {
  title: 'About Us - Safety Works Scaffold',
  description: 'Learn about our commitment to providing quality scaffolding services with a focus on safety and excellence.',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection />
        
        <SafetyCommitmentSection 
          className="mt-20 lg:mt-32"
        />
        
        <ComplianceSection 
          className="mt-20 lg:mt-32"
        />
        
        <TimelineSection 
          className="mt-20 lg:mt-32"
        />
        
        <TeamSection 
          className="mt-20 lg:mt-32"
        />
        
        <TestimonialsSection 
          className="mt-20 lg:mt-32"
        />
        
        <CTASection 
          className="mt-20 lg:mt-32 mb-20"
        />
      </div>
    </main>
  );
}