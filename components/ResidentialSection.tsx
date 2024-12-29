export default function ResidentialSection() {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Residential Scaffolding</h2>
              <p className="text-gray-600 mb-6">
                Saftey Works Scaffolding provides reliable scaffolding for residential projects, from new
                builds to renovations. Our custom scaffolding solutions ensure safety and efficiency,
                keeping your construction on schedule while meeting industry standards.
              </p>
              <button className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors">
                Learn More
              </button>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Insurance Scaffolding</h2>
              <p className="text-gray-600 mb-6">
                We offer fast, secure insurance scaffolding for properties needing repairs after damage.
                Working closely with insurers and contractors, we ensure quick setup and safe access,
                minimizing disruptions during restoration.
              </p>
              <button className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  }