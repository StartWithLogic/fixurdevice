import { MapPin, Navigation } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AreaItem {
  name: string;
  desc: string;
  icon: string;
}

const areas: AreaItem[] = [
  {
    name: 'Indiranagar',
    desc: 'Fast iPhone repairs near 100 Feet Road, Indiranagar. Expert technicians available.',
    icon: '🏙️'
  },
  {
    name: 'Jayanagar',
    desc: 'Premium repair service in Jayanagar 4th Block. Same-day diagnostics & repairs.',
    icon: '🏢'
  },
  {
    name: 'BTM Layout',
    desc: 'Convenient iPhone service in BTM Layout. Free pickup & doorstep delivery.',
    icon: '📱'
  },
  {
    name: 'Whitefield',
    desc: 'Doorstep iPhone repair in Whitefield ITPL area. Walk-in service available.',
    icon: '🏭'
  },
  {
    name: 'Marathahalli',
    desc: 'Quick Apple device fixes near Marathahalli Bridge. Express service guaranteed.',
    icon: '🌉'
  },
  {
    name: 'Electronic City',
    desc: 'Convenient iPhone service center in Electronic City. Tech support specialists.',
    icon: '💻'
  },
  {
    name: 'Koramangala',
    desc: 'Trusted repairs near Koramangala 4th Block. Premium customer service.',
    icon: '🎨'
  },
  {
    name: 'HSR Layout',
    desc: 'Professional iPhone repairs in HSR Layout. Genuine parts & warranty.',
    icon: '🏠'
  },
  {
    name: 'MG Road',
    desc: 'Central Bangalore service in MG Road. Walk-in appointments available.',
    icon: '🌟'
  },
];

const ServiceAreas = () => {
  const ref = useScrollAnimation();

  return (
    <section id="areas" className="relative section-padding overflow-hidden" ref={ref} aria-label="Service Areas in Bangalore">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Navigation className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Service Coverage</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient-white mb-4 leading-tight">
            iPhone Repair Across Bangalore
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Serving all major areas in Bangalore with free pickup and delivery. No matter where you are, we're here to help.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.name}
              className={`animate-on-scroll stagger-${(i % 4) + 1} group relative`}
            >
              {/* Card */}
              <div className="relative glass rounded-2xl p-6 sm:p-7 h-full border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 cursor-pointer overflow-hidden">
                
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-3xl mt-1 group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                        {area.name}
                      </h3>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-blue-500 mt-2 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                    {area.desc}
                  </p>

                  {/* Location marker */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-xs text-gray-400">Available for service</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Info */}
        <div className="mt-16 text-center animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <div className="glass rounded-2xl p-8 sm:p-10 border border-white/10 bg-gradient-to-r from-primary/5 via-transparent to-primary/5">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ✅ Complete Coverage Across Bangalore
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              From North Bangalore (Whitefield) to South (Electronic City), we provide same-day repair services with free doorstep pickup and delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-black text-primary">9+</div>
                <div className="text-sm text-gray-400">Locations</div>
              </div>
              <div className="text-center border-l border-r border-white/10">
                <div className="text-3xl font-black text-primary">24hrs</div>
                <div className="text-sm text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-sm text-gray-400">Coverage</div>
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

        .text-gradient-white {
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default ServiceAreas;