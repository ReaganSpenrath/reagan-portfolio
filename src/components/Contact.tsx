import { Mail, Linkedin, Github, FileDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl text-slate-300 mb-12">
            I'm actively seeking summer internship opportunities in nuclear engineering and research. Let's connect and discuss how I can contribute to your team!
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:reaganspenrath@gmail.com"
              className="flex items-center justify-center px-6 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="mr-3" size={24} />
              <span className="font-medium">Email Me</span>
            </a>

            <a
              href="https://linkedin.com/in/reagan-spenrath-rps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-4 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Linkedin className="mr-3" size={24} />
              <span className="font-medium">LinkedIn</span>
            </a>

            <div className="flex items-center justify-center px-6 py-4 bg-slate-700 rounded-lg">
              <span className="font-medium text-cyan-300">(979) 616-1515</span>
            </div>

            <button
              onClick={() => alert('CV download functionality can be implemented')}
              className="flex items-center justify-center px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <FileDown className="mr-3" size={24} />
              <span className="font-medium">Download Resume</span>
            </button>
          </div>

          <div className="pt-8 border-t border-slate-700">
            <p className="text-slate-400">
              © 2026 Nuclear Engineering Portfolio. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
