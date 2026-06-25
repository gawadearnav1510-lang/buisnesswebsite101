import { useContent } from '../context/ContentContext';
import { CheckCircle, BarChart, Settings, Award } from 'lucide-react';

const Services = () => {
  const { services } = useContent();

  const getSlaInfo = (category: string) => {
    switch (category) {
      case 'web-development':
        return { icon: <Settings className="w-5 h-5 text-violet-600" />, title: "30-Day Support Period", desc: "Every development milestone includes comprehensive post-launch testing, QA, and content support." };
      case 'digital-marketing':
        return { icon: <BarChart className="w-5 h-5 text-violet-600" />, title: "Real-time Metrics Tracking", desc: "Access live dashboard reports mapping conversions, revenue contribution, and cost efficiency." };
      default:
        return { icon: <Award className="w-5 h-5 text-violet-600" />, title: "Proven Methodologies", desc: "Our frameworks are audited regularly and have delivered substantial enterprise value across verticals." };
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 pb-20">
      <div className="max-w-screen-xl mx-auto space-y-24">
        
        {/* Title/Intro */}
        <div className="max-w-3xl space-y-6">
          <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Our Offerings</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white leading-[1.1]">
            Capabilities engineered to scale your enterprise.
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed">
            We don't offer generic templates. We build custom technology and campaign infrastructure customized specifically to your customer journey.
          </p>
        </div>

        {/* Dynamic Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const sla = getSlaInfo(service.category);
            return (
              <div 
                key={service._id} 
                className="bg-white dark:bg-zinc-900 rounded-[32px] p-8 border border-zinc-200/50 dark:border-zinc-800/50 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 bg-violet-50 dark:bg-violet-950 rounded-2xl flex items-center justify-center text-3xl shadow-sm">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 uppercase font-bold tracking-wider">Starts from</span>
                      <div className="text-2xl font-bold text-zinc-900 dark:text-white">${service.price.toLocaleString()}/mo</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-[1px] text-zinc-400">Key Focus Areas</span>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-x-2 text-xs">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="text-zinc-700 dark:text-zinc-300 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SLA Highlight Block */}
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-850/50 flex gap-x-4">
                  <div className="w-10 h-10 bg-violet-50 dark:bg-violet-950/40 rounded-xl flex items-center justify-center shrink-0">
                    {sla.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-zinc-850 dark:text-zinc-200">{sla.title}</h5>
                    <p className="text-[11px] text-zinc-500 leading-snug">{sla.desc}</p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;