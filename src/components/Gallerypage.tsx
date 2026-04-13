import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import CircularGallery from '@/components/Circulargallery';

const galleryItems = [
  {
    image: 'https://i.pinimg.com/1200x/82/2f/31/822f3185a27e22042fbe63155a54afb9.jpg',
    text: 'Screen Replacement'
  },
  {
    image: 'https://i.pinimg.com/1200x/a3/36/dc/a336dc4836cfa2847e2b8124415fc395.jpg',
    text: 'Battery Service'
  },
  {
    image: 'https://i.pinimg.com/736x/aa/f2/fd/aaf2fdff681a754c5c0f4c3015b48f18.jpg',
    text: 'Water Damage'
  },
  {
    image: 'https://i.pinimg.com/1200x/77/ff/dc/77ffdcdbe44f5ee9d537ab5b9880a0f9.jpg',
    text: 'Motherboard Repair'
  },
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black">
      
      {/* Header Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services Gallery</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Expert iPhone Repair Services
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Scroll through our premium repair services. Drag to explore or use scroll wheel for a smooth experience.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-12 px-4">
        <div style={{ height: '600px', position: 'relative' }} className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          <CircularGallery
            items={galleryItems}
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.05}
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  Browse Our Services
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We offer a comprehensive range of iPhone repair services with certified technicians, genuine parts, and transparent pricing. Each service comes with a 6-month warranty.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Services Featured:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Screen Replacement</p>
                      <p className="text-sm text-gray-400">OEM-quality displays with same-day service</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Battery Replacement</p>
                      <p className="text-sm text-gray-400">Genuine cells with health monitoring support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Water Damage Repair</p>
                      <p className="text-sm text-gray-400">Expert recovery with ultrasonic cleaning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Motherboard Repair</p>
                      <p className="text-sm text-gray-400">Advanced micro-soldering and IC-level repair</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Stats & CTA */}
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary mb-2">10,000+</div>
                  <p className="text-sm text-gray-300">Happy Customers</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary mb-2">98%</div>
                  <p className="text-sm text-gray-300">Success Rate</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary mb-2">30 min</div>
                  <p className="text-sm text-gray-300">Avg Repair Time</p>
                </div>
                <div className="glass rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary mb-2">6 Mo</div>
                  <p className="text-sm text-gray-300">Warranty</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold text-white">Ready to Repair?</h3>
                <div className="space-y-3">
                  <a
                    href="tel:9343584460"
                    className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now – Free Diagnosis</span>
                  </a>
                  <a
                    href="https://wa.me/919663360775?text=Hi%20I%20want%20to%20know%20more%20about%20your%20iPhone%20repair%20services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-white/10 backdrop-blur-xl px-8 py-4 rounded-xl font-bold text-white border-2 border-primary/50 hover:border-primary hover:bg-white/20 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center bg-gradient-to-r from-primary/10 via-transparent to-primary/10 border border-primary/30">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Need a Different Service?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a complete consultation. We offer more services beyond what's shown here.
            </p>
            <a
              href="tel:9343584460"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Contact Us Today</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;