import Image from 'next/image'

const complianceFeatures = [
  {
    title: "Strict Adherence to Regulations",
    description: "We follow all relevant Australian Standards, including AS/NZS 4576 and AS/NZS 1576, ensuring that our scaffolding meets the necessary safety requirements."
  },
  {
    title: "Comprehensive Training & Certification",
    description: "Our team is fully trained and certified in the latest scaffolding safety practices, ensuring each project is handled with expert care."
  },
  {
    title: "Ongoing Safety Inspections",
    description: "Regular inspections are conducted to maintain the highest level of safety and compliance throughout the project lifecycle."
  }
]

export default function ComplianceSection() {
  return (
    <section className="py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Compliance and Safety Commitment</h2>
          <p className="text-gray-600 mb-8">
            At Saftey Works Scaffolding, we pride ourselves on adhering to the highest
            industry standards for scaffolding safety and compliance. We ensure that all
            projects are carried out with precision, prioritizing the safety of our clients,
            employees, and the public.
          </p>
          <div className="space-y-6">
            {complianceFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <div className="w-2 h-2 bg-teal-400 rounded-full" />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-400 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-8 bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors">
            Learn More
          </button>
        </div>
        <div className="relative h-[500px]">
          <Image
            src="/api/placeholder/600/500"
            alt="Safety compliance"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}