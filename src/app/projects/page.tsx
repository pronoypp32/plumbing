'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Wrench, Droplets, Zap, Home as HomeIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Button } from '@/components/ui';
import { Project } from '@/types';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Complete Bathroom Renovation',
      description: 'Full bathroom remodel including new fixtures, plumbing lines, and modern amenities.',
      image: '/projects/bathroom-renovation.jpg',
      category: 'Bathroom',
      completedDate: 'March 2024'
    },
    {
      id: '2',
      title: 'Emergency Pipe Burst Repair',
      description: 'Quick response to burst pipe in commercial building, minimizing water damage.',
      image: '/projects/pipe-repair.jpg',
      category: 'Emergency',
      completedDate: 'February 2024'
    },
    {
      id: '3',
      title: 'Kitchen Sink Installation',
      description: 'Professional installation of new kitchen sink with garbage disposal and water filtration.',
      image: '/projects/kitchen-sink.jpg',
      category: 'Kitchen',
      completedDate: 'January 2024'
    },
    {
      id: '4',
      title: 'Water Heater Replacement',
      description: 'Upgraded old tank water heater to efficient tankless system for family home.',
      image: '/projects/water-heater.jpg',
      category: 'Water Heater',
      completedDate: 'December 2023'
    },
    {
      id: '5',
      title: 'Commercial Drain Cleaning',
      description: 'Large-scale drain cleaning and maintenance for restaurant kitchen systems.',
      image: '/projects/commercial-drain.jpg',
      category: 'Commercial',
      completedDate: 'November 2023'
    },
    {
      id: '6',
      title: 'Whole House Repiping',
      description: 'Complete home repiping project replacing old galvanized pipes with modern copper.',
      image: '/projects/repiping.jpg',
      category: 'Repiping',
      completedDate: 'October 2023'
    }
  ];

  const categories = ['All', 'Bathroom', 'Kitchen', 'Emergency', 'Water Heater', 'Commercial', 'Repiping'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "h-5 w-5" };
    switch(category) {
      case 'Bathroom': return <HomeIcon {...iconProps} />;
      case 'Kitchen': return <Wrench {...iconProps} />;
      case 'Emergency': return <Droplets {...iconProps} />;
      case 'Water Heater': return <Zap {...iconProps} />;
      case 'Commercial': return <Wrench {...iconProps} />;
      case 'Repiping': return <Wrench {...iconProps} />;
      default: return <Wrench {...iconProps} />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-300">Projects</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Take a look at some of our recent plumbing projects. From emergency repairs to complete renovations, 
              we deliver quality workmanship every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center space-x-2"
              >
                {category !== 'All' && getCategoryIcon(category)}
                <span>{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-lg text-gray-600">
              Showcasing our commitment to quality and customer satisfaction
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full overflow-hidden">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      {getCategoryIcon(project.category)}
                      <p className="text-blue-600 font-medium mt-2">{project.category} Project</p>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>Completed {project.completedDate}</span>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us bring the same level of quality and professionalism to your plumbing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Free Estimate
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                View All Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}