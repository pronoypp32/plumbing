import { HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export function Card({ className, children, hover = false, padding = 'md', animate = true, ...props }: CardProps) {
  const paddingClasses = {
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-6 sm:p-8',
  };

  if (animate) {
    const { onDrag, onDragEnd, onDragStart, ...motionSafeProps } = props;
    return (
      <motion.div
        className={cn(
          'bg-white rounded-lg border border-gray-200 shadow-sm relative overflow-hidden',
          hover && 'cursor-pointer',
          paddingClasses[padding],
          className
        )}
        whileHover={hover ? {
          y: -8,
          scale: 1.02,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        {...(motionSafeProps as any)}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          whileHover={{ translateX: '200%' }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 shadow-sm',
        hover && 'hover:shadow-md transition-shadow duration-200',
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  animate?: boolean;
}

export function CardHeader({ className, children, animate = true, ...props }: CardHeaderProps) {
  if (animate) {
    const { onDrag, onDragEnd, onDragStart, ...motionSafeProps } = props;
    return (
      <motion.div 
        className={cn('mb-3 sm:mb-4', className)} 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        {...(motionSafeProps as any)}
      >
        {children}
      </motion.div>
    );
  }
  
  return (
    <div className={cn('mb-3 sm:mb-4', className)} {...props}>
      {children}
    </div>
  );
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ className, children, as: Component = 'h3', ...props }: CardTitleProps) {
  return (
    <Component className={cn('text-base sm:text-lg font-semibold text-gray-900', className)} {...props}>
      {children}
    </Component>
  );
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('text-gray-600', className)} {...props}>
      {children}
    </div>
  );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cn('mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100', className)} {...props}>
      {children}
    </div>
  );
}