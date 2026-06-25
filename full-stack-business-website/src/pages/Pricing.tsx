import { useContent } from '../context/ContentContext';
import { Check, Flame, Star, ShieldCheck } from 'lucide-react';

const Pricing = () => {
  const { services } = useContent();

  return (
    <div className="pt-24 min-h-screen bg-zinc-50 dark:bg-zinc-950 px-6 pb-20">
      <div className="max-w-screen-xl mx-auto space-y-24">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="text-xs font-mono uppercase tracking-[2px] text-violet-600 dark:text-violet-400">Simple Transparent Pricing</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Flexible plans for every growth stage</h1>
          <p className="text-zinc-500 text-lg">No hidden administration fees. Scale your monthly campaigns up or down directly with 30 days notice.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const isPopular = index === 1; // Highlight the middle plan as popular
            return (
              <div 
                key={service._id} 
                className={`rounded-[32px] p-8 border relative flex flex-col justify-between transition-all ${
                  isPopular 
                    ? 'bg-zinc-900 text-white border-violet-600 shadow-xl shadow-violet-600/10' 
                    : 'bg-white dark:bg-zinc-900 border-zinc-200/50 dark:border-zinc-800/50'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-violet-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full flex items-center gap-x-1">
                    <Flame className="w-3.5 h-3.5" /> Most Popular
                  </span>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-zinc-400">{service.category}</span>
                    <h3 className="text-2xl font-bold mt-1">{service.title}</h3>
                  </div>

                  <div className="flex items-baseline gap-x-2 mb-8">
                    <span className="text-4xl md:text-5xl font-bold">${service.price.toLocaleString()}</span>
                    <span className={isPopular ? 'text-zinc-400 text-sm' : 'text-zinc-500 text-sm'}>/mo</span>
                  </div>

                  <p className={`text-sm mb-8 leading-relaxed ${isPopular ? 'text-zinc-300' : 'text-zinc-500'}`}>
                    {service.description}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-x-3 text-xs font-medium">
                        <Check className={`w-4 h-4 shrink-0 ${isPopular ? 'text-violet-400' : 'text-emerald-500'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <button 
                    className={`w-full py-4 rounded-2xl font-semibold text-sm transition-all active:scale-95 ${
                      isPopular 
                        ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-lg' 
                        : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white'
                    }`}
                  >
                    Select Plan &amp; Consult
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-x-1.5 text-[10px] text-zinc-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> 30-Day Money-Back SLA Guarantee
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table / Callout */}
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-[32px] p-8 md:p-12 border border-zinc-200/50 dark:border-zinc-800/50 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <div className="flex items-center gap-x-1.5 text-amber-500 text-sm font-semibold">
              <Star className="w-4 h-4 fill-current" /> Enterprise custom solutions
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Need a custom plan or end-to-end consulting?</h3>
            <p className="text-zinc-500 text-sm max-w-[620px]">
              For custom requirements, multi-market rollouts, or deep headless platform engineering, let our specialists design a custom solution mapping exactly to your operating metrics.
            </p>
          </div>
          <div className="md:col-span-4 text-left md:text-right">
            <button className="px-8 py-4 bg-zinc-900 hover:bg-black text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 rounded-full font-semibold transition-all">
              Schedule Custom Strategy Audit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;