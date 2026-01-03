import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-800 mb-4 text-center">About Me</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am a dedicated undergraduate nuclear engineering student at Texas A&M University with a strong passion for experimental research and advanced reactor technologies. Currently working as an undergraduate research assistant at CASMR, I'm developing hands-on expertise in molten salt systems and experimental fluid dynamics.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              My focus is on gaining practical engineering experience through research, particularly in small modular reactors and advanced thermal-hydraulic systems that will shape the future of clean energy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-cyan-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <GraduationCap className="text-cyan-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Education</h3>
                  <p className="text-slate-600">
                    B.S. in Nuclear Engineering, Texas A&M University<br />
                    <span className="text-sm text-slate-500">Jan 2025 - May 2027 | GPA: 3.2</span><br />
                    A.S. in Computer Science, Blinn College<br />
                    <span className="text-sm text-slate-500">Graduated Dec 2024</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-cyan-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <Award className="text-cyan-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Memberships & Awards</h3>
                  <p className="text-slate-600">
                    American Nuclear Society (ANS)<br />
                    National Honor Society (2021)<br />
                    College Basketball (Mary Hardin Baylor)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-cyan-600 hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <BookOpen className="text-cyan-600 mr-4 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Certification</h3>
                  <p className="text-slate-600">
                    Laser Safety Training<br />
                    <span className="text-sm text-slate-500">Texas A&M Environmental Health & Safety</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
