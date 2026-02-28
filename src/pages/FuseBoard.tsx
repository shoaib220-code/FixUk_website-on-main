import React from 'react';
import { motion } from 'motion/react';
import { Zap, AlertTriangle, Shield, CheckCircle2, Clock, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS, REVIEWS } from '../constants';

export const FuseBoard = () => {
  const signs = [
    "Burning smell from the board",
    "Fuses tripping repeatedly",
    "Old ceramic fuse wire (pre-1980s board)",
    "Board feels warm or hot to touch",
    "No RCD protection (modern safety requirement)",
    "Smoke marks or discolouration",
    "Loud buzzing or crackling sounds",
    "Board over 25 years old"
  ];

  const benefits = [
    { title: "RCD Protection", desc: "Saves lives from electric shocks by cutting power in milliseconds." },
    { title: "RCBO Individual Protection", desc: "If one circuit fails, the rest of your home stays powered." },
    { title: "Surge Protection", desc: "Protects expensive electronics from power spikes." },
    { title: "BS 7671 Standards", desc: "Meets current UK electrical safety regulations." },
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>Fuse Board Replacement Birmingham | Consumer Unit Upgrade | FixUK</title>
        <meta name="description" content="Fuse board replacement by 5.0★ rated electricians in Birmingham. Emergency and planned upgrades. FixUK saved one family from a house fire. Call now." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertTriangle className="w-16 h-16 text-secondary-cta mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            FUSE BOARD <br />
            <span className="text-secondary-cta">REPLACEMENT</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Making Noise? Burning Smell? Don't Wait. Upgrade to a modern, safe consumer unit today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary">CALL IMMEDIATELY</a>
            <a href="#process" className="cta-button-secondary">OUR PROCESS</a>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">WARNING SIGNS</h2>
            <p className="text-xl text-gray-400">If you notice any of these, your fuse board needs urgent attention.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signs.map((sign, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border border-border-subtle flex gap-4 items-center">
                <AlertTriangle className="w-6 h-6 text-secondary-cta shrink-0" />
                <span className="font-bold text-sm uppercase tracking-wider">{sign}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Cost */}
      <section className="py-24 bg-primary-cta">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-white mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-white">THE REAL COST OF NOT REPLACING IT</h2>
          <p className="text-2xl italic text-white/90 mb-8 leading-relaxed">
            "{REVIEWS[0].text}"
          </p>
          <p className="text-xl text-white font-bold mb-12">— {REVIEWS[0].name}, Google Review</p>
          <p className="text-xl text-white/80 font-bold uppercase tracking-widest">
            Faulty electrics are the #1 cause of house fires in the UK.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">MODERN CONSUMER UNIT BENEFITS</h2>
            <p className="text-xl text-gray-400">Why upgrading is the best investment for your home's safety.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle flex gap-6">
                <div className="bg-primary-bg p-4 rounded-xl border border-border-subtle h-fit">
                  <CheckCircle2 className="w-8 h-8 text-accent-green" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-2 uppercase">{b.title}</h3>
                  <p className="text-gray-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">THE FIXUK REPLACEMENT PROCESS</h2>
            <p className="text-xl text-gray-400">Most replacements completed in 4-6 hours.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Assessment on arrival (30 mins)",
              "Power isolated safely",
              "Old board removed",
              "New unit installed & tested",
            ].map((step, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
                <div className="w-12 h-12 rounded-full bg-secondary-cta flex items-center justify-center font-display font-black text-xl mx-auto mb-6">
                  {i + 1}
                </div>
                <p className="font-bold uppercase tracking-wider">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card-bg rounded-3xl p-12 border border-border-subtle text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-black mb-8 uppercase tracking-tighter">PRICING</h2>
            <div className="space-y-8 mb-12">
              <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                <span className="text-xl font-bold uppercase">Standard Replacement</span>
                <span className="text-secondary-cta font-black text-3xl">FROM £350</span>
              </div>
              <div className="flex justify-between items-center border-b border-border-subtle pb-4">
                <span className="text-xl font-bold uppercase">Emergency Same-Day</span>
                <span className="text-primary-cta font-black text-3xl">CONTACT US</span>
              </div>
            </div>
            <p className="text-gray-400 mb-12">Includes all labour, unit, testing and certification. No hidden costs.</p>
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full text-xl">⚠️ DON'T IGNORE WARNING SIGNS — CALL NOW</a>
          </div>
        </div>
      </section>
    </div>
  );
};
