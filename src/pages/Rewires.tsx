import React from 'react';
import { motion } from 'motion/react';
import { Zap, AlertTriangle, Shield, CheckCircle2, Home, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS } from '../constants';

export const Rewires = () => {
  const signs = [
    "Property built before 1970",
    "Old rubber or fabric-insulated wiring",
    "No earth wiring (2-pin plugs throughout)",
    "Sockets with only 2 holes (no earth)",
    "Frequent fuse blowing",
    "Flickering lights",
    "Electric shocks from switches",
    "Preparing for major renovation"
  ];

  const process = [
    { day: "Day 1", title: "Assessment & Planning", desc: "Full survey and circuit mapping." },
    { day: "Day 2-4", title: "First Fix", desc: "Chasing walls and running new cables." },
    { day: "Day 5", title: "Final Fix", desc: "Fitting sockets, switches, and light fittings." },
    { day: "Day 6", title: "Testing & Certification", desc: "Full inspection and certificate issue." },
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>Full House Rewire Birmingham | Trusted Electrician | FixUK</title>
        <meta name="description" content="Full house rewiring in Birmingham by 5.0★ rated FixUK. Minimal disruption, full certification. Signs you need a rewire. Get a free quote today." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Home className="w-16 h-16 text-blue-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            FULL HOUSE <br />
            <span className="text-blue-400">REWIRING</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Does Your Home Need Rewiring? We'll Tell You Honestly. Minimal disruption, full certification.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary">FREE ASSESSMENT</a>
            <a href="#process" className="cta-button-secondary">THE PROCESS</a>
          </div>
        </div>
      </section>

      {/* Signs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">SIGNS YOU NEED A REWIRE</h2>
            <p className="text-xl text-gray-400">Don't ignore the warning signs of aging electrical systems.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signs.map((sign, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border border-border-subtle flex gap-4 items-center">
                <AlertTriangle className="w-6 h-6 text-primary-cta shrink-0" />
                <span className="font-bold text-sm uppercase tracking-wider">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disruption */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-card-bg p-12 rounded-3xl border border-border-subtle">
              <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter">MINIMISING DISRUPTION</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                FixUK works methodically room by room. Most families can remain in the property during rewiring, though some rooms will be temporarily out of use. We use industrial dust extraction to keep your home as clean as possible.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-center text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-accent-green" />
                  <span>Room-by-room methodical approach</span>
                </div>
                <div className="flex gap-4 items-center text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-accent-green" />
                  <span>Industrial dust extraction used</span>
                </div>
                <div className="flex gap-4 items-center text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-accent-green" />
                  <span>Power restored to essential areas every night</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-black uppercase tracking-tighter">AFTER YOUR REWIRE</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Full EICR Certificate",
                  "Building Regs Certificate",
                  "6-Year Guarantee",
                  "Insurance Documentation",
                ].map((item, i) => (
                  <div key={i} className="bg-primary-bg p-6 rounded-xl border border-border-subtle text-center font-bold uppercase tracking-widest text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">THE REWIRING PROCESS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <div className="text-blue-400 font-display font-black text-xl mb-4 uppercase">{p.day}</div>
                <h3 className="text-lg font-bold uppercase mb-4">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">REWIRE PRICING GUIDE</h2>
            <p className="text-xl text-gray-400">Includes: all cabling, sockets, switches, fuse board, testing, certification.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1-2 Bed Flat", price: "£2,500" },
              { title: "3 Bed House", price: "£3,800" },
              { title: "4+ Bed House", price: "£5,000+" },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg p-12 rounded-2xl border border-border-subtle text-center">
                <h3 className="text-xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="text-blue-400 font-black text-5xl mb-4">FROM {item.price}</p>
                <p className="text-gray-500 mb-8">Estimated Cost</p>
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full">GET EXACT QUOTE</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-white">GET YOUR FREE REWIRE ASSESSMENT</h2>
          <p className="text-xl text-white/80 mb-12 font-bold uppercase tracking-widest">WE'LL TELL YOU HONESTLY IF YOU NEED IT</p>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-white text-blue-600 font-display font-black py-6 px-16 rounded-xl text-2xl shadow-2xl hover:scale-105 transition-transform inline-block">
            📞 CALL: {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
