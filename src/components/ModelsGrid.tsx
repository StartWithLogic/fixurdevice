import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Smartphone } from 'lucide-react';

interface ModelItem {
  name: string;
  image: string;
}

const models: ModelItem[] = [
  {
    name: 'iPhone 11',
    image: 'iphone11.png',
  },
    {
    name: 'iPhone 11 Pro',
    image: 'iphone11pro.png',
  },
    {
    name: 'iPhone11 Pro Max',
    image: 'iphone11 pro max.png',
  },
  {
    name: 'iPhone 12',
    image: 'iphone12.png',
  },
    {
    name: 'iPhone 12 Pro',
    image: 'iphone12pro.png',
  },
    {
    name: 'iPhone 12 Pro Max',
    image: 'iphone12 pro max.png',
  },
  {
    name: 'iPhone 13',
    image: 'iphone13.png',
  },
    {
    name: 'iPhone 13 Pro',
    image: 'iphone13pro.png',
  },
    {
    name: 'iPhone 13 Pro Max',
    image: 'iphone13  pro max.png',
  },
  {
    name: 'iPhone 14',
    image: 'iphone14.png',
  },
  
  {
    name: 'iPhone 14 Pro',
    image: 'iphone14pro.png',
  },
    {
    name: 'iPhone 14 Pro Max',
    image: 'iphone14 pro max.png',
  },
  {
    name: 'iPhone 15',
    image: 'iphone15.png',
  },
    {
    name: 'iPhone 15 Pro',
    image: 'iphone15pro.png',
  },
    {
    name: 'iPhone 15 Pro Max',
    image: 'iphone15 pro max.png',
  },
  {
    name: 'iPhone 16',
    image: 'iphone16.png',
  },
  {
    name: 'iPhone 16 Pro',
    image: 'iphone16pro.png',
  },
      {
    name: 'iPhone 16 Pro Max',
    image: 'iphone16  pro max.png',
  },
  {
    name: 'iPhone 17',
    image: 'iphone17.png',
  },
      {
    name: 'iPhone 17 pro',
    image: 'iphone17 pro.png',
  },
      {
    name: 'iPhone 17 pro max',
    image: 'iphone 17 pro  max.png',
  },

  {
    name: 'iPhone SE (2nd Gen)',
    image: 'iphonese2.png',
  },
  {
    name: 'iPhone SE (3rd Gen)',
    image: 'iphonese3.png.png',
  },
    {
    name: 'I-watch',
    image: 'mac watch.png',
  },
    {
    name: 'Mackbooks',
    image: 'mackbook.png',
  },
];

const ModelsGrid = () => {
  const ref = useScrollAnimation();

  return (
    <section id="models" className="relative section-padding overflow-hidden" ref={ref} aria-label="iPhone Models We Service">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Smartphone className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Compatible Models</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient-white mb-4 leading-tight">
            iPhone Models We Service
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert repairs for all iPhone models. From iPhone 11 to the latest iPhone 16 series.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {models.map((model, i) => (
            <div
              key={model.name}
              className={`animate-on-scroll stagger-${(i % 4) + 1} group flex flex-col items-center`}
            >
              {/* Image Container - Transparent */}
              <div className="relative w-full h-40 sm:h-48 mb-4 rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer p-2">
                {/* Transparent Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
                
                {/* Image */}
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                />
              </div>

              {/* Model Name */}
              <h3 className="text-sm sm:text-base font-bold text-center text-white group-hover:text-primary transition-colors duration-300">
                {model.name}
              </h3>
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

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

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

export default ModelsGrid;