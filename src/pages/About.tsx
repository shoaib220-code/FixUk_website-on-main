import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Clock, Users, Star, CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS } from '../constants';

export const About = () => {
  const values = [
    { title: "Honesty First", desc: "We tell you what's wrong and what it costs before we start. No hidden surprises.", icon: Star },
    { title: "Safety Always", desc: "We don't cut corners. Ever. That's how houses catch fire. We follow BS 7671 to the letter.", icon: Shield },
    { title: "24/7 Commitment", desc: "If we say 24 hours, we mean 24 hours. We answer the phone at 3am.", icon: Clock },
    { title: "Community", desc: "We're a local Birmingham business, not a franchise. We care about our neighbors.", icon: Users },
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>About FixUK | 24-Hour Birmingham Electricians | Our Story</title>
        <meta name="description" content="Learn about FixUK, Birmingham's 5.0★ rated 24-hour electrician. Our engineers, our values, and why we're available around the clock for you." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-primary-cta mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            WE'RE THE ELECTRICIANS <br />
            <span className="text-primary-cta">WHO SHOW UP</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            At 3am if we have to. Birmingham's most reliable 24-hour electrical team.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black mb-8 uppercase tracking-tighter">OUR STORY</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                FixUK was founded on a simple belief: electrical problems don't happen on schedule, so electricians shouldn't work on one either. We built a team of fully qualified engineers who operate around the clock across Birmingham and West Midlands — not because it's easy, but because that's what homeowners and landlords actually need.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Over the years, we've seen everything from minor socket repairs to preventing major house fires. Our 5.0★ rating isn't just a number; it's a reflection of our commitment to every single customer who calls us in their hour of need.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <p className="text-4xl font-display font-black text-primary-cta mb-2">38</p>
                <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">5.0★ Reviews</p>
              </div>
              <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <p className="text-4xl font-display font-black text-secondary-cta mb-2">24/7</p>
                <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Availability</p>
              </div>
              <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <p className="text-4xl font-display font-black text-accent-green mb-2">100%</p>
                <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Certified</p>
              </div>
              <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <p className="text-4xl font-display font-black text-blue-400 mb-2">30m</p>
                <p className="text-xs font-bold uppercase text-gray-500 tracking-widest">Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineers */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">OUR ENGINEERS</h2>
            <p className="text-xl text-gray-400">Expertise you can trust, 24 hours a day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fully qualified and registered",
              "DBS checked for your safety",
              "City & Guilds / NVQ Level 3",
              "Minimum 5 years experience",
              "Fully insured up to £5m",
              "18th Edition BS 7671 certified",
            ].map((item, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border border-border-subtle flex gap-4 items-center">
                <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">OUR VALUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <v.icon className="w-12 h-12 text-primary-cta mx-auto mb-6" />
                <h3 className="text-xl font-display font-bold mb-4 uppercase">{v.title}</h3>
                <p className="text-gray-400 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-white">READY TO BOOK?</h2>
          <p className="text-xl text-white/80 mb-12 font-bold uppercase tracking-widest">WE'RE AVAILABLE RIGHT NOW</p>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-white text-primary-cta font-display font-black py-6 px-16 rounded-xl text-2xl shadow-2xl hover:scale-105 transition-transform inline-block">
            📞 CALL: {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
