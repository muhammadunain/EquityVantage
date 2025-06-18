'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: [
      'Portfolio Management',
      'Equity Research',
      'Risk Management',
      'Wealth Advisory',
      'Institutional Services',
      'Financial Planning'
    ],
    Company: [
      'About Us',
      'Our Team',
      'Careers',
      'News & Insights',
      'Research Reports',
      'Contact Us'
    ],
    Resources: [
      'Investment Calculator',
      'Market Commentary',
      'Educational Resources',
      'Client Portal',
      'Forms & Documents',
      'FAQ'
    ],
    Legal: [
      'Privacy Policy',
      'Terms of Service',
      'Regulatory Disclosures',
      'Code of Ethics',
      'Compliance',
      'Cookie Policy'
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Equity Vantage</span>
              </Link>
              
              <p className="text-slate-300 mb-6 leading-relaxed">
                Premier investment management firm delivering exceptional results through 
                innovative strategies and unwavering dedication to our clients' success.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">info@example.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-slate-300">
                    123 Financial District<br />
                    New York, NY 10004
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ y: -2, scale: 1.1 }}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([title, links], columnIndex) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
            <p className="text-slate-300 mb-8">
              Get the latest market insights, investment strategies, and company updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2024 Equity Vantage. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                SEC Disclosures
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Form ADV
              </Link>
              <Link href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                Business Continuity
              </Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
            {/* <p>
              Investment advice offered through Equity Vantage, a registered investment advisor. 
              Securities offered through registered representatives of Equity Vantage Securities, 
              member FINRA/SIPC. Past performance does not guarantee future results.
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;