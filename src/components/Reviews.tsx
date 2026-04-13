import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ReviewItem {
  name: string;
  text: string;
  rating: number;
  model: string;
  image: string;
  beforeImage: string;
  afterImage: string;
  location: string;
}

const reviews: ReviewItem[] = [
  {
    name: 'Priya S.',
    text: 'Got my iPhone 14 screen replaced in just 40 minutes! Quality is amazing and the price was very fair. Highly recommend FixurDevice.',
    rating: 4,
    model: 'iPhone 14',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    beforeImage: 'https://i.pinimg.com/736x/29/ce/10/29ce10f6834b725c9864a5b7d9579779.jpg',
    afterImage: 'https://i.pinimg.com/736x/45/25/cc/4525ccdfc2cc73dc57391114fbddb121.jpg',
    location: 'Indiranagar'
  },
  {
    name: 'Rahul M.',
    text: 'Best iPhone service center in Bangalore. My water-damaged iPhone 13 was completely recovered with all data intact.',
    rating: 5,
    model: 'iPhone 13',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    beforeImage: 'https://i.pinimg.com/736x/11/50/24/115024ee982d421a048d957063b9e724.jpg',
    afterImage: 'https://i.pinimg.com/1200x/f5/8d/e8/f58de89fb92cdc6bce4414959ab84d5d.jpg',
    location: 'Whitefield'
  },
  {
    name: 'Sneha K.',
    text: 'Battery replacement for my iPhone 12 was done while I waited. Battery health back to 100%. Great service!',
    rating: 5,
    model: 'iPhone 12',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    beforeImage: 'https://i.pinimg.com/1200x/74/53/44/745344b519df83fe4fee977766914929.jpg',
    afterImage: 'https://i.pinimg.com/736x/6e/86/07/6e860749b9a773cbbed5ca9c402be3dc.jpg',
    location: 'Koramangala'
  },
  {
    name: 'Arjun D.',
    text: 'Motherboard repair that two other shops said was impossible. FixurDevice fixed it in a day. Amazing technicians!',
    rating: 4,
    model: 'iPhone 11 Pro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    beforeImage: 'https://i.pinimg.com/736x/0e/c1/ba/0ec1ba65a89796d155bfe76cc9ce699a.jpg',
    afterImage: 'https://i.pinimg.com/736x/a0/dd/a4/a0dda489d037249f4342ba096eae8c30.jpg',
    location: 'BTM Layout'
  },
  {
    name: 'Meera R.',
    text: 'Free pickup from Whitefield and delivery the same evening. Professional service with genuine parts.',
    rating: 4,
    model: 'iPhone 15',
    image: 'https://images.unsplash.com/photo-1507876466836-bc5bbc7a05ca?w=100&h=100&fit=crop',
    beforeImage: 'https://i.pinimg.com/736x/1e/e9/20/1ee920ffc6a08a829492feb8fd883754.jpg',
    afterImage: 'https://i.pinimg.com/736x/a9/df/0a/a9df0ac2b872cfde9f44da9136aedd75.jpg',
    location: 'Electronic City'
  },
];

// Duplicate reviews for continuous loop
const extendedReviews = [...reviews, ...reviews];

const Reviews = () => {
  const ref = useScrollAnimation();

  return (
    <section id="reviews" className="relative section-padding overflow-hidden" ref={ref} aria-label="Customer Reviews">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-semibold text-primary">Real Customer Stories</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gradient-white mb-4 leading-tight">
            What Our Customers Say
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Rated 4.9/5 by 2,000+ customers on Google. See real before & after repairs.
          </p>
        </div>

        {/* Continuous Scrolling Gallery */}
        <div className="animate-on-scroll">
          <div className="overflow-hidden rounded-3xl">
            <div className="flex gap-6 animate-scroll-gallery">
              {extendedReviews.map((review, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[600px]"
                >
                  {/* Review Card */}
                  <div className="glass rounded-3xl overflow-hidden border border-white/10 h-full flex flex-col hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30">
                    
                    {/* Before & After Images */}
                    <div className="grid grid-cols-2 gap-3 p-4 sm:p-5 bg-gradient-to-b from-white/5 to-transparent flex-shrink-0">
                      {/* Before */}
                      <div className="relative rounded-lg overflow-hidden h-40 sm:h-48 bg-gray-900">
                        <img
                          src={review.beforeImage}
                          alt="Before repair"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
                          <span className="text-xs font-bold text-white bg-red-500/80 px-2 py-0.5 rounded-full">🔴 BEFORE</span>
                        </div>
                      </div>

                      {/* After */}
                      <div className="relative rounded-lg overflow-hidden h-40 sm:h-48 bg-gray-900">
                        <img
                          src={review.afterImage}
                          alt="After repair"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
                          <span className="text-xs font-bold text-white bg-green-500/80 px-2 py-0.5 rounded-full">✅ AFTER</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="p-4 sm:p-5 border-t border-white/10 flex-1 flex flex-col">
                      {/* Rating */}
                      <div className="flex items-center justify-center gap-0.5 mb-3">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-sm text-gray-100 leading-relaxed mb-4 text-center flex-1">
                        "{review.text}"
                      </blockquote>

                      {/* Customer Info */}
                      <div className="flex items-center justify-center gap-3 pb-4 border-b border-white/10">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-primary flex-shrink-0"
                        />
                        <div className="text-left min-w-0">
                          <p className="font-bold text-white text-sm">{review.name}</p>
                          <p className="text-xs text-gray-400">{review.location}</p>
                        </div>
                      </div>

                      {/* Model & Service Info */}
                      <div className="text-center mt-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                          <span className="text-lg">📱</span>
                          <div className="text-left">
                            <p className="text-xs font-bold text-white">{review.model}</p>
                            <p className="text-xs text-gray-400">Repair</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-3 gap-6 mt-16 animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          {[
            { icon: '⭐', label: '4.9/5 Rating', desc: '2,000+ reviews' },
            { icon: '✓', label: '100% Verified', desc: 'Real customers' },
            { icon: '🚀', label: 'Same Day', desc: 'Service available' },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="font-bold text-white text-sm sm:text-base">{stat.label}</p>
              <p className="text-xs sm:text-sm text-gray-400">{stat.desc}</p>
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

        .animate-scroll-gallery {
          animation: scroll-infinite 30s linear infinite;
        }

        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
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

export default Reviews;