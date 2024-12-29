import Image from 'next/image';
import Link from 'next/link';
import { X, Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamSectionProps {
  className?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Smith',
    role: 'Project Manager',
    description: 'Dedicated to ensuring the highest safety standards on every job site.',
    image: '/team/john-smith.jpg' // Add placeholder image to public folder
  },
  {
    name: 'Jane Doe',
    role: 'Safety Officer',
    description: 'Bringing expertise in the latest scaffolding technologies and techniques.',
    image: '/team/jane-doe.jpg'
  },
  {
    name: 'Michael Johnson',
    role: 'Technical Specialist',
    description: 'Committed to providing exceptional service and building strong client relationships.',
    image: '/team/michael-johnson.jpg'
  }
];

export default function TeamSection({ className = '' }: TeamSectionProps) {
  return (
    <section className={`${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet the team</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          With over 15 years of experience in managing complex projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.name}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div className="relative w-24 h-24 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-3">{member.role}</p>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
              {member.description}
            </p>

            <div className="flex gap-4 mt-auto">
              <Link href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <X className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-teal-500 transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}