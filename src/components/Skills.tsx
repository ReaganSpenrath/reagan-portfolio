import { Code, Wrench, Brain, FileText } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'MATLAB', level: 82 },
        { name: 'CAD Software', level: 78 },
      ],
    },
    {
      icon: Brain,
      title: 'Research & Engineering',
      skills: [
        { name: 'Experimental Design', level: 88 },
        { name: 'Thermal-Hydraulics', level: 82 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Image Processing', level: 80 },
        { name: 'PIV Techniques', level: 82 },
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Equipment',
      skills: [
        { name: 'MOOSE Framework', level: 75 },
        { name: 'Fiber Optic Systems', level: 80 },
        { name: 'Thermal Instrumentation', level: 85 },
        { name: 'Laboratory Safety', level: 90 },
        { name: '3D Modeling', level: 78 },
      ],
    },
    {
      icon: FileText,
      title: 'Professional Skills',
      skills: [
        { name: 'Technical Writing', level: 85 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Communication', level: 87 },
        { name: 'Attention to Detail', level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">Skills</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                    <Icon className="text-cyan-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-cyan-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-cyan-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
