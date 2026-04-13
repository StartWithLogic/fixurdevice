import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CircularGallery from './Circulargallery';

// Using local assets
const galleryItems = [
  {
    image: 'screen replacement.jpg',
    text: 'Screen Replacement'
  },
  {
    image: 'battery service.jpg',
    text: 'Battery Service'
  },
  {
    image: 'water damage.jpg',
    text: 'Water Damage'
  },
  {
    image: 'iphone.jpg',
    text: 'iPhone Chips'
  },
  {
    image: 'mother board.jpg',
    text: 'Motherboard Repair'
  },
];

const CTABlock = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-b from-transparent via-primary/5 to-transparent" ref={ref} aria-label="Services Gallery & Booking">
      {/* Animated transparent background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-primary/20 to-blue-500/20 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container-narrow relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-on-scroll px-4">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-xs sm:text-sm font-semibold text-primary">Our Services</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black text-gradient-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
            Explore Our Services
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Discover our professional iPhone repair services. Gallery auto-scrolls to showcase all available repairs.
          </p>
        </div>

        {/* Gallery Section - Transparent Background */}
        <div className="mb-12 sm:mb-16 lg:mb-20 animate-on-scroll px-4" style={{ animationDelay: '0.1s' }}>
          <div 
            style={{ height: 'clamp(300px, 80vw, 550px)', position: 'relative' }} 
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30"
          >
            {/* Transparent gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-20" />
            
            <CircularGallery
              items={galleryItems}
              bend={1}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
          
          {/* Gallery Info */}
          <div className="text-center mt-6 sm:mt-8 animate-on-scroll space-y-2 sm:space-y-3 px-4" style={{ animationDelay: '0.2s' }}>
            <p className="text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
              <span>Auto-scrolling gallery • Drag for manual control</span>
            </p>
          </div>
        </div>

        {/* CTA Section - Transparent Design */}
        <div className="animate-on-scroll px-4" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-16 overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 transition-all duration-300 hover:border-white/20">
            
            {/* Subtle animated background */}
            <div className="absolute inset-0 opacity-50">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/30 to-blue-500/30 backdrop-blur-md flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 border border-white/20">
                <Phone className="w-6 sm:w-7 md:w-8 text-primary" />
              </div>

              {/* Text */}
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white text-center mb-2 sm:mb-3 md:mb-4">
                Ready to Repair Your iPhone?
              </h3>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center max-w-xl mx-auto mb-6 sm:mb-8 md:mb-10">
                Book your repair instantly. Free diagnosis, same-day service, and 6-month warranty on all repairs.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-2 sm:px-4 py-4 sm:py-6 rounded-lg sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">30min</div>
                  <div className="text-xs text-gray-400">Avg Repair</div>
                </div>
                <div className="text-center border-l border-r border-white/10">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">6 Mo</div>
                  <div className="text-xs text-gray-400">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-black text-primary">Free</div>
                  <div className="text-xs text-gray-400">Diagnosis</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
                <a
                  href="tel:9343584460"
                  className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-blue-600 text-white px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 active:scale-95 border border-primary/50 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-4 sm:w-5 text-white relative z-10 group-hover:animate-pulse flex-shrink-0" />
                  <span className="relative z-10 text-center sm:text-left">Call Now – Free Diagnosis</span>
                  <span className="relative z-10 group-hover:translate-x-1 transition-transform hidden sm:inline">→</span>
                </a>

                <a
                  href="https://wa.me/919663360775?text=Hi%2C%20I%20saw%20your%20services%20and%20I%20need%20iPhone%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 active:scale-95 border border-green-400/50 w-full sm:w-auto"
                >
                  <MessageCircle className="w-4 sm:w-5 text-white relative z-10 flex-shrink-0" />
                  <span>WhatsApp Now</span>
                </a>
              </div>

              {/* Trust message */}
              <p className="text-center text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-2 px-2">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span>Trusted by 10,000+ customers in Bangalore</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Trust Badges - Transparent */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 animate-on-scroll px-4" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: '⚡', label: 'Same Day Service' },
            { icon: '🛡️', label: '6 Month Warranty' },
            { icon: '✓', label: 'Genuine Parts' },
            { icon: '📍', label: 'Free Pickup & Drop' },
          ].map((badge, i) => (
            <div key={i} className="rounded-lg sm:rounded-2xl p-3 sm:p-4 text-center backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group">
              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">{badge.icon}</div>
              <p className="text-xs sm:text-sm font-semibold text-white">{badge.label}</p>
            </div>
          ))}
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

export default CTABlock;