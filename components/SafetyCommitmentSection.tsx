import Image from 'next/image';
import Link from 'next/link';

interface SafetyCommitmentSectionProps {
  className?: string;
}

export default function SafetyCommitmentSection({ className = '' }: SafetyCommitmentSectionProps) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${className}`}>
      <div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto">
        <Image
          src="/safety-workers.jpg" // Add this image to your public folder
          alt="Two workers safely operating on scaffolding"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="order-1 lg:order-2 flex flex-col justify-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Committed to safety every step of the way
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          At SafetyWorks, safety and quality are at the core of everything we do. Our
          skilled team is focused on providing top-tier scaffolding solutions
          customized to meet your unique requirements.
        </p>

        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-teal-500 flex-shrink-0" />
            <span>Specialize in residential and commercial scaffolding services</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-teal-500 flex-shrink-0" />
            <span>Dedicated to maintaining the highest health and safety standards on every site</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 w-5 h-5 rounded-full bg-teal-500 flex-shrink-0" />
            <span>Deliver our successful projects through onsite results</span>
          </li>
        </ul>

        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors w-fit"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}