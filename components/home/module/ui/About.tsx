'use client';

import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Globe, Shield, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'Built on a foundation of trust, transparency, and ethical business practices that put our clients first.'
    },
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Every decision we make is guided by our clients\' best interests and long-term financial success.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Excellence',
      description: 'Committed to delivering superior risk-adjusted returns through disciplined investment processes.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Leveraging global market opportunities while understanding local market dynamics and regulations.'
    }
  ];

  const achievements = [
    { icon: Award, label: 'Industry Awards', value: '15+' },
    { icon: Users, label: 'Investment Professionals', value: '85+' },
    { icon: TrendingUp, label: 'Client Retention Rate', value: '96%' },
    { icon: Globe, label: 'Countries Invested', value: '45+' }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            About Equity Vantage
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            25+ Years of Investment Excellence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 1998, Equity Vantage has established itself as a premier investment management firm, 
            delivering exceptional results for our clients through innovative strategies and unwavering dedication to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Our Story
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Equity Vantage was founded with a simple yet powerful vision: to provide institutional-quality 
              investment management services that consistently deliver superior risk-adjusted returns. Our journey 
              began with a small team of experienced investment professionals who shared a common belief in the 
              power of disciplined, research-driven investment strategies.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Over the past 25 years, we have grown to become one of the most respected investment management 
              firms in the industry, managing over $2.8 billion in assets for institutional investors, 
              high-net-worth individuals, and family offices worldwide. Our success stems from our commitment 
              to understanding each client's unique needs and objectives.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our success is built on three pillars: rigorous research, disciplined investment processes, 
              and an unwavering commitment to our clients' success. We believe that consistent, superior 
              performance is achieved through careful risk management, innovative thinking, and a long-term 
              investment horizon that focuses on sustainable wealth creation.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center border border-slate-200 hover:border-blue-200 transition-all duration-300"
              >
                <achievement.icon className="w-8 h-8 text-blue-700 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                  {achievement.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The principles that guide every decision we make and every relationship we build with our valued clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;