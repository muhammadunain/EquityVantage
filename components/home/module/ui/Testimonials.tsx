'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Michael Chen',
      title: 'CEO, Tech Innovations Group',
      company: 'Fortune 500 Technology Company',
      content: 'Equity Vantage has consistently delivered exceptional returns while managing risk effectively. Their research-driven approach and personalized service have made them an invaluable partner for our corporate investments.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Williams',
      title: 'Managing Partner',
      company: 'Williams Family Office',
      content: 'The team at Equity Vantage understands our family\'s long-term objectives and has helped us build a diversified portfolio that aligns with our values and financial goals. Their expertise in alternative investments has been particularly valuable.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Rodriguez',
      title: 'Chief Investment Officer',
      company: 'Metropolitan Pension Fund',
      content: 'Working with Equity Vantage has transformed our investment strategy. Their institutional-grade research and active portfolio management have resulted in consistent outperformance against our benchmarks.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Jennifer Thompson',
      title: 'Founder & President',
      company: 'Thompson Foundation',
      content: 'Equity Vantage\'s ESG-focused investment approach perfectly aligns with our foundation\'s mission. They\'ve helped us achieve strong returns while making a positive impact on society and the environment.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Kim',
      title: 'Executive Director',
      company: 'University Endowment Fund',
      content: 'The sophisticated investment strategies and risk management techniques employed by Equity Vantage have helped our endowment weather market volatility while achieving our long-term growth objectives.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20  bg-gradient-to-br from-slate-900 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-700/20 text-blue-300 rounded-full text-sm font-medium mb-4 border border-blue-700/30">
            Client Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hear from our clients about their experience working with Equity Vantage and the results we've achieved together.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20"
              >
                <div className="text-center mb-8">
                  <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                  <p className="text-lg lg:text-xl text-white leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-blue-300 font-medium">
                        {testimonials[currentIndex].title}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-white/30  hover:text-slate-900 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border-white/30  hover:text-slate-900 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex
                      ? 'bg-blue-400'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;