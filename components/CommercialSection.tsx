const features = [
    {
      title: "Innovative Solutions for Any Scaffolding Challenge",
      description: "Whatever your project's complexity, we're prepared to provide a scaffolding solution. From challenging layouts to intricate designs, our team offers tailored scaffolding systems, ensuring safe and efficient access throughout construction."
    },
    {
      title: "Protection of the Area Around Your Site",
      description: "Safety goes beyond the worksite. Our scaffolding protects the surrounding area, including pedestrians, buildings, and public spaces. With debris netting, edge protection, and secure walkways, we keep the project environment safe and undisturbed."
    },
    {
      title: "Timely Installation to Keep Your Project on Schedule",
      description: "We know commercial construction moves fast, so our scaffolding installation is quick and dependable. Our team aligns with your timeline to ensure scaffolding is ready when needed, reducing delays and keeping your project on track."
    }
  ]
  
  export default function CommercialSection() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Commercial Scaffolding</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }