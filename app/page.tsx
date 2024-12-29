import HeroSection from '@/components/HeroSection'
import ServicesGrid from '@/components/ServicesGrid'
import FeaturedArticles from '@/components/FeaturedArticles'
import ComplianceSection from '@/components/ComplianceSection'
import CommercialSection from '@/components/CommercialSection'
import ResidentialSection from '@/components/ResidentialSection'
import JobGallery from '@/components/JobGallery'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <div className="container mx-auto px-4">
        <ServicesGrid />
        <FeaturedArticles />
        <ComplianceSection />
        <CommercialSection />
        <ResidentialSection />
        <JobGallery />
        <ContactCTA />
      </div>
    </main>
  )
}