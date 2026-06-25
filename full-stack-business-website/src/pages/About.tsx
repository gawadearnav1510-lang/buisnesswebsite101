import { useContent } from '../context/ContentContext';
import { Target, Users, Award, Landmark } from 'lucide-react';

const About = () => {
  const { content } = useContent();

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 pb-20">
      <div className="max-w-screen-xl mx-auto space-y-24">
        
        {/* Title/Intro */}
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">About the agency</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            We build high-performance engines for high-growth brands.
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
            {content.about?.description}
          </p>
        </div>

        {/* Culture Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Target className="w-6 h-6 text-violet-600" />, title: "Hyper-focused", desc: "We align every campaign, line of code, and creative deliverable with your specific growth targets." },
            { icon: <Users className="w-6 h-6 text-violet-600" />, title: "Direct Collaboration", desc: "No red tape or account managers. You collaborate directly with elite strategists and builders." },
            { icon: <Award className="w-6 h-6 text-violet-600" />, title: "Award Winning", desc: "Recognized as a leading boutique agency for web engineering and conversion rate design." },
            { icon: <Landmark className="w-6 h-6 text-violet-600" />, title: "Global Footprint", desc: "With specialists across 4 continents, we offer round-the-clock speed, coverage, and support." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200/50 dark:border-zinc-800/50 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-violet-50 dark:bg-violet-950 rounded-2xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Executive Team */}
        <div className="space-y-12">
          <div className="max-w-2xl space-y-4">
            <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">The leadership</div>
            <h2 className="text-3xl font-bold tracking-tight">The Minds Behind Nexus</h2>
            <p className="text-zinc-500">Elite performance marketing specialists, creative directors, and senior web engineers dedicated to scaling your business with precision.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Elena Voss", role: "Co-Founder & CEO", img: "https://randomuser.me/api/portraits/women/44.jpg" },
              { name: "Christian Vance", role: "Co-Founder & Growth Lead", img: "https://randomuser.me/api/portraits/men/86.jpg" },
              { name: "David Kim", role: "VP of Product Engineering", img: "https://randomuser.me/api/portraits/men/32.jpg" }
            ].map((member, idx) => (
              <div key={idx} className="group overflow-hidden rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-sm text-zinc-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;