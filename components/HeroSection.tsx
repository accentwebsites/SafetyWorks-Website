import Image from 'next/image';

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = '' }: HeroSectionProps) {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${className}`}>
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Providing Quality Scaffolding Services for Your Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          At Safety Works Scaffold, we are committed to delivering top-quality
          scaffolding solutions to meet your needs. With a focus on health, safety and
          quality, we ensure that our scaffolding is reliable and meets the highest
          industry standards. Our team of experts is dedicated to providing exceptional
          service and working efficiently on every job site.
        </p>
      </div>
      
      <div className="relative aspect-square lg:aspect-auto">
        <Image
          src="/scaffolding-worker.jpg" // You'll need to add this image to your public folder
          alt="Professional scaffolder working on a construction site"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </section>
  );
}