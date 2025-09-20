import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './Card';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card hover className={className}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-1">
            {renderStars(testimonial.rating)}
          </div>
          <span className="text-sm text-gray-500">{testimonial.date}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-3">&ldquo;{testimonial.comment}&rdquo;</p>
        <div className="bg-blue-50 px-3 py-1 rounded-full inline-block">
          <span className="text-xs font-medium text-blue-700">
            Service: {testimonial.service}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}