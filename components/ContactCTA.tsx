import Link from 'next/link'

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get a Free Quote Today!</h2>
        <p className="text-gray-600 mb-8">Experience the highest quality scaffolding services.</p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/quote"
            className="bg-teal-400 text-white px-8 py-3 rounded-md hover:bg-teal-500 transition-colors"
          >
            Request Quote
          </Link>
          <Link 
            href="/services"
            className="border border-teal-400 text-teal-400 px-8 py-3 rounded-md hover:bg-teal-50 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}