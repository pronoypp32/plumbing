'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ } from '@/types';

interface AccordionProps {
  faqs: FAQ[];
}

export function Accordion({ faqs }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
          >
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base pr-4">{faq.question}</h3>
            {openItems.includes(faq.id) ? (
              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
            )}
          </button>
          
          <AnimatePresence>
            {openItems.includes(faq.id) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm sm:text-base">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}