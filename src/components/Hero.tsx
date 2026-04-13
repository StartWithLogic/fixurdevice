import React, { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Zap, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import Orb from './Orb';
import styles from '@/styles/Hero.module.css';

// FIXED: Changed from '/src/assets/hero.png' to '/hero.png' for Vercel
const heroImagePath = '/hero.png';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  color: string;
  hoverColor: string;
  iconColor: string;
  hoverIconColor: string;
}

const Hero: React.FC = () => {
  const particlesRef = useRef<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Responsive hook
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Dynamic particle generation
  useEffect(() => {
    const particles: Particle[] = [];
    const particleCount = isMobile ? 20 : isTablet ? 30 : 40;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    particlesRef.current = particles;
  }, [isMobile, isTablet]);

  // Dynamic features with responsive styling
  const features: Feature[] = [
    {
      icon: <Zap className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: 'Same Day',
      subtitle: 'Rapid Service',
      color: 'bg-white/5',
      hoverColor: 'group-hover:bg-cyan-500/10',
      iconColor: 'text-cyan-400',
      hoverIconColor: 'group-hover:text-cyan-300',
    },
    {
      icon: <Shield className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: 'Warranty',
      subtitle: 'Full Coverage',
      color: 'bg-white/5',
      hoverColor: 'group-hover:bg-blue-500/10',
      iconColor: 'text-blue-400',
      hoverIconColor: 'group-hover:text-blue-300',
    },
    {
      icon: <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5" />,
      title: 'Certified',
      subtitle: 'Expert Team',
      color: 'bg-white/5',
      hoverColor: 'group-hover:bg-purple-500/10',
      iconColor: 'text-purple-400',
      hoverIconColor: 'group-hover:text-purple-300',
    },
  ];

  // Dynamic trust indicators
  const trustIndicators = [
    { color: 'bg-cyan-400', label: 'Fast Service' },
    { color: 'bg-blue-400', label: 'Genuine Parts' },
    { color: 'bg-purple-400', label: 'Expert Technicians' },
  ];

  return (
    <section 
      className="relative min-h-screen md:min-h-[120vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black" 
      aria-label="Hero"
    >
      {/* Beautiful React Bits Orb Background - Full Screen */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Orb
          hoverIntensity={2.5}
          rotateOnHover={true}
          hue={240}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      {/* Gradient overlay for content enhancement */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      
      {/* Responsive animated accent lights */}
      <div 
        className="absolute top-1/4 -left-32 sm:-left-20 lg:-left-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500/5 rounded-full blur-3xl z-[1] animate-pulse" 
        style={{ animationDuration: '8s' }} 
      />
      <div 
        className="absolute bottom-1/4 -right-32 sm:-right-20 lg:-right-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/5 rounded-full blur-3xl z-[1]" 
        style={{ animationDelay: '2s', animationDuration: '8s' }} 
      />

      {/* Subtle particle overlay */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {particlesRef.current.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: Math.random() * 0.1 + 0.05,
              animation: `float-subtle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content - Fully Responsive */}
      <div className="relative z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Content Section - Responsive */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
            
            {/* Premium Badge - Responsive */}
            <div className={`${styles['premium-badge']} inline-flex items-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-xs sm:text-sm md:text-base text-white/90 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 animate-fade-up group cursor-pointer mx-auto lg:mx-0`}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
                <span className="font-medium">Trusted by 10,000+ customers</span>
              </span>
              <span className="hidden md:inline text-xs opacity-70">in Bangalore</span>
            </div>

            {/* Premium Heading - Fully Responsive */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black leading-tight sm:leading-snug md:leading-tight tracking-tighter mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-fade-up space-y-1 sm:space-y-2 md:space-y-3">
                <div className={styles['premium-text-white']}>
                  Premium iPhone
                </div>
                <div className={styles['premium-text-white']}>
                  Service Center
                </div>
                <div className="inline-block">
                  <span className={styles['premium-gradient-text']}>FixurDevice</span>
                </div>
              </h1>
              
              {/* Responsive divider */}
              <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 md:h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mt-3 sm:mt-4 md:mt-6 lg:mt-8 mx-auto lg:mx-0 rounded-full" />
            </div>

            {/* Premium Description - Responsive Text */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200/90 max-w-xl leading-relaxed font-light animate-fade-up mx-auto lg:mx-0 px-2 sm:px-0" style={{ animationDelay: '0.2s' }}>
              Experience <span className="font-semibold text-white">same-day repairs</span> from certified technicians using <span className="font-semibold text-white">genuine parts</span>. Every repair comes with <span className="font-semibold text-white">comprehensive warranty</span> and zero hidden charges.
            </p>

            {/* Premium Features Grid - Responsive */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-xs sm:max-w-sm md:max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              {features.map((feature, idx) => (
                <div key={idx} className={`${styles['premium-feature-card']} group`}>
                  <div className={`${feature.color} ${feature.hoverColor} transition-all duration-300 rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-white/10 group-hover:border-cyan-500/50 text-center cursor-pointer`}>
                    <div className={`${feature.iconColor} ${feature.hoverIconColor} transition-colors mx-auto mb-1 sm:mb-1.5 md:mb-2`}>
                      {feature.icon}
                    </div>
                    <p className="text-xs sm:text-xs md:text-sm font-semibold text-white">{feature.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5 sm:mt-1">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium CTA Buttons - Fully Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-4 pt-2 sm:pt-4 md:pt-6 animate-fade-up mx-auto lg:mx-0 px-2 sm:px-0" style={{ animationDelay: '0.3s' }}>
              <a
                href="tel:9343584460"
                className={`${styles['premium-cta-primary']} group relative flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 w-full sm:w-auto`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Phone className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 relative z-10 flex-shrink-0" />
                <span className="relative z-10">Call Now</span>
                <ArrowRight className="w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 relative z-10 group-hover:translate-x-1 transition-transform hidden sm:inline" />
              </a>
              <a
                href="https://wa.me/9343584460?text=Hi%2C%20I%20need%20iPhone%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles['premium-cta-secondary']} group relative flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-xl px-4 sm:px-6 md:px-8 lg:px-10 py-2.5 sm:py-3 md:py-4 rounded-lg sm:rounded-xl text-xs sm:text-sm md:text-base font-bold text-white border-2 border-emerald-400/50 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/30 hover:bg-white/15 hover:scale-105 active:scale-95 w-full sm:w-auto`}
              >
                <MessageCircle className="w-3.5 sm:w-4 md:w-5 h-3.5 sm:h-4 md:h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Message - Responsive */}
            <div className="pt-2 sm:pt-4 animate-fade-up mx-auto lg:mx-0 px-2 sm:px-0" style={{ animationDelay: '0.35s' }}>
              <p className="text-xs sm:text-sm md:text-base text-gray-300 font-medium flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-emerald-400 flex-shrink-0" />
                <span>99% Success Rate • Zero Hidden Charges</span>
              </p>
            </div>
          </div>

          {/* Right - Image Section - Fully Responsive */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 mb-6 sm:mb-8 lg:mb-0">
            {/* Responsive Image */}
            <img
              src={heroImagePath}
              alt="FixurDevice - Premium iPhone repair service showcase"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl object-contain transition-all duration-300 hover:scale-105 animate-fade-up drop-shadow-2xl"
              loading="eager"
              style={{ 
                background: 'transparent',
                animationDelay: '0.4s',
              }}
            />

            {/* Premium Trust Indicators - Fully Responsive */}
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center animate-fade-up w-full px-2 sm:px-4" style={{ animationDelay: '0.5s' }}>
              <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 text-xs sm:text-sm px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl border border-white/10">
                {trustIndicators.map((indicator, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex items-center justify-center gap-2 text-gray-300">
                      <div className={`w-2 h-2 rounded-full ${indicator.color} flex-shrink-0`} />
                      <span className="font-medium">{indicator.label}</span>
                    </div>
                    {idx < trustIndicators.length - 1 && (
                      <div className="hidden sm:block w-px h-4 sm:h-5 bg-white/10" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Style definitions */}
      <style>{`
        @keyframes float-subtle {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-50px) translateX(30px);
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(0px);
            opacity: 0;
          }
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

        @media (max-width: 640px) {
          .container {
            padding: 0 12px;
          }
        }

        @media (max-width: 768px) {
          .animate-fade-up {
            animation-duration: 0.5s;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;