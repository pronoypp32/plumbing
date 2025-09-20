'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  urgency: z.enum(['normal', 'urgent', 'emergency'])
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      urgency: 'normal'
    }
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const services = [
    'Drain Cleaning',
    'Pipe Repair',
    'Water Heater Service',
    'Bathroom Plumbing',
    'Kitchen Plumbing',
    'Emergency Repair',
    'Other'
  ];

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: 'Phone',
      details: '(123) 456-7890',
      link: 'tel:+1234567890'
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: 'Email',
      details: 'info@proplumber.com',
      link: 'mailto:info@proplumber.com'
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: 'Address',
      details: '123 Main Street, Your City, YS 12345',
      link: 'https://maps.google.com'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Only' },
    { day: 'Emergency Service', hours: '24/7 Available' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-blue-300">ProPlumber</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to solve your plumbing issues? Get in touch with us today for fast, reliable service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <p className="text-green-700">Thank you! Your message has been sent successfully.</p>
                    </motion.div>
                  )}
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                        <input
                          {...register('name')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="(123) 456-7890"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        {...register('email')}
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                        <select
                          {...register('service')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                        <select
                          {...register('urgency')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="normal">Normal</option>
                          <option value="urgent">Urgent (Same Day)</option>
                          <option value="emergency">Emergency (ASAP)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Please describe your plumbing issue or service needed..."
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                    </div>

                    <Button type="submit" loading={isSubmitting} className="w-full" size="lg">
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Service</h3>
                  <p className="text-red-600 mb-4">Available 24/7 for plumbing emergencies</p>
                  <a href="tel:+1234567890" className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>Call Emergency Line</span>
                  </a>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {info.icon}
                      <div>
                        <h4 className="font-medium text-gray-900">{info.title}</h4>
                        <a href={info.link} className="text-gray-600 hover:text-blue-600 transition-colors">
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Located in the heart of the city, serving the entire metropolitan area</p>
          </motion.div>
          
          {/* Map Placeholder */}
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600">Interactive Google Map</p>
              <p className="text-gray-500 text-sm">123 Main Street, Your City, YS 12345</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}