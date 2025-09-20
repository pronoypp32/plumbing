import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Wrench, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { BusinessInfo } from '@/types';

const businessInfo: BusinessInfo = {
  name: 'ProPlumber',
  phone: '(123) 456-7890',
  emergencyPhone: '(123) 456-7890',
  email: 'info@proplumber.com',
  address: {
    street: '123 Main Street',
    city: 'Your City',
    state: 'YS',
    zip: '12345'
  },
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Emergency Only',
    emergency: '24/7 Emergency Service'
  },
  socialMedia: {
    facebook: 'https://facebook.com/proplumber',
    twitter: 'https://twitter.com/proplumber',
    instagram: 'https://instagram.com/proplumber',
    linkedin: 'https://linkedin.com/company/proplumber'
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">{businessInfo.name}</span>
            </div>
            <p className="text-gray-300 mb-4">
              Professional plumbing services you can trust. Available 24/7 for emergencies.
            </p>
            <div className="flex space-x-4">
              {businessInfo.socialMedia.facebook && (
                <a
                  href={businessInfo.socialMedia.facebook}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {businessInfo.socialMedia.twitter && (
                <a
                  href={businessInfo.socialMedia.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
              {businessInfo.socialMedia.instagram && (
                <a
                  href={businessInfo.socialMedia.instagram}
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {businessInfo.socialMedia.linkedin && (
                <a
                  href={businessInfo.socialMedia.linkedin}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <a href={`mailto:${businessInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {businessInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-gray-300">
                    <span className="font-medium text-white">Mon - Fri:</span><br />
                    {businessInfo.hours.weekdays}
                  </p>
                  <p className="text-gray-300 mt-2">
                    <span className="font-medium text-white">Saturday:</span><br />
                    {businessInfo.hours.saturday}
                  </p>
                  <p className="text-gray-300 mt-2">
                    <span className="font-medium text-white">Sunday:</span><br />
                    {businessInfo.hours.sunday}
                  </p>
                  <p className="text-red-400 mt-3 font-medium">
                    {businessInfo.hours.emergency}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-red-600 rounded-lg p-4 text-center">
            <h4 className="text-lg font-semibold mb-2">24/7 Emergency Service</h4>
            <p className="text-red-100 mb-3">Plumbing emergency? We&apos;re here to help anytime, day or night!</p>
            <a
              href={`tel:${businessInfo.emergencyPhone}`}
              className="inline-flex items-center space-x-2 bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Now: {businessInfo.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} {businessInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}