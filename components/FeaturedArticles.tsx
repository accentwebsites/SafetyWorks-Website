import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: "Scaffolding Safety",
    description: "Understanding the importance of scaffolding safety.",
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    title: "Project Management",
    description: "Best practices for managing scaffolding projects.",
    image: "/api/placeholder/400/300",
    link: "#"
  }
]

export default function FeaturedArticles() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-8">Featured Articles</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <div className="mb-4 h-48 relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-semibold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-4">{article.description}</p>
            <Link href={article.link} className="text-teal-400 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}