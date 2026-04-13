import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How long does an iPhone screen replacement take?',
    a: 'Most iPhone screen replacements are completed within 30-45 minutes at our Bangalore service center. We use OEM-quality displays with full touch functionality.',
  },
  {
    q: 'Do you use genuine Apple parts?',
    a: 'Yes, we use genuine and OEM-quality parts for all repairs. Every component is tested for quality and comes with our 6-month service warranty.',
  },
  {
    q: 'What is the cost of iPhone battery replacement in Bangalore?',
    a: 'Battery replacement costs vary by model, starting from ₹1,499 for iPhone 11 series. Contact us for an exact quote — diagnosis is always free.',
  },
  {
    q: 'Do you provide doorstep iPhone repair in Bangalore?',
    a: 'Yes! We offer free pickup and delivery across Bangalore including Indiranagar, Whitefield, BTM Layout, Marathahalli, and Electronic City.',
  },
  {
    q: 'Is there a warranty on repairs?',
    a: "All repairs come with a 6-month warranty covering parts and labour. If anything goes wrong, we'll fix it at no extra cost.",
  },
  {
    q: 'Can you repair water-damaged iPhones?',
    a: 'Yes, we specialize in water damage recovery using ultrasonic cleaning and micro-soldering. Success rates are highest when the device is brought in quickly.',
  },
];

const FAQ = () => {
  const ref = useScrollAnimation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-card/30" ref={ref} aria-label="Frequently Asked Questions">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about our iPhone repair services in Bangalore.
          </p>
        </div>

        <div className="space-y-3 animate-on-scroll">
          {faqs.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-card/40 transition-colors"
                aria-expanded={open === i}
              >
                <h3 className="text-sm sm:text-base font-medium text-foreground pr-4">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-40 pb-5' : 'max-h-0'
                }`}
              >
                <p className="px-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
