interface ComplianceSectionProps {
    className?: string;
  }
  
  export default function ComplianceSection({ className = '' }: ComplianceSectionProps) {
    return (
      <section className={`${className}`}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Compliance and Standards at Safety Works Scaffold
        </h2>
  
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          At Safety Works Scaffold, we are dedicated to providing high-quality
          scaffolding solutions that comply with all relevant industry laws and safety
          standards. Our focus on legal compliance ensures that every project is
          delivered with the utmost care for safety and efficiency.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Legal Compliance */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Legal Compliance</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our company strictly adheres to the Work Health and Safety Act 2011 and Work Health and
              Safety Regulations 2017 which guides our operation practices, project execution, and staff training
              programs.
            </p>
          </div>
  
          {/* Commitment to Health and Safety */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Commitment to Health and Safety</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our scaffolding is built to last, ensuring safety and efficiency for all projects.
              We maintain rigorous safety standards and regular inspections to ensure compliance
              with all regulations.
            </p>
          </div>
        </div>
  
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Safety Stats or Highlights */}
          {['100%', '15+', '0'].map((stat, index) => (
            <div key={index} className="bg-teal-500 text-white rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">{stat}</div>
              <div className="text-sm">
                {index === 0 && 'Compliance Rate'}
                {index === 1 && 'Years Experience'}
                {index === 2 && 'Safety Incidents'}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }