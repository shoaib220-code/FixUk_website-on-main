import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, Lightbulb, Sun, ShieldCheck, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS } from '../constants';

export const Lighting = () => {
  const indoor = [
    "LED downlights / recessed spotlights",
    "Pendant lighting installation",
    "Under-cabinet kitchen lighting",
    "Smart lighting systems (Hue, etc.)",
    "Dimmer switches and controls",
    "Feature wall lighting"
  ];

  const outdoor = [
    "Security floodlights (PIR sensor)",
    "Garden pathway lighting",
    "Driveway and garage lighting",
    "Soffit/fascia lighting",
    "Decorative outdoor fixtures"
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>Lighting Installation Birmingham | LED, Outdoor, Spotlights | FixUK</title>
        <meta name="description" content="Professional lighting installation in Birmingham. LED downlights, outdoor security, garden lighting, spotlights. 5.0★ rated. Free quotes. Call FixUK." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Lightbulb className="w-64 h-64 text-yellow-400" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            TRANSFORM YOUR HOME <br />
            <span className="text-yellow-400">WITH PERFECT LIGHTING</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Professional lighting installation in Birmingham. From energy-saving LEDs to high-tech security lighting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary">GET FREE QUOTE</a>
            <a href="#services" className="cta-button-secondary">VIEW SERVICES</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Indoor */}
            <div className="bg-card-bg p-12 rounded-3xl border border-border-subtle">
              <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                <Lightbulb className="w-8 h-8 text-yellow-400" /> INDOOR LIGHTING
              </h2>
              <ul className="space-y-6">
                {indoor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xl text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outdoor */}
            <div className="bg-card-bg p-12 rounded-3xl border border-border-subtle">
              <h2 className="text-3xl font-display font-black mb-8 uppercase tracking-tighter flex items-center gap-4">
                <Sun className="w-8 h-8 text-blue-400" /> OUTDOOR LIGHTING
              </h2>
              <ul className="space-y-6">
                {outdoor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-center text-xl text-gray-300">
                    <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Upgrade */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">WHY UPGRADE YOUR LIGHTING?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "80% Energy Saving", desc: "Modern LED upgrades pay for themselves in energy savings within months." },
              { title: "Improved Security", desc: "Smart PIR floodlights deter intruders before they reach your door." },
              { title: "Modern Aesthetic", desc: "Transform the mood and value of your home with professional design." },
            ].map((item, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <h3 className="text-xl font-display font-bold mb-4 uppercase text-yellow-400">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">TRANSFORMATIONS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card-bg rounded-2xl overflow-hidden border border-border-subtle">
              <div className="grid grid-cols-2 h-64">
                <div className="bg-gray-900 flex items-center justify-center text-gray-600 font-bold uppercase">Old Pendant</div>
                <div className="bg-yellow-400/10 flex items-center justify-center text-yellow-400 font-bold uppercase">Modern LEDs</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase">Kitchen Upgrade</h3>
                <p className="text-gray-400">Replaced single dim pendant with 8 recessed LED spotlights and under-cabinet feature lighting.</p>
              </div>
            </div>
            <div className="bg-card-bg rounded-2xl overflow-hidden border border-border-subtle">
              <div className="grid grid-cols-2 h-64">
                <div className="bg-gray-900 flex items-center justify-center text-gray-600 font-bold uppercase">Dark Driveway</div>
                <div className="bg-blue-400/10 flex items-center justify-center text-blue-400 font-bold uppercase">Security PIR</div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 uppercase">Security Overhaul</h3>
                <p className="text-gray-400">Installed 3 high-power PIR floodlights and soffit lighting for 360° property coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-yellow-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-primary-bg">GET A LIGHTING QUOTE</h2>
          <p className="text-xl text-primary-bg/80 mb-12 font-bold uppercase tracking-widest">USUALLY COMPLETED IN 1 DAY</p>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-primary-bg text-white font-display font-black py-6 px-16 rounded-xl text-2xl shadow-2xl hover:scale-105 transition-transform inline-block">
            📞 CALL: {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
