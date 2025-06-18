'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Essential Portfolio',
      description: 'Perfect for individual investors starting their wealth building journey',
      monthlyPrice:299,
      annualPrice: 2990,
      minimumInvestment: '50K',
      popular: false,
      features: [
        'Professional portfolio management',
        'Quarterly performance reports',
        'Basic risk assessment',
        'Email support',
        'Access to research reports',
        'Standard rebalancing',
        'Tax-loss harvesting',
        'Mobile app access'
      ],
      icon: Users,
      color: 'blue'
    },
    {
      name: 'Premium Wealth',
      description: 'Comprehensive wealth management for serious investors',
      monthlyPrice: 599,
      annualPrice: 5990,
      minimumInvestment: '250K',
      popular: true,
      features: [
        'Everything in Essential Portfolio',
        'Dedicated investment advisor',
        'Monthly performance reviews',
        'Advanced risk management',
        'Priority phone support',
        'Custom investment strategies',
        'Alternative investment access',
        'Estate planning consultation',
        'Tax optimization strategies',
        'Quarterly strategy calls'
      ],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      name: 'Elite Private',
      description: 'Exclusive service for high-net-worth individuals and families',
      monthlyPrice: 1299,
      annualPrice: 12990,
      minimumInvestment: '1M',
      popular: false,
      features: [
        'Everything in Premium Wealth',
        'Personal wealth management team',
        'Weekly market insights',
        'Institutional-grade strategies',
        '24/7 concierge support',
        'Private equity opportunities',
        'Family office services',
        'Succession planning',
        'Philanthropic advisory',
        'Global investment access',
        'Custom reporting dashboard',
        'Annual wealth review'
      ],
      icon: Shield,
      color: 'blue'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    const monthlyCost = plan.monthlyPrice * 12;
    const annualCost = plan.annualPrice;
    return monthlyCost - annualCost;
  };

  return (
    <section id="pricing" className="py-20  bg-gradient-to-br from-slate-50 to-blue-50">
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
            Investment Plans
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Wealth Strategy
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Tailored investment solutions designed to meet your unique financial goals and risk tolerance.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                billingCycle === 'annual' ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                Save up to 17%
              </span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <Card className={`h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'ring-2 ring-emerald-500 bg-gradient-to-br from-white to-emerald-50' 
                  : 'bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50'
              }`}>
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    plan.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500 to-emerald-600' :
                    'bg-gradient-to-br from-purple-500 to-purple-600'
                  }`}>
                    <plan.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  
                  <p className="text-slate-600 mb-6">
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl  font-bold text-slate-900">
                        {/* ${getPrice(plan).toLocaleString()} */}
                        Comming Soon
                      </span>
                      <span className="text-slate-500 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    
                    {billingCycle === 'annual' && (
                      <p className="text-emerald-600 text-sm font-medium">
                        Save ${getSavings(plan).toLocaleString()} annually
                      </p>
                    )}
                    
                    <p className="text-slate-500 text-sm">
                      Minimum investment: ${plan.minimumInvestment}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                          plan.color === 'blue' ? 'text-blue-600' :
                          plan.color === 'emerald' ? 'text-emerald-600' :
                          'text-purple-600'
                        }`} />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className={`w-full font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700 `}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-20 text-center"
        >
          <div className="bg-white rounded-3xl p-8 ">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">SIPC Protected</h4>
                <p className="text-slate-600">Your investments are protected up to $500,000</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">No Hidden Fees</h4>
                <p className="text-slate-600">Transparent pricing with no surprise charges</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">Expert Team</h4>
                <p className="text-slate-600">Access to our award-winning investment professionals</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-600 text-sm">
                * All fees are annual management fees. Additional fees may apply for certain alternative investments. 
                Past performance does not guarantee future results. All investments carry risk of loss.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;