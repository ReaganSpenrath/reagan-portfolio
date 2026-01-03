import { ChevronDown, Atom } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Atom size={80} className="text-cyan-400 animate-pulse" />
            <div className="absolute inset-0 animate-spin-slow">
              <Atom size={80} className="text-cyan-300 opacity-30" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Reagan Spenrath
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-200 mb-4 animate-fade-in-delay">
          Nuclear Engineering Undergraduate
        </p>

        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
          Seeking summer internship opportunities in nuclear engineering and research
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Learn More
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
}
