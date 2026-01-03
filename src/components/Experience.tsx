import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Undergraduate Research Assistant',
      company: 'CASMR (Center for Advanced Small Modular and Micro Nuclear Reactors)',
      period: 'Jan 2024 - Present',
      description: 'Conducting experimental research on molten salt natural circulation loops. Working on experimental setup utilizing Particle Image Velocimetry (PIV), bubble injection techniques, and maintaining safe laboratory operations.',
      achievements: [
        'Manufactured fiber optic temperature probes for heat pipe and molten salt loop applications',
        'Processed and analyzed images in preparation for PIV analysis of fluid dynamics',
        'Developed hands-on expertise in experimental thermal-hydraulic systems for advanced reactors',
        'Contributed to small modular reactor research initiatives',
      ],
    },
    {
      title: 'Repair Technician',
      company: 'SilverBack Septic',
      period: 'Jan 2019 - Dec 2021',
      description: 'Performed repairs and maintenance on septic tank systems while developing strong customer service and technical skills in industrial systems.',
      achievements: [
        'Developed exceptional customer service and interpersonal communication skills',
        'Managed waste product disposal and regulatory compliance',
        'Built reliability and attention to detail in technical maintenance work',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Experience</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-cyan-600"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-start mb-2 md:mb-0">
                  <Briefcase className="text-cyan-600 mr-3 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{exp.title}</h3>
                    <p className="text-lg text-cyan-600 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center text-slate-500">
                  <Calendar size={18} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-4 leading-relaxed">{exp.description}</p>

              <div className="mt-4">
                <p className="text-sm font-semibold text-slate-700 mb-2">Key Achievements:</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-cyan-600 mr-2 flex-shrink-0">▸</span>
                      <span className="text-slate-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
