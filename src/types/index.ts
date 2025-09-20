// Common TypeScript interfaces for the plumber website

export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  experience: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  completedDate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  location: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  description: string;
  preferredDate: string;
  preferredTime: string;
}

export interface BusinessInfo {
  name: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    emergency: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}