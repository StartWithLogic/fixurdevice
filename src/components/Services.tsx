import { Smartphone, Battery, Droplets, Cpu, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Smartphone,
    title: 'iPhone Screen Replacement',
    desc: 'Cracked or broken screen? Get an OEM-quality screen replacement with same-day service. Original display quality guaranteed.',
    keywords: 'iPhone screen replacement Bangalore',
    image: 'screen replacement.jpg',
    badge: 'Screen Repair',
    features: ['OEM Quality', 'Same-Day Service', 'Full Warranty']
  },
  {
    icon: Battery,
    title: 'iPhone Battery Replacement',
    desc: 'Restore your iPhone battery life to 100%. Genuine battery cells with health monitoring support.',
    keywords: 'iPhone battery replacement Bangalore',
    image: 'battery service.jpg',
    badge: 'Battery Service',
    features: ['Genuine Cells', 'Health Monitor', '6 Month Warranty']
  },
  {
    icon: Droplets,
    title: 'iPhone Water Damage Repair',
    desc: 'Expert water damage recovery with ultrasonic cleaning. Save your data and device from liquid damage.',
    keywords: 'iPhone water damage repair Bangalore',
    image: 'water damage.jpg',
    badge: 'Water Damage',
    features: ['Ultrasonic Clean', 'Data Recovery', 'Expert Service']
  },
  {
    icon: Cpu,
    title: 'iPhone Motherboard Repair',
    desc: "Advanced micro-soldering and IC-level motherboard repair. We fix what others can't.",
    keywords: 'iPhone motherboard repair Bangalore',
    image: 'mother board.jpg',
    badge: 'Motherboard Repair',
    features: ['Micro-Soldering', 'IC-Level Repair', 'Advanced Tech']
  },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="relative section-padding overflow-hidden" ref={ref} aria-label="Our Services">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll px-4">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gradient-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Expert iPhone Repair Solutions
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Professional Apple device repairs with genuine parts, certified technicians, and same-day service in Bangalore.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4 animate-on-scroll">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`animate-on-scroll stagger-${i + 1} group block h-full`}
            >
              <div className="glass rounded-lg sm:rounded-2xl overflow-hidden hover-glow hover-lift cursor-pointer h-full transition-all duration-300 hover:scale-105 flex flex-col">
                
                {/* Large Image Section with Overlay */}
                <div className="relative h-48 sm:h-64 md:h-72 lg:h-80 overflow-hidden bg-gray-900 flex-shrink-0">
                  {/* Background Image */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Badge - Top Left */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/30 hover:bg-white/30 transition-colors">
                    {s.badge}
                  </div>

                  {/* Service Icon - Top Right */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-10 sm:w-12 h-10 sm:h-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/30 flex-shrink-0">
                    <s.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>

                  {/* Title Overlay - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {s.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 md:p-7 flex flex-col flex-grow">
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-5 flex-grow">
                    {s.desc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 border-t border-white/10 pt-4 sm:pt-5">
                    {s.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                        <CheckCircle2 className="w-3 sm:w-4 h-3 sm:h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button - REMOVED NESTED ANCHOR */}
                  <button
                    onClick={() => window.location.hash = s.keywords.replace(/\s+/g, '-').toLowerCase()}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:gap-3 transition-all w-fit group/cta"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center animate-on-scroll px-4">
          <div className="glass rounded-lg sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/20 overflow-hidden relative">
            
            {/* Animated background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-blue-500/30 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-2 sm:mb-3">
                Need a Different Service?
              </h3>
              
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8 max-w-xl mx-auto px-2">
                We offer comprehensive iPhone repair services beyond these. Contact us for custom solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                <a
                  href="tel:9343584460"
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span>Call for More Services</span>
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 hidden sm:inline" />
                </a>
              </div>

              {/* Trust Message */}
              <p className="text-xs sm:text-sm text-gray-400 mt-4 sm:mt-6 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Professional Service • Free Diagnosis • Fast Turnaround
              </p>
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

        @media (max-width: 640px) {
          .container-narrow {
            padding: 0 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;