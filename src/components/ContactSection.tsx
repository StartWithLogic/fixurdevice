'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle, PhoneCall, Calendar, Loader } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, FormEvent } from 'react';

const contactConfig = {
  company: {
    name: 'FixurDevice',
    address: '123 1st Floor, BTM Layout',
    city: 'Bangalore, Karnataka 560029',
    mapUrl: 'https://www.google.com/maps/place/Fixblr/@12.9276467,77.5911674,17z',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3087435558557!2d77.59116742345899!3d12.927646720740848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17001ceb36dd%3A0x93d9453ce61ab81!2sFixblr!5e0!3m2!1sen!2sin!4v1708422000000',
  },
  contact: {
    phone: '9343584460',
    email: 'fixurdevice.in@gmail.com',
    whatsapp: '9343584460',
    adminEmail: 'levloxtech@gmail.com',
  },
  businessHours: [
    { day: 'Monday - Friday', time: '9:00 AM – 8:00 PM', isOpen: true },
    { day: 'Saturday', time: '9:00 AM – 8:00 PM', isOpen: true },
    { day: 'Sunday', time: 'Closed', isOpen: false },
  ],
  iPhoneModels: [
    'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15', 'iPhone 16',
    'iPhone 11 Pro', 'iPhone 12 Pro', 'iPhone 13 Pro', 'iPhone 14 Pro', 'iPhone 15 Pro', 'iPhone 16 Pro',
    'iPhone 11 Pro Max', 'iPhone 12 Pro Max', 'iPhone 13 Pro Max', 'iPhone 14 Pro Max', 'iPhone 15 Pro Max', 'iPhone 16 Pro Max',
    'iPhone SE (2nd Gen)', 'iPhone SE (3rd Gen)', 'Apple Watch', 'MacBook', 'iPhone 17', 'iPhone 17 Pro', 'iPhone 17 Pro Max', 'Other',
  ],
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  model: string;
  issue: string;
}

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    model: '',
    issue: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const sendEmail = async (data: FormData) => {
    try {
      const API_URL = "https://fixurdevice-backend.onrender.com";

      const response = await fetch(`${API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          model: data.model,
          issue: data.issue,
        }),
      });

      // ✅ SAFELY HANDLE RESPONSE
      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("Server error: Invalid response");
      }

      // ✅ HANDLE BACKEND ERRORS
      if (!response.ok) {
        throw new Error(result?.error || "Failed to send email");
      }

      return result;

    } catch (err: any) {
      console.error("❌ Email error:", err.message);
      throw new Error(err.message || "Something went wrong");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.model || !formData.issue) {
        throw new Error('Please fill in all fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      await sendEmail(formData);

      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', model: '', issue: '' });

      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('[Frontend] Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden" ref={ref} aria-label="Contact Us">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container-narrow relative z-10">
        <div className="text-center mb-16 animate-on-scroll px-4">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 backdrop-blur-sm">
            <Phone className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Get In Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gradient-white mb-4 leading-tight">
            Contact {contactConfig.company.name}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Visit us or book a repair online. Free diagnosis on all devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16 animate-on-scroll px-4">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-300 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Contact Details</h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Address</h4>
                  <p className="text-gray-300 text-sm">
                    {contactConfig.company.name}<br />
                    {contactConfig.company.address}<br />
                    {contactConfig.company.city}
                  </p>
                  <a
                    href={contactConfig.company.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 text-sm font-semibold mt-2 inline-flex gap-1"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <a
                    href={`tel:${contactConfig.contact.phone}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm font-semibold"
                  >
                    {contactConfig.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a
                    href={`mailto:${contactConfig.contact.email}`}
                    className="text-gray-300 hover:text-primary transition-colors text-sm font-semibold"
                  >
                    {contactConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-white mb-3">Business Hours</h4>
                  <div className="space-y-2">
                    {contactConfig.businessHours.map((hour, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-gray-300 text-sm">{hour.day}</span>
                        <span className={`text-sm font-semibold ${hour.isOpen ? 'text-green-400' : 'text-red-400'}`}>
                          {hour.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <p className="text-yellow-100 text-xs flex items-start gap-2">
                      <span className="text-lg flex-shrink-0">⏰</span>
                      <span>Emergency repairs available on weekends. Call us for urgent assistance!</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl overflow-hidden border border-white/10 aspect-video">
              <iframe
                title="FixurDevice Location in Bangalore"
                src={contactConfig.company.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${contactConfig.contact.phone}`}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${contactConfig.contact.whatsapp}?text=Hi%20I%20need%20iPhone%20repair`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  Get Quote
                </button>
              </div>
            </div>

            <div id="contact-form" className="glass rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Book Your Repair</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-3 animate-bounce">✅</div>
                  <h4 className="text-lg font-bold text-white mb-2">Booking Received!</h4>
                  <p className="text-sm text-gray-300">
                    We'll call you within 30 minutes to confirm your repair. Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                      <p className="text-red-400 text-xs">{error}</p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 mb-1">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="Your name"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-1">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-400 mb-1">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      placeholder="+91 93435 84460"
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label htmlFor="model" className="block text-xs font-semibold text-gray-400 mb-1">iPhone Model</label>
                    <select
                      id="model"
                      required
                      value={formData.model}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all"
                      disabled={loading}
                    >
                      <option value="" className="bg-slate-900">Select Model</option>
                      {contactConfig.iPhoneModels.map((model) => (
                        <option key={model} className="bg-slate-900" value={model}>{model}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-xs font-semibold text-gray-400 mb-1">Issue</label>
                    <textarea
                      id="issue"
                      rows={2}
                      required
                      value={formData.issue}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none"
                      placeholder="Describe your issue..."
                      disabled={loading}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-primary to-blue-600 text-white py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Book Free Diagnosis'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </section>
  );
};

export default ContactSection;