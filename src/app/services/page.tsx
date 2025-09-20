'use client';

import { motion } from 'framer-motion';
import { 
  Droplets, 
  Wrench, 
  Zap, 
  Home as HomeIcon,
  Thermometer,
  ShowerHead,
  Toilet,
  CheckCircle,
  Clock,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import { Service } from '@/types';

// Modern animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8 }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6 }
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

export default function ServicesPage() {
  const services: Service[] = [
    {
      id: '1',
      name: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services for all types of drains.',
      icon: 'Droplets',
      price: 'Starting at $89',
      features: ['Camera inspection', 'Hydro jetting', 'Root removal', 'Preventive maintenance']
    },
    {
      id: '2', 
      name: 'Pipe Repair & Replacement',
      description: 'Expert repair and replacement of damaged or aging pipes.',
      icon: 'Wrench',
      price: 'Starting at $150',
      features: ['Leak detection', 'Pipe relining', 'Emergency repairs', 'Full replacements']
    },
    {
      id: '3',
      name: 'Water Heater Service',
      description: 'Installation, repair, and maintenance of all water heater types.',
      icon: 'Zap',
      price: 'Starting at $120',
      features: ['Tank & tankless units', 'Energy efficiency upgrades', 'Emergency repairs', 'Annual maintenance']
    },
    {
      id: '4',
      name: 'Bathroom Plumbing',
      description: 'Complete bathroom plumbing installation and renovation services.',
      icon: 'HomeIcon',
      price: 'Starting at $200',
      features: ['Fixture installation', 'Bathroom remodels', 'Leak repairs', 'Pipe upgrades']
    },
    {
      id: '5',
      name: 'Toilet Repair & Installation',
      description: 'Professional toilet services from repairs to complete installations.',
      icon: 'Toilet',
      price: 'Starting at $95',
      features: ['Running toilet fixes', 'New installations', 'Seal replacements', 'Clog removal']
    },
    {
      id: '6',
      name: 'Faucet & Fixture Service',
      description: 'Installation and repair of faucets, sinks, and other plumbing fixtures.',
      icon: 'ShowerHead',
      price: 'Starting at $75',
      features: ['Leak repairs', 'New installations', 'Upgrade services', 'Cartridge replacement']
    }
  ];

  const emergencyServices = [
    'Burst pipe emergency',
    'Severe drain blockages', 
    'Water heater failures',
    'Flooding issues',
    'Gas line emergencies',
    'Sewer backups'
  ];

  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-12 w-12 text-blue-600" };
    switch(iconName) {
      case 'Droplets': return <Droplets {...iconProps} />;
      case 'Wrench': return <Wrench {...iconProps} />;
      case 'Zap': return <Zap {...iconProps} />;
      case 'HomeIcon': return <HomeIcon {...iconProps} />;
      case 'Toilet': return <Toilet {...iconProps} />;
      case 'ShowerHead': return <ShowerHead {...iconProps} />;
      default: return <Wrench {...iconProps} />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
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
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={scaleIn}
            >
              Our <motion.span 
                className="text-blue-300"
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { duration: 2, repeat: Infinity }
                }}
              >Services</motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Comprehensive plumbing solutions for residential and commercial properties. 
              Professional, reliable, and affordable services available 24/7.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              variants={scaleIn}
            >
              Professional Plumbing Services
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              From routine maintenance to emergency repairs, we provide expert plumbing services with upfront pricing.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={bounceIn}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group"
              >
                <Card hover className="h-full bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {getIcon(service.icon)}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{service.name}</CardTitle>
                    <motion.p 
                      className="text-2xl font-bold text-blue-600"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {service.price}
                    </motion.p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 group-hover:text-gray-800 transition-colors">{service.description}</p>
                    <motion.ul 
                      className="space-y-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center space-x-2"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 group-hover:animate-pulse" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <motion.div 
                      className="mt-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button className="w-full hover:shadow-lg transition-shadow">Get Quote</Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-red-400 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-32 h-32 bg-red-400 rounded-full opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              variants={scaleIn}
              animate={{
                textShadow: ['0 0 0px rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.5)', '0 0 0px rgba(255,255,255,0)']
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              24/7 Emergency Services
            </motion.h2>
            <motion.p 
              className="text-xl text-red-100 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Plumbing emergencies don&apos;t wait for business hours. Our emergency team is available around the clock.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Emergency Services Include:</h3>
              <motion.div 
                className="grid md:grid-cols-2 gap-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {emergencyServices.map((service, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-2 group"
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ 
                      x: 10,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <Clock className="h-5 w-5 text-red-200 group-hover:animate-spin" />
                    <span className="text-red-100 group-hover:text-white transition-colors">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white text-gray-900 p-8 rounded-lg shadow-2xl"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.h3 
                className="text-2xl font-bold mb-4"
                variants={scaleIn}
              >
                Need Emergency Help?
              </motion.h3>
              <motion.p 
                className="text-gray-600 mb-6"
                variants={fadeInUp}
              >
                Our emergency response team is standing by 24/7 to handle your urgent plumbing needs.
              </motion.p>
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.a 
                  href="tel:+1234567890" 
                  className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  variants={bounceIn}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 10px 20px rgba(220, 38, 38, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Phone className="h-5 w-5" />
                  </motion.div>
                  <span>Call Emergency Line: (123) 456-7890</span>
                </motion.a>
                <motion.div variants={bounceIn}>
                  <Button variant="outline" className="w-full hover:scale-105 transition-all shadow-lg">Request Emergency Service</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ProPlumber?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Upfront Pricing</h3>
              <p className="text-gray-600">No surprises. We provide clear, upfront pricing before any work begins.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
              <p className="text-gray-600">All our plumbers are licensed, insured, and continuously trained.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-600">Same-day service for most repairs and 24/7 emergency response.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}