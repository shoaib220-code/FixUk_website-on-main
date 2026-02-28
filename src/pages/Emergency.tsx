import React from 'react';
import { motion } from 'motion/react';
import { Zap, Phone, Clock, Shield, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS, REVIEWS } from '../constants';

export const Emergency = () => {
  const scenarios = [
    { title: "Burning smell from fuse board", icon: AlertTriangle },
    { title: "Total power loss", icon: Zap },
    { title: "Sparking sockets or switches", icon: AlertTriangle },
    { title: "Electrical shock from appliance", icon: AlertTriangle },
    { title: "Tripping circuit that won't reset", icon: Zap },
    { title: "Smoke from wiring or lights", icon: AlertTriangle },
    { title: "Flooding near electrics", icon: AlertTriangle },
    { title: "Carbon marks around sockets", icon: AlertTriangle },
  ];

  const process = [
    { step: 1, title: "You call +44 7384 658697", desc: "Answered 24/7 by a real person." },
    { step: 2, title: "We assess the situation", desc: "Initial diagnosis over the phone (2 mins)." },
    { step: 3, title: "Engineer dispatched", desc: "Immediate dispatch to your location." },
    { step: 4, title: "On-site within 30 mins", desc: "Fastest response in Birmingham." },
    { step: 5, title: "Issue diagnosed & safe", desc: "Immediate action to prevent danger." },
    { step: 6, title: "Full repair carried out", desc: "Most issues fixed on the first visit." },
    { step: 7, title: "Written report provided", desc: "Full documentation for your records." },
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>Emergency Electrician Birmingham | Open 24 Hours | FixUK</title>
        <meta name="description" content="24-hour emergency electrician in Birmingham. 30-minute response. Fuse board failures, burning smells, power loss. Call FixUK now: +44 7384 658697" />
      </Helmet>
      {/* Hero */}
      <section className="bg-primary-cta py-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white/20 backdrop-blur-md p-4 rounded-2xl mb-8"
          >
            <Zap className="w-16 h-16 text-white fill-white" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 uppercase tracking-tighter">
            EMERGENCY? CALL NOW. <br />
            WE ANSWER AT 3AM.
          </h1>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-white text-primary-cta font-display font-black py-6 px-12 rounded-xl text-3xl shadow-2xl hover:scale-105 transition-transform inline-block">
            📞 {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Scenarios */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">WHAT COUNTS AS AN EMERGENCY?</h2>
            <p className="text-xl text-gray-400">If you experience any of these, call us immediately.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-card-bg p-8 rounded-2xl border border-border-subtle flex flex-col items-center text-center">
                <s.icon className="w-12 h-12 text-primary-cta mb-6" />
                <h3 className="text-lg font-bold uppercase leading-tight">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">OUR RESPONSE PROCESS</h2>
            <p className="text-xl text-gray-400">From your call to a safe home in under an hour.</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {process.map((p, i) => (
              <div key={i} className="flex gap-6 bg-card-bg p-6 rounded-xl border border-border-subtle items-center">
                <div className="w-12 h-12 rounded-full bg-primary-cta flex items-center justify-center font-display font-black text-xl shrink-0">
                  {p.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase">{p.title}</h3>
                  <p className="text-gray-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Story */}
      <section className="py-24 bg-primary-cta/10 border-y border-primary-cta/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Shield className="w-16 h-16 text-primary-cta mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-display font-black mb-8 uppercase tracking-tighter">"REALLY SAVED US FROM A HOUSE FIRE"</h2>
          <p className="text-2xl italic text-gray-300 mb-8 leading-relaxed">
            "{REVIEWS[0].text}"
          </p>
          <p className="font-bold text-white text-xl">— {REVIEWS[0].name}, Google Review</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black mb-8 uppercase tracking-tighter">24-HOUR PRICING</h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                  <p className="text-xl text-gray-300">No hidden "out of hours" surcharges</p>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                  <p className="text-xl text-gray-300">Transparent pricing over the phone</p>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                  <p className="text-xl text-gray-300">Free quote before work starts</p>
                </div>
                <div className="flex gap-4 items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                  <p className="text-xl text-gray-300">Payment on completion</p>
                </div>
              </div>
            </div>
            <div className="bg-card-bg p-12 rounded-3xl border border-border-subtle text-center">
              <p className="text-primary-cta font-black text-6xl mb-4">£0</p>
              <p className="text-2xl font-bold uppercase mb-8">CALL OUT FEE</p>
              <p className="text-gray-400 mb-8">We only charge for the work we do. No hidden fees for showing up at 3am.</p>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full">CALL FOR A QUOTE</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-bg text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter">DON'T WAIT — ELECTRICAL FAULTS GET WORSE</h2>
          <p className="text-xl text-gray-400 mb-12">A small spark at 2am can be a house fire by 4am. Call FixUK now for immediate peace of mind.</p>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary text-2xl px-16">📞 CALL NOW: {BUSINESS_DETAILS.phoneDisplay}</a>
        </div>
      </section>
    </div>
  );
};
