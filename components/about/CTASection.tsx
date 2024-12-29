import Link from 'next/link';

interface CTASectionProps {
  className?: string;
}

export default function CTASection({ className = '' }: CTASectionProps) {
  return (
    <section className={`bg-teal-500 rounded-2xl text-white ${className}`}>
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Get a Free Quote Today!
        </h2>
        
        <p className="text-lg mb-8 opacity-90">
          Experience the highest quality scaffolding services
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-500 rounded-md hover:bg-gray-100 transition-colors font-semibold"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}