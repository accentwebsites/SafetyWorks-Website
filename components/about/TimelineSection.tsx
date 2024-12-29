import { FC } from 'react';

interface TimelineSectionProps {
  className?: string;
}

const timelineEvents = [
  {
    title: 'Our Beginnings',
    description: 'Established in 2010, Safety Works Scaffold started as a small family-owned business.'
  },
  {
    title: 'Expanding Horizons',
    description: 'In 2015, we expanded our operations and began serving larger commercial projects.'
  },
  {
    title: 'Commitment to Safety',
    description: 'Safety has always been our top priority, and we continuously invest in training and equipment.'
  },
  {
    title: 'Seamless scaffoldsolution',
    description: 'Over the years, we have built a reputation for delivering exceptional scaffolding solutions.'
  }
];

const TimelineSection: FC<TimelineSectionProps> = ({ className = '' }) => {
  return (
    <section className={`${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">
        Building a Legacy: Saftey Works Scaffold Timeline
      </h2>
      
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;