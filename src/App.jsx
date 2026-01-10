import React from 'react';
import { 
  Zap, 
  Settings, 
  Globe, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Target
} from 'lucide-react';

const App = () => {
  const services = [
    {
      title: "AI-Assisted Websites",
      description: "Modern, high-performance web platforms integrated with intelligent search and automated content workflows.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Business Automation",
      description: "Eliminate repetitive tasks by connecting your software tools into a single, seamless automated ecosystem.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Process Optimization",
      description: "Audit and redesign of internal workflows to reduce overhead and increase team output without new hires.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Practical Tech for SMBs",
      description: "Right-sized technology solutions designed for local businesses that need results, not complex jargon.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const caseStudies = [
    {
      tag: "Process Automation",
      title: "HVAC Dispatch Transformation",
      problem: "Manual scheduling for 12 technicians led to 20% missed appointments and billing delays.",
      solution: "Implemented an automated SMS dispatch and digital inventory system integrated with QuickBooks.",
      outcome: "Zero missed appointments in 6 months and a 40% reduction in administrative billing time."
    },
    {
      tag: "AI Integration",
      title: "Retail Customer Support AI",
      problem: "Local specialty bakery was losing sales due to 24+ hour response times on custom order inquiries.",
      solution: "Built a custom AI agent trained on product catalogs and dietary restrictions to handle initial vetting.",
      outcome: "Instant response rate for 80% of queries and a 15% increase in converted custom orders."
    },
    {
      tag: "Web Experience",
      title: "Regional Construction Hub",
      problem: "Outdated site didn't display correctly on mobile, making it hard for site managers to upload project photos.",
      solution: "Developed a mobile-first field-to-office portal with instant image compression and auto-tagging.",
      outcome: "Project reporting frequency increased by 300% and lead generation grew by 22%."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-indigo-100">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-screen-xl mx-auto px-5 h-16 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-slate-900">MIDWEST FLOW AI<span className="text-indigo-600">.</span></span>
          <a href="#contact" className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95">
            Get Started
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-40">
        <div className="max-w-screen-xl mx-auto px-5 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wide uppercase mb-6">
              <Target className="w-3.5 h-3.5" />
              Strategic Technology Partner
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              I build systems that make small businesses <span className="text-indigo-600">run like giants.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
              Specializing in improving process and workflows, powered by AI for Midwest contractors, retailers, and service providers. No jargon—just ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95">
                Contact Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-slate-100 text-slate-700 rounded-xl text-lg font-bold transition-all active:scale-95">
                View Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-indigo-500 rounded-full" />
        </div>
      </section>

      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
            <div className="h-1.5 w-20 bg-indigo-600 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
                Designed for the backbone of the Midwest economy.
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                I help business owners who are tired of fighting with their software. My clients aren't tech giants—they're the companies that keep our towns running.
              </p>
              <ul className="space-y-4">
                {[
                  "Auto & Motorcycle Garages",
                  "Small and Construction Companies",
				  "Contractors",
                  "Local Retail & Bakeries",
                  "Solo Operators and SMBs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <blockquote className="text-2xl font-medium leading-relaxed mb-8 italic">
                  "Most consultants speak a language I don't understand. This was the first time someone delivered a tool that actually saved me 10 hours a week without a learning curve."
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-white">MK</div>
                  <div>
                    <div className="font-bold">Mike Kozlowski</div>
                    <div className="text-slate-400 text-sm italic">Owner, Koz's Custom Cycles</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-screen-xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Results (Demo)</h2>
            <p className="text-slate-500">Conceptual projects illustrating potential impact</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200">
                <div className="p-8 flex-grow">
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{study.tag}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-6 leading-tight">{study.title}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase mb-1">Problem</h4>
                      <p className="text-slate-700">{study.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-400 uppercase mb-1">Solution</h4>
                      <p className="text-slate-700">{study.solution}</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-xl border-l-4 border-indigo-600">
                      <h4 className="text-sm font-bold text-indigo-700 uppercase mb-1">Outcome</h4>
                      <p className="text-slate-900 font-semibold">{study.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-screen-xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's audit your workflow.</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to stop losing time to bad systems? Let's talk about a solution that works as hard as you do.
          </p>
          <div className="flex flex-col items-center gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
              <a href="mailto:consultant@placeholder.com" className="flex items-center justify-between p-6 bg-slate-800 rounded-2xl hover:bg-indigo-600 transition-all group">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                  <span className="font-bold">Email Me</span>
                </div>
                <ChevronRight className="w-5 h-5 opacity-50" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 bg-slate-800 rounded-2xl hover:bg-[#0077b5] transition-all group">
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-[#0077b5] group-hover:text-white" />
                  <span className="font-bold">Connect on LinkedIn</span>
                </div>
                <ChevronRight className="w-5 h-5 opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-screen-xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-bold text-lg tracking-tight">MIDWEST FLOW AI<span className="text-indigo-600">.</span></div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Serving the Heartland.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;