'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, WrenchIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ProPlumber
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your trusted plumbing professionals serving the community for over 15 years with excellence, reliability, and integrity.
          </motion.p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">5000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">Emergency Service</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.h2>
            <motion.div 
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-white mb-6">
                Founded in 2008 by master plumber John Smith, ProPlumber began as a small, family-owned business with a simple mission: to provide honest, reliable, and affordable plumbing services to our local community. What started as a one-man operation with a single van has grown into a full-service plumbing company with a team of certified professionals.
              </p>
              <p className="text-lg text-white mb-6">
                Over the years, we&apos;ve built our reputation on quality workmanship, transparent pricing, and exceptional customer service. We believe that plumbing problems shouldn&apos;t be a source of stress, which is why we&apos;re committed to providing fast, efficient solutions that keep your home or business running smoothly.
              </p>
              <p className="text-lg text-white">
                Today, ProPlumber serves hundreds of residential and commercial clients throughout the region, handling everything from routine maintenance to complex installations and emergency repairs. Despite our growth, we&apos;ve never lost sight of our core values: treating every customer like family and every job like it&apos;s in our own home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-4">
                To provide exceptional plumbing services that exceed customer expectations while building lasting relationships based on trust, reliability, and professional excellence.
              </p>
              <p className="text-lg text-gray-600">
                We strive to be the most trusted plumbing company in our community by delivering high-quality workmanship, transparent communication, and fair pricing on every project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Our Vision</h3>
              <p className="text-lg text-gray-600 mb-4">
                To be the leading plumbing service provider in our region, known for innovation, reliability, and commitment to customer satisfaction.
              </p>
              <p className="text-lg text-gray-600">
                We envision a future where plumbing problems are solved quickly and efficiently, allowing our customers to focus on what matters most to them.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose ProPlumber?
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="text-center p-6 rounded-lg bg-white shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <WrenchIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Craftsmanship</h3>
              <p className="text-gray-600">Licensed and certified plumbers with years of experience in all types of plumbing work.</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-lg bg-white shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ClockIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Emergency plumbing services available around the clock, 365 days a year.</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-lg bg-white shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Guaranteed Work</h3>
              <p className="text-gray-600">All our work comes with a comprehensive warranty and 100% satisfaction guarantee.</p>
            </motion.div>
            <motion.div 
              className="text-center p-6 rounded-lg bg-white shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CheckCircleIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Upfront, honest pricing with no hidden fees or surprise charges.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">JS</span>
              </div>
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-blue-600 mb-3">Founder & Master Plumber</p>
              <p className="text-gray-600 text-sm">Licensed master plumber with 20+ years of experience. Specializes in commercial installations and complex repairs.</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">MJ</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-blue-600 mb-3">Senior Plumber</p>
              <p className="text-gray-600 text-sm">Certified journeyman plumber with expertise in residential services, water heater installations, and emergency repairs.</p>
            </motion.div>
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">SD</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Davis</h3>
              <p className="text-blue-600 mb-3">Customer Service Manager</p>
              <p className="text-gray-600 text-sm">Ensures exceptional customer experience and coordinates all service appointments and emergency calls.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Certifications & Awards
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">Fully licensed and insured for your protection</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Better Business Bureau</h3>
                <p className="text-gray-600 text-sm">A+ Rating with BBB</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Best Plumber 2023</h3>
                <p className="text-gray-600 text-sm">Local Community Choice Award</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Emergency Response</h3>
                <p className="text-gray-600 text-sm">Certified Emergency Service Provider</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Work with ProPlumber?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Contact us today for reliable, professional plumbing services. We&apos;re here to help with all your plumbing needs.
          </motion.p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="/contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </a>
            <a href="tel:+1234567890" className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-blue-900 transition-colors">
              Call Now: (123) 456-7890
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}