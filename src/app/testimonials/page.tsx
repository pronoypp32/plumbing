'use client';

import { motion } from 'framer-motion';
import { TestimonialCard } from '@/components/ui';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/types';

export default function TestimonialsPage() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Mitchell',
      rating: 5,
      comment: 'ProPlumber saved the day when our basement started flooding at 2 AM. They arrived within 30 minutes and fixed the burst pipe quickly. Professional and reliable service!',
      service: 'Emergency Repair',
      date: 'March 2024',
      location: 'Downtown Area'
    },
    {
      id: '2',
      name: 'Mike Thompson',
      rating: 5,
      comment: 'Had my entire bathroom renovated by ProPlumber. The team was professional, clean, and completed the job on time. The quality of work exceeded my expectations.',
      service: 'Bathroom Renovation',
      date: 'February 2024',
      location: 'Suburban District'
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      rating: 5,
      comment: 'Great experience with ProPlumber. They replaced our old water heater with a new tankless unit. Fair pricing and excellent customer service throughout the process.',
      service: 'Water Heater Installation',
      date: 'January 2024',
      location: 'North Side'
    },
    {
      id: '4',
      name: 'David Chen',
      rating: 5,
      comment: 'Professional and efficient service. Fixed our kitchen sink leak and installed a new garbage disposal. Clean work area and reasonable prices. Highly recommended!',
      service: 'Kitchen Plumbing',
      date: 'December 2023',
      location: 'East District'
    },
    {
      id: '5',
      name: 'Amanda Johnson',
      rating: 5,
      comment: 'Called ProPlumber for a clogged drain that other companies couldn&apos;t fix. They used advanced equipment and solved the problem in no time. Very satisfied with their service.',
      service: 'Drain Cleaning',
      date: 'November 2023',
      location: 'West End'
    },
    {
      id: '6',
      name: 'Robert Williams',
      rating: 5,
      comment: 'Outstanding service! They replaced all the old pipes in our house. The team was courteous, explained everything clearly, and left the place spotless. Worth every penny.',
      service: 'Pipe Replacement',
      date: 'October 2023',
      location: 'Central District'
    }
  ];

  const averageRating = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer <span className="text-blue-300">Testimonials</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Read what our satisfied customers have to say about our plumbing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Review Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{averageRating.toFixed(1)}</div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600">Average Rating</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">{totalReviews}+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                  <p className="text-gray-600">Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <Quote className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <blockquote className="text-2xl text-gray-700 mb-6 leading-relaxed">
              &ldquo;ProPlumber has been our go-to plumbing service for over 3 years. Their team is always professional, 
              punctual, and provides excellent work at fair prices. We&apos;ve recommended them to all our friends and family.&rdquo;
            </blockquote>
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <cite className="text-lg font-semibold text-gray-900">- Jennifer Davis, Loyal Customer</cite>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from real customers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Happy Customers?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the ProPlumber difference. Quality work, fair prices, and exceptional customer service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+1234567890" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call (123) 456-7890
              </a>
              <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}