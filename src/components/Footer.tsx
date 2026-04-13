import { Phone, Mail, MapPin } from 'lucide-react';

// Dynamic Configuration - Easy to modify
const footerConfig = {
  company: {
    name: 'Fixur',
    nameHighlight: 'Device',
    description: "Bangalore's premium iPhone service center. Same-day repairs with genuine parts and warranty.",
    address: '123, 100 Feet Road, Indiranagar',
    city: 'Bangalore - 560038',
  },
  phone: '9343584460',
  email: 'fixurdevice.in@gmail.com',
  services: [
    { label: 'Screen Replacement', href: '#services' },
    { label: 'Battery Replacement', href: '#services' },
    { label: 'Water Damage Repair', href: '#services' },
    { label: 'Motherboard Repair', href: '#services' },
  ],
  serviceAreas: [
    'Indiranagar',
    'Jayanagar',
    'BTM Layout',
    'Whitefield',
    'Marathahalli',
    'Electronic City',
    'Koramangala',
    'HSR Layout',
    'MG Road',
  ],
  legal: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Return Policy', href: '#returns' },
  ],
  socialLinks: [
    { label: 'Facebook', href: '#facebook' },
    { label: 'Instagram', href: '#instagram' },
    { label: 'Twitter', href: '#twitter' },
  ],
};

interface FooterProps {
  compact?: boolean;
}

const Footer: React.FC<FooterProps> = ({ compact = false }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="border-t border-border bg-card/40 py-12 px-4 sm:px-6 lg:px-8" 
      role="contentinfo"
    >
      <div className="container-narrow">
        {/* Main Footer Content */}
        <div className={`grid gap-8 mb-10 ${
          compact 
            ? 'sm:grid-cols-2 lg:grid-cols-3' 
            : 'sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-3">
              {footerConfig.company.name}
              <span className="text-gradient">{footerConfig.company.nameHighlight}</span>
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {footerConfig.company.description}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerConfig.services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href} 
                    className="hover:text-foreground transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerConfig.serviceAreas.slice(0, compact ? 5 : 9).map((area) => (
                <li key={area}>{area}</li>
              ))}
              {!compact && footerConfig.serviceAreas.length > 5 && (
                <li className="text-xs text-primary font-semibold">
                  +{footerConfig.serviceAreas.length - 5} more areas
                </li>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <div>
                  <p>{footerConfig.company.address}</p>
                  <p>{footerConfig.company.city}</p>
                </div>
              </div>
              <a 
                href={`tel:${footerConfig.phone}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                {footerConfig.phone}
              </a>
              <a 
                href={`mailto:${footerConfig.email}`}
                className="flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                {footerConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground flex-wrap">
          {/* Copyright */}
          <p className="order-2 sm:order-1">
            © {currentYear} {footerConfig.company.name}{footerConfig.company.nameHighlight}. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-4 order-1 sm:order-2 flex-wrap justify-center">
            {footerConfig.legal.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          {!compact && footerConfig.socialLinks.length > 0 && (
            <div className="flex gap-4 order-3">
              {footerConfig.socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  title={link.label}
                  className="hover:text-foreground transition-colors text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="mt-8 pt-8 border-t border-border grid grid-cols-3 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-lg sm:text-xl font-bold text-primary">10,000+</p>
            <p className="text-xs text-muted-foreground">Happy Customers</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-bold text-primary">98%</p>
            <p className="text-xs text-muted-foreground">Success Rate</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-bold text-primary">30min</p>
            <p className="text-xs text-muted-foreground">Avg Repair</p>
          </div>
          <div>
            <p className="text-lg sm:text-xl font-bold text-primary">24/7</p>
            <p className="text-xs text-muted-foreground">Support</p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </footer>
  );
};

export default Footer;