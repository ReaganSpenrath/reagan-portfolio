import { Atom, Zap, Shield, Cpu } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      icon: Atom,
      title: 'Molten Salt Natural Circulation Loop Research',
      description: 'Designed and constructed experimental setup for studying natural circulation dynamics in molten salt systems relevant to advanced reactor designs.',
      technologies: ['PIV', 'Fiber Optics', 'MATLAB', 'CAD'],
      highlights: [
        'Manufactured custom fiber optic temperature probes for high-temperature applications',
        'Developed experimental protocols for PIV analysis in thermal systems',
        'Contributed to understanding of passive heat removal in SMRs',
      ],
    },
    {
      icon: Zap,
      title: 'Heat Pipe Instrumentation & Testing',
      description: 'Developed instrumentation and experimental methods for characterizing heat pipe performance in advanced reactor concepts.',
      technologies: ['Fiber Optics', 'Thermal Analysis', 'Image Processing', 'Python'],
      highlights: [
        'Engineered custom temperature measurement systems for extreme conditions',
        'Processed thermal imaging data for performance evaluation',
        'Supported research into passive safety systems',
      ],
    },
    {
      icon: Shield,
      title: 'Image Analysis & Data Processing',
      description: 'Developed image processing workflows for extracting fluid dynamics data from experimental PIV studies.',
      technologies: ['Python', 'Image Processing', 'Data Analysis', 'MATLAB'],
      highlights: [
        'Processed experimental images for quantitative PIV analysis',
        'Created automated data extraction workflows',
        'Supported publication-quality research visualization',
      ],
    },
    {
      icon: Cpu,
      title: 'Small Modular Reactor Research Support',
      description: 'Contributing to ongoing research initiatives exploring advanced reactor concepts and thermal-hydraulic behavior.',
      technologies: ['Experimental Design', 'CAD', 'Technical Writing', 'C++'],
      highlights: [
        'Participated in SMR research at premier research facility',
        'Gained expertise in experimental nuclear engineering',
        'Developed strong technical foundation for future research',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Projects</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-slate-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <Icon className="text-cyan-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                </div>

                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-slate-700 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-2">Key Highlights:</p>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <span className="text-cyan-600 mr-2 flex-shrink-0">✓</span>
                        <span className="text-slate-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
