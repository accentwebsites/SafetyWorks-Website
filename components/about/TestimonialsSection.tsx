import Image from 'next/image';

interface Testimonial {
  text: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  rating: number;
  platform: string;
}

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Safety Works Scaffold provided exceptional service and delivered high-quality scaffolding for our project. We highly recommend them.",
    author: {
      name: "John Doe",
      role: "Project Manager",
      company: "ABC Construction"
    },
    rating: 5,
    platform: "Workflow"
  },
  {
    text: "Working with Safety Works Scaffold was a breeze. Their team was professional, efficient, and ensured a safe working environment throughout the project.",
    author: {
      name: "Jane Smith",
      role: "Site Supervisor",
      company: "XYZ Builders"
    },
    rating: 5,
    platform: "Workflow"
  }
];

export default function TestimonialsSection({ className = '' }: TestimonialsSectionProps) {
  return (
    <section className={`${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Happy Clients</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Read what our clients have to say about us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {testimonial.text}
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700" />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.author.role}, {testimonial.author.company}
                  </p>
                </div>
              </div>

              {/* Platform Logo */}
              <div className="text-sm font-medium">
                {testimonial.platform}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}