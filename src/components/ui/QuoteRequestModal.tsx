'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Clock, Send, CheckCircle } from 'lucide-react';
import { Modal } from './Modal';
import { Button } from './Button';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  urgency: z.enum(['normal', 'urgent', 'emergency']),
  description: z.string().min(10, 'Please provide more details'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time')
});

type QuoteRequestForm = z.infer<typeof quoteSchema>;

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<QuoteRequestForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      urgency: 'normal'
    }
  });

  const onSubmit = async (data: QuoteRequestForm) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Quote request submitted:', data);
    setIsSubmitted(true);
    reset();
    
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const services = [
    'Drain Cleaning',
    'Pipe Repair', 
    'Water Heater Service',
    'Bathroom Plumbing',
    'Kitchen Plumbing',
    'Emergency Repair',
    'Complete Renovation',
    'Other'
  ];

  const timeSlots = [
    '8:00 AM - 10:00 AM',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 2:00 PM',
    '2:00 PM - 4:00 PM',
    '4:00 PM - 6:00 PM',
    'Emergency ASAP'
  ];

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} title="Quote Request Sent!">
        <div className="text-center py-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            Your quote request has been submitted successfully. We&apos;ll contact you within 2 hours to discuss your needs and provide a detailed estimate.
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request a Quote" size="lg">
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
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <textarea
            {...register('description')}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Please describe your plumbing issue or project in detail..."
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
            <div className="relative">
              <input
                {...register('preferredDate')}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time *</label>
            <div className="relative">
              <select
                {...register('preferredTime')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select time slot</option>
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              <Clock className="absolute right-8 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
          </div>
        </div>

        <div className="flex space-x-3 pt-4">
          <Button type="button" variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button type="submit" loading={isSubmitting} className="flex-1">
            <Send className="h-4 w-4 mr-2" />
            Request Quote
          </Button>
        </div>
      </form>
    </Modal>
  );
}