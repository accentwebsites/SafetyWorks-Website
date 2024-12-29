import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SafetyCommitmentSection from "@/components/SafetyCommitmentSection";
import ComplianceSection from "@/components/ComplianceSection";
import TimelineSection from "@/components/TimelineSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

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