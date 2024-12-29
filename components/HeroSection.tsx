import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Providing Quality Scaffolding Solutions for Every Job
            </h1>
            <p className="text-gray-600 mb-8">
              Safety Works Scaffold is your trusted partner for all your scaffolding needs.
              With a commitment to excellence and a focus on safety, we deliver top-notch
              solutions for residential and large-scale projects.
            </p>
            <button className="bg-teal-400 text-white px-8 py-3 rounded-md hover:bg-teal-500 transition-colors">
              Contact
            </button>
          </div>
          <div className="relative h-[400px]">
            <Image 
              src="/api/placeholder/800/600"
              alt="Scaffolding"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}