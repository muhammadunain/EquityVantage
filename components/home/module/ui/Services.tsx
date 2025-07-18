'use client';

import { motion } from 'framer-motion';
import { 
  PieChart, 
  TrendingUp, 
  Shield, 
  Users, 
  Building2, 
  Calculator,
  Target,
  Globe
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: PieChart,
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio construction and active management strategies tailored to your risk profile and investment objectives.',
      features: ['Asset Allocation', 'Risk Assessment', 'Performance Monitoring', 'Rebalancing Services']
    },
    {
      icon: TrendingUp,
      title: 'Equity Research',
      description: 'In-depth fundamental and technical analysis providing actionable investment insights across global equity markets.',
      features: ['Market Analysis', 'Stock Screening', 'Sector Reports', 'Investment Recommendations']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Advanced risk assessment and hedging strategies to protect your investments while maximizing growth potential.',
      features: ['Volatility Analysis', 'Hedge Strategies', 'Stress Testing', 'Downside Protection']
    },
    {
      icon: Users,
      title: 'Wealth Advisory',
      description: 'Personalized wealth management solutions for high-net-worth individuals and families seeking long-term growth.',
      features: ['Estate Planning', 'Tax Optimization', 'Succession Planning', 'Legacy Wealth']
    },
    {
      icon: Building2,
      title: 'Institutional Services',
      description: 'Sophisticated investment solutions designed specifically for pension funds, endowments, and corporate clients.',
      features: ['Custom Mandates', 'ESG Integration', 'Liability Matching', 'Alternative Investments']
    },
    {
      icon: Calculator,
      title: 'Financial Planning',
      description: 'Comprehensive financial planning services to help you achieve your short-term and long-term financial goals.',
      features: ['Retirement Planning', 'Education Funding', 'Cash Flow Analysis', 'Goal-Based Investing']
    },
    {
      icon: Target,
      title: 'Alternative Investments',
      description: 'Access to exclusive alternative investment opportunities including private equity, real estate, and hedge funds.',
      features: ['Private Equity', 'Real Estate', 'Hedge Funds', 'Commodities']
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'International investment opportunities across developed and emerging markets with local market expertise.',
      features: ['Emerging Markets', 'Currency Hedging', 'Global Diversification', 'Regional Specialists']
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
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
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Investment Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From portfolio management to alternative investments, we provide the full spectrum 
            of financial services to meet your unique investment needs and help you achieve your financial goals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50 group-hover:from-blue-50 group-hover:to-white">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-500">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Optimize Your Investment Strategy?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Schedule a consultation with our investment experts to discuss how we can help 
              you achieve your financial objectives with our comprehensive suite of services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white cursor-pointer px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Schedule Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;