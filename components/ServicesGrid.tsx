import Image from 'next/image'
import { ServiceCard } from '@/components/ServiceCard'

const services = [
  {
    icon: "/icons/residential.svg",
    title: "Residential Scaffolding",
    description: "Quality scaffolding for residential projects."
  },
  {
    icon: "/icons/insurance.svg",
    title: "Insurance Solutions",
    description: "Comprehensive coverage for your scaffolding needs."
  },
  {
    icon: "/icons/compliance.svg",
    title: "OHS Compliance",
    description: "Ensuring safety and compliance on every job."
  },
  {
    icon: "/icons/photos.svg",
    title: "Job Photos",
    description: "Explore our recent project showcases."
  }
]

const articles = [
  {
    icon: "/icons/safety.svg",
    title: "Safety Tips",
    description: "Essential safety practices for scaffolding work."
  },
  {
    icon: "/icons/insights.svg",
    title: "Project Insights",
    description: "Learn from our completed projects and challenges."
  },
  {
    icon: "/icons/news.svg",
    title: "Industry News",
    description: "Stay updated with the latest industry trends."
  },
  {
    icon: "/icons/stories.svg",
    title: "Client Stories",
    description: "Hear from our satisfied clients."
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-8">Latest Articles</h2>
            <div className="grid gap-6">
              {articles.map((article, index) => (
                <ServiceCard key={index} {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}