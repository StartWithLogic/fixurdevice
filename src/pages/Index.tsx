import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import WhyChoose from '@/components/WhyChoose';
import ModelsGrid from '@/components/ModelsGrid';
import ServiceAreas from '@/components/ServiceAreas';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTABlock from '@/components/CTABlock';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "FixurDevice",
  "description": "iPhone Service Center in Bangalore offering same-day screen replacement, battery replacement, water damage repair, and motherboard repair with genuine Apple parts.",
  "url": "https://fixurdevice.com",
  "telephone": "9343584460",
  "email": "support@fixurdevice.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123, 1st Floor, 100 Feet Road, Indiranagar",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.6410"
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "20:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Sunday", "opens": "11:00", "closes": "18:00" }
  ],
  "priceRange": "₹₹",
  "image": "https://fixurdevice.com/og-image.jpg",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2000" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How long does an iPhone screen replacement take?", "acceptedAnswer": { "@type": "Answer", "text": "Most iPhone screen replacements are completed within 30-45 minutes at our Bangalore service center." } },
    { "@type": "Question", "name": "Do you use genuine Apple parts?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we use genuine and OEM-quality parts for all repairs with a 6-month service warranty." } },
    { "@type": "Question", "name": "What is the cost of iPhone battery replacement in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Battery replacement costs start from ₹1,499 for iPhone 11 series. Diagnosis is always free." } },
    { "@type": "Question", "name": "Do you provide doorstep iPhone repair in Bangalore?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer free pickup and delivery across Bangalore including Indiranagar, Whitefield, BTM Layout, Marathahalli, and Electronic City." } },
  ]
};

const Index = () => {
  useEffect(() => {
    // Inject JSON-LD
    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    // Set meta tags
    document.title = 'iPhone Service Center in Bangalore | FixurDevice – Same Day Repair';
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };
    setMeta('description', 'FixurDevice is Bangalore\'s trusted iPhone service center. Same-day screen replacement, battery replacement, water damage repair. Genuine parts, 6-month warranty. Call now!');
    setMeta('keywords', 'iPhone service center Bangalore, iPhone repair Bangalore, iPhone screen replacement, iPhone battery replacement, Apple repair Bangalore, FixurDevice');

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyChoose />
        <CTABlock />
        <ModelsGrid />
        <ServiceAreas />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919663360775?text=Hi%20I%20need%20iPhone%20repair"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
