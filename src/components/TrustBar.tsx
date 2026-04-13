import { Shield, Clock, Award, Wrench, MapPin, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  { icon: Clock, label: 'Same Day Repair', desc: 'Most repairs done in 30-60 minutes' },
  { icon: Award, label: 'Certified Technicians', desc: 'Apple-trained repair experts' },
  { icon: Shield, label: 'Genuine Apple Parts', desc: 'Original quality components' },
  { icon: Wrench, label: 'Warranty on Service', desc: 'Up to 6 months service warranty' },
  { icon: MapPin, label: 'Free Pickup & Drop', desc: 'Complimentary pickup and delivery' },
  { icon: Zap, label: 'Express Service', desc: 'Priority service for urgent repairs' },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 px-4 sm:px-6" ref={ref}>
      <div className="container-narrow">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center text-center gap-3 group transition-all duration-300 hover:scale-105`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animate-on-scroll {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
      `}</style>
    </section>
  );
};

export default TrustBar;