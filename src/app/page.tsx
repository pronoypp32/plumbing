'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Clock, 
  Shield, 
  Star, 
  Wrench, 
  Droplets, 
  Zap, 
  Home as HomeIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui';
import { Card, CardContent, CardHeader, CardTitle, Accordion } from '@/components/ui';

// Modern animation variants for eye-catching effects
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      damping: 10,
      stiffness: 100
    }
  }
};

export default function HomePage() {

  const services = [
    {
      icon: <Droplets className="h-8 w-8 text-blue-600" />,
      title: "Drain Cleaning",
      description: "Professional drain cleaning and unclogging services"
    },
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Pipe Repair",
      description: "Expert pipe repair and replacement services"
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Water Heater",
      description: "Water heater installation and repair services"
    },
    {
      icon: <HomeIcon className="h-8 w-8 text-blue-600" />,
      title: "Bathroom Plumbing",
      description: "Complete bathroom plumbing solutions"
    }
  ];

  const features = [
    "24/7 Emergency Service",
    "Licensed & Insured",
    "Free Estimates",
    "Satisfaction Guaranteed"
  ];

  const faqs = [
    {
      id: '1',
      question: 'How quickly can you respond to emergency calls?',
      answer: 'We provide 24/7 emergency service and typically respond within 30-60 minutes for urgent situations.'
    },
    {
      id: '2', 
      question: 'Do you provide free estimates?',
      answer: 'Yes, we provide free estimates for most plumbing services. Contact us to schedule your free consultation.'
    },
    {
      id: '3',
      question: 'Are your plumbers licensed and insured?',
      answer: 'Absolutely. All our plumbers are fully licensed, bonded, and insured for your protection and peace of mind.'
    },
    {
      id: '4',
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. We also offer financing options for larger projects.'
    },
    {
      id: '5',
      question: 'Do you offer warranties on your work?',
      answer: 'Yes, we stand behind our work with comprehensive warranties. Warranty terms vary by service type.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(30, 64, 175, 0.7)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        
        {/* Animated overlay patterns */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 z-10 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                variants={scaleIn}
              >
                Professional 
                <motion.span 
                  className="text-blue-300"
                  animate={{
                    y: [-5, 5, -5],
                    transition: {
                      duration: 3,
                      repeat: Infinity
                    }
                  }}
                >Plumbing</motion.span> 
                Services
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto"
                variants={fadeInUp}
              >
                Trusted by thousands of customers. Fast, reliable, and professional 
                plumbing services available 24/7 for all your emergency needs.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8 justify-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={bounceIn}>
                  
                </motion.div>
                <motion.div variants={bounceIn}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 w-full sm:w-auto hover:scale-105 transition-all duration-300">
                    Get Free Quote
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-2 justify-center group"
                    variants={bounceIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0 group-hover:animate-pulse" />
                    <span className="text-sm sm:text-base text-blue-100">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-center sm:text-left">24/7 Emergency Service Available</span>
            </div>
            <a 
              href="tel:+1234567890" 
              className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span>Emergency Hotline: (123) 456-7890</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={scaleIn}
            >
              Our Professional Services
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              From emergency repairs to complete installations, we provide comprehensive 
              plumbing solutions for residential and commercial properties.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={bounceIn}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card hover className="text-center h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader>
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-lg sm:text-xl group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-800 transition-colors">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="text-center mt-8 sm:mt-12" variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Link href="/services">
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                View All Services
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="h-5 w-5 ml-2" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <motion.h2 
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6"
                variants={scaleIn}
              >
                Why Choose ProPlumber?
              </motion.h2>
              <motion.p 
                className="text-base sm:text-lg text-green-400 mb-6 sm:mb-8"
                variants={fadeInUp}
              >
                With over 15 years of experience, we&apos;ve built our reputation on 
                quality workmanship, fair pricing, and exceptional customer service.
              </motion.p>
              
              <motion.div 
                className="space-y-4 sm:space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4 text-center lg:text-left group"
                  variants={bounceIn}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-gren-500 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-600 transition-colors">Licensed & Insured</h4>
                    <p className="text-white text-sm sm:text-base">Fully licensed plumbers with comprehensive insurance coverage</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4 text-center lg:text-left group"
                  variants={bounceIn}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-yellow-500 transition-colors">5-Star Rated</h4>
                    <p className="text-white text-sm sm:text-base">Consistently rated 5 stars by our satisfied customers</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start space-x-3 sm:space-x-4 text-center lg:text-left group"
                  variants={bounceIn}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-rose-400 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-600 transition-colors">Fast Response</h4>
                    <p className="text-white text-sm sm:text-base">Same-day service and 24/7 emergency response</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-6 sm:mt-8 text-center lg:text-left"
                variants={scaleIn}
              >
                <Link href="/about">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Learn More About Us
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <motion.div 
                className="bg-blue-600 text-white p-4 sm:p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >15+</motion.div>
                <div className="text-blue-100 text-xs sm:text-sm">Years Experience</div>
              </motion.div>
              <motion.div 
                className="bg-green-600 text-white p-4 sm:p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >5000+</motion.div>
                <div className="text-green-100 text-xs sm:text-sm">Happy Customers</div>
              </motion.div>
              <motion.div 
                className="bg-orange-600 text-white p-4 sm:p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >24/7</motion.div>
                <div className="text-orange-100 text-xs sm:text-sm">Emergency Service</div>
              </motion.div>
              <motion.div 
                className="bg-purple-600 text-white p-4 sm:p-6 rounded-lg text-center"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >100%</motion.div>
                <div className="text-purple-100 text-xs sm:text-sm">Satisfaction</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={scaleIn}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Got questions? We&apos;ve got answers. Here are some common questions about our plumbing services.
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Accordion faqs={faqs} />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
              variants={scaleIn}
            >
              Ready to Fix Your Plumbing Issues?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4"
              variants={fadeInUp}
            >
              Don&apos;t let plumbing problems disrupt your day. Contact us now for fast, 
              professional service you can trust.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={bounceIn}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="h-5 w-5 mr-2" />
                  </motion.div>
                  Call (123) 456-7890
                </Button>
              </motion.div>
              <motion.div variants={bounceIn}>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                    Schedule Service Online
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
