import { CheckCircle, Zap, HeadphonesIcon, MapPin, DollarSign, ShieldCheck, Sparkles, TrendingUp, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState, useRef } from 'react';

const reasons = [
  { 
    icon: Zap, 
    title: '30-Minute Express Repairs', 
    desc: 'Most screen and battery repairs completed while you wait.',
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    icon: ShieldCheck, 
    title: '6-Month Warranty', 
    desc: 'Every repair backed by our comprehensive service warranty.',
    color: 'from-green-400 to-emerald-500'
  },
  { 
    icon: DollarSign, 
    title: 'Transparent Pricing', 
    desc: 'No hidden costs. Free diagnosis before every repair.',
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    icon: MapPin, 
    title: 'Doorstep Pickup', 
    desc: 'Free pickup and delivery across Bangalore.',
    color: 'from-pink-400 to-rose-500'
  },
  { 
    icon: HeadphonesIcon, 
    title: '24/7 Support', 
    desc: 'Reach us anytime via call or WhatsApp.',
    color: 'from-purple-400 to-indigo-500'
  },
  { 
    icon: CheckCircle, 
    title: '10,000+ Repairs Done', 
    desc: 'Trusted by thousands of customers across Bangalore.',
    color: 'from-teal-400 to-cyan-500'
  },
];

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const WhyChoose = () => {
  const ref = useScrollAnimation();

  return (
    <section id="why-us" className="relative section-padding overflow-hidden" ref={ref} aria-label="Why Choose FixurDevice">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-10 w-64 sm:w-72 h-64 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-10 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-narrow relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll px-4">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Why We're The Best</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-gradient-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Why Choose FixurDevice?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Bangalore's most trusted iPhone service center with the fastest turnaround times and highest customer satisfaction.
          </p>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 animate-on-scroll px-4">
          {[
            { num: 10000, suffix: '+', label: 'Happy Customers', icon: '😊' },
            { num: 98, suffix: '%', label: 'Success Rate', icon: '🎯' },
            { num: 30, suffix: ' min', label: 'Avg Repair Time', icon: '⚡' },
          ].map((s, i) => (
            <div 
              key={s.label} 
              className={`animate-on-scroll stagger-${i + 1} glass rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-10 group hover-glow hover-lift relative overflow-hidden`}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="text-3xl sm:text-4xl">{s.icon}</div>
                  <TrendingUp className="w-4 sm:w-6 h-4 sm:h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-1 sm:mb-2">
                  <Counter target={s.num} suffix={s.suffix} />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20 px-4 animate-on-scroll">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`animate-on-scroll stagger-${(i % 4) + 1} group relative`}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-lg sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />

              {/* Card */}
              <div className="relative glass rounded-lg sm:rounded-2xl p-5 sm:p-7 md:p-8 hover-glow hover-lift h-full transition-all duration-300 overflow-hidden group-hover:scale-105 border border-white/10 group-hover:border-primary/50">
                
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-12 sm:w-14 h-12 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-3 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                    <r.icon className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {r.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {r.desc}
                  </p>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-500 w-0 group-hover:w-full transition-all duration-300 rounded-r" />
                </div>

                {/* Decorative Element */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-on-scroll px-4">
          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border border-primary/30 relative overflow-hidden group">
            
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-primary animate-spin flex-shrink-0" style={{ animationDuration: '3s' }} />
                <span className="text-xs sm:text-sm font-bold text-primary">SPECIAL OFFER</span>
                <Sparkles className="w-4 sm:w-6 h-4 sm:h-6 text-primary animate-spin flex-shrink-0" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-3 sm:mb-4">
                Ready to Experience Excellence?
              </h3>
              
              <p className="text-xs sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                Join 10,000+ satisfied customers. Get your device fixed by experts today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-2">
                <a
                  href="tel:9343584460"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 group/btn w-full sm:w-auto"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Call Now</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform hidden sm:inline">→</span>
                </a>
                
                <a
                  href="https://wa.me/919663360775?text=Hi%20I%20need%20iPhone%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg border-2 border-green-400/50 text-white hover:border-green-400/80 hover:bg-green-400/20 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 text-green-400 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300 px-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Free diagnosis • No obligation • Same-day service available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        .animate-on-scroll {
          animation: fade-up 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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

        .hover-glow {
          transition: all 0.3s ease;
        }

        .hover-glow:hover {
          box-shadow: 0 20px 50px rgba(6, 182, 212, 0.15);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-8px);
        }

        .text-gradient-white {
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .text-gradient {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @media (max-width: 640px) {
          .container-narrow {
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChoose;