import React from 'react';
import { motion } from 'motion/react';
import { Star, Shield, Clock, Zap, Phone, MessageCircle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS, REVIEWS, SERVICE_AREAS } from '../constants';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary-cta/10 text-primary-cta px-4 py-2 rounded-full font-bold text-sm mb-8 border border-primary-cta/20"
          >
            <Zap className="w-4 h-4 fill-primary-cta" /> BIRMINGHAM'S ONLY TRUE 24-HOUR ELECTRICIAN
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-8 leading-[0.9]"
          >
            RATED 5.0★ BY <span className="text-secondary-cta">38 CUSTOMERS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 font-medium leading-relaxed"
          >
            EICR Certificates, Fuse Board Replacements, Emergency Callouts & Full Rewires. Available at 3am. Available on Christmas Day. Always Available.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full sm:w-auto flex items-center justify-center gap-3 text-xl">
              <Phone className="w-6 h-6" /> CALL NOW: {BUSINESS_DETAILS.phoneDisplay}
            </a>
            <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`} className="cta-button-secondary w-full sm:w-auto flex items-center justify-center gap-3 text-xl">
              <MessageCircle className="w-6 h-6" /> WHATSAPP US
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8"
          >
            {[
              { icon: Star, label: "5.0★ Perfect Rating" },
              { icon: Clock, label: "Open 24 Hours" },
              { icon: Shield, label: "EICR Certified" },
              { icon: Zap, label: "30-Min Response" },
              { icon: MapPin, label: "Birmingham Based" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-secondary-cta" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "24-Hour Emergency Callout",
      desc: "Electrical fault at 2am? We come to you. No extra charge for nights.",
      icon: Zap,
      link: "/emergency",
      color: "text-primary-cta"
    },
    {
      title: "EICR Certificates",
      desc: "Legal landlord compliance. Same-week availability. Certificates issued same day.",
      icon: Shield,
      link: "/eicr",
      color: "text-accent-green"
    },
    {
      title: "Fuse Board Replacement",
      desc: "Old fuse board burning? We replaced one that saved a house from fire.",
      icon: Zap,
      link: "/fuseboard",
      color: "text-secondary-cta"
    },
    {
      title: "Full House Rewires",
      desc: "Complete rewiring with minimal disruption. Certified on completion.",
      icon: Zap,
      link: "/rewires",
      color: "text-blue-400"
    },
    {
      title: "Lighting Installation",
      desc: "Spotlights, outdoor security, LED upgrades. Indoor and outdoor specialists.",
      icon: Zap,
      link: "/lighting",
      color: "text-yellow-400"
    },
    {
      title: "Bathroom Electrical Work",
      desc: "IP-rated fixtures, fan installation, shaver points. Zone-compliant.",
      icon: Zap,
      link: "/lighting",
      color: "text-cyan-400"
    },
    {
      title: "Fault Finding & Testing",
      desc: "Burning smells, tripping circuits, power loss — we diagnose and fix fast.",
      icon: Zap,
      link: "/emergency",
      color: "text-orange-400"
    },
    {
      title: "Commercial Electrical",
      desc: "Shops, offices, rental properties. Compliance certificates issued.",
      icon: Zap,
      link: "/about",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter">OUR SERVICES</h2>
          <p className="text-xl text-gray-400">Everything you need from a master electrician, available 24/7.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Link 
              to={service.link} 
              key={i}
              className="group bg-card-bg p-8 rounded-2xl border border-border-subtle hover:border-primary-cta transition-all duration-300 flex flex-col h-full"
            >
              <service.icon className={`w-12 h-12 mb-6 ${service.color}`} />
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary-cta transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{service.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter">5.0★ PERFECT SCORE</h2>
          <p className="text-xl text-gray-400">38 Customers. Zero Complaints. Real People, Real Results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle relative">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary-cta text-secondary-cta" />)}
              </div>
              <p className="text-lg italic mb-8 text-gray-200">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">{review.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{review.source}</p>
                </div>
                <CheckCircle2 className="w-6 h-6 text-accent-green" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/reviews" className="cta-button-secondary">VIEW ALL 38 REVIEWS</Link>
        </div>
      </div>
    </section>
  );
};

const WhyFixUK = () => {
  const pillars = [
    {
      title: "5.0★ Perfect Rating",
      desc: "Not 4.9. Not 4.8. Perfect. 38 customers, zero bad reviews. We take pride in every single job.",
      icon: Star
    },
    {
      title: "Genuinely 24 Hours",
      desc: "3am, weekends, bank holidays, Christmas. We answer the phone and we show up.",
      icon: Clock
    },
    {
      title: "We Save Homes",
      desc: "Real customer saved from house fire. This isn't just work; it's about safety and peace of mind.",
      icon: Shield
    },
    {
      title: "30-Minute Response",
      desc: "Out within 30 minutes for genuine emergencies in Birmingham. We don't keep you waiting.",
      icon: Zap
    }
  ];

  return (
    <section className="py-24 bg-primary-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter leading-none">
              WHY BIRMINGHAM <br />
              <span className="text-primary-cta">TRUSTS FIXUK</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              We aren't a national franchise. We're a local Birmingham team dedicated to keeping our community safe, one circuit at a time.
            </p>
            <div className="space-y-8">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex gap-6">
                  <div className="bg-card-bg p-4 rounded-xl border border-border-subtle h-fit">
                    <pillar.icon className="w-8 h-8 text-primary-cta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-2 uppercase">{pillar.title}</h3>
                    <p className="text-gray-400">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-border-subtle">
              <img 
                src="https://picsum.photos/seed/electrician/800/800" 
                alt="FixUK Electrician at work" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-primary-cta p-8 rounded-2xl shadow-2xl max-w-xs">
              <p className="text-4xl font-display font-black mb-2">30 MINS</p>
              <p className="font-bold uppercase tracking-widest text-sm">Average Emergency Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EICRLandlord = () => {
  return (
    <section className="py-24 bg-secondary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-bg rounded-3xl p-8 md:p-16 border border-border-subtle relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Shield className="w-64 h-64" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6 uppercase tracking-tighter">
                LANDLORDS: YOUR EICR IS A <span className="text-accent-green">LEGAL REQUIREMENT</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Since 2020, all rental properties in England require a valid EICR certificate every 5 years. Failure to comply = fines up to £30,000. FixUK provides same-week inspections with certificates issued the same day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                <div className="bg-primary-bg p-4 rounded-xl border border-border-subtle text-center">
                  <p className="text-primary-cta font-black text-2xl">£30,000</p>
                  <p className="text-[10px] font-bold uppercase text-gray-500">Max Fine</p>
                </div>
                <div className="bg-primary-bg p-4 rounded-xl border border-border-subtle text-center">
                  <p className="text-accent-green font-black text-2xl">5 YEARS</p>
                  <p className="text-[10px] font-bold uppercase text-gray-500">Validity</p>
                </div>
                <div className="bg-primary-bg p-4 rounded-xl border border-border-subtle text-center">
                  <p className="text-secondary-cta font-black text-2xl">SAME DAY</p>
                  <p className="text-[10px] font-bold uppercase text-gray-500">Certificate</p>
                </div>
              </div>
              <Link to="/eicr" className="cta-button-primary w-full sm:w-auto">BOOK EICR CERTIFICATE →</Link>
            </div>
            <div className="space-y-6">
              <div className="bg-primary-bg/50 p-6 rounded-xl border border-border-subtle flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                <p className="text-gray-300">Mandatory for all private rental properties in England</p>
              </div>
              <div className="bg-primary-bg/50 p-6 rounded-xl border border-border-subtle flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                <p className="text-gray-300">Must be renewed every 5 years or at change of tenancy</p>
              </div>
              <div className="bg-primary-bg/50 p-6 rounded-xl border border-border-subtle flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                <p className="text-gray-300">FixUK handles all remedial work if the report fails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceAreas = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 uppercase tracking-tighter">AREAS WE SERVE</h2>
          <p className="text-xl text-gray-400">30-minute response time across Birmingham and surrounding areas.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {SERVICE_AREAS.map((area, i) => (
            <div key={i} className="bg-card-bg px-6 py-3 rounded-full border border-border-subtle text-sm font-bold uppercase tracking-widest text-gray-300">
              {area}
            </div>
          ))}
        </div>

        <div className="mt-16 h-[400px] rounded-3xl overflow-hidden border border-border-subtle">
           <iframe 
            src="https://maps.google.com/maps?q=Birmingham&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const ContactBar = () => {
  return (
    <section className="py-24 bg-primary-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-white">READY TO BOOK? ONE CLICK AWAY.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-white text-primary-cta hover:bg-gray-100 font-display font-bold py-6 px-12 rounded-xl text-2xl transition-all shadow-2xl">
            📞 {BUSINESS_DETAILS.phoneDisplay}
          </a>
          <Link to="/contact" className="bg-primary-bg text-white hover:bg-secondary-bg font-display font-bold py-6 px-12 rounded-xl text-2xl transition-all border-2 border-white/20">
            GET FREE QUOTE
          </Link>
        </div>
        <p className="mt-8 text-white/80 font-bold uppercase tracking-widest">NO VOICEMAIL. REAL PEOPLE. 24/7.</p>
      </div>
    </section>
  );
};

export const Home = () => {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ElectricalContractor",
    "name": "FixUK",
    "telephone": "+44 7384 658697",
    "openingHours": "Mo-Su 00:00-23:59",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Birmingham",
      "addressRegion": "West Midlands",
      "addressCountry": "GB"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "38"
    }
  };

  return (
    <>
      <Helmet>
        <title>Birmingham's Only True 24-Hour Electrician | Rated 5.0★ | FixUK</title>
        <meta name="description" content="24-hour emergency electrician in Birmingham. EICR certificates, fuse board replacements, and full rewires. Rated 5.0★ by 38 customers. Available 24/7." />
        <meta name="keywords" content="electrician Birmingham, EICR Birmingham, emergency electrician Birmingham, 24 hour electrician Birmingham, FixUK" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      <Hero />
      <ServicesGrid />
      <SocialProof />
      <WhyFixUK />
      <EICRLandlord />
      <ServiceAreas />
      <ContactBar />
    </>
  );
};
