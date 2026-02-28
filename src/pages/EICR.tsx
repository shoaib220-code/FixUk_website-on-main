import React from 'react';
import { motion } from 'motion/react';
import { Shield, CheckCircle2, AlertTriangle, FileText, Clock, Gavel, Info } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS } from '../constants';

export const EICR = () => {
  const checklist = [
    "Consumer unit / fuse board condition",
    "Wiring condition throughout property",
    "Earthing and bonding",
    "Smoke detectors and emergency lighting",
    "Socket outlets and switches",
    "Fixed electrical equipment",
    "Lighting installations",
    "Any outdated wiring (e.g., old rubber insulation)"
  ];

  const outcomes = [
    { code: "Satisfactory", title: "No action required", desc: "Certificate valid for 5 years.", color: "bg-accent-green" },
    { code: "C3", title: "Improvement Recommended", desc: "Not urgent but worth addressing.", color: "bg-secondary-cta" },
    { code: "C2", title: "Potentially Dangerous", desc: "Must be fixed before certificate issued.", color: "bg-orange-500" },
    { code: "C1", title: "Immediate Danger", desc: "Immediate action required.", color: "bg-primary-cta" },
  ];

  return (
    <div className="pb-24">
      <Helmet>
        <title>EICR Certificate Birmingham | Landlord Electrical Inspection | FixUK</title>
        <meta name="description" content="EICR certificates for landlords and homeowners in Birmingham. Same-week availability. Certificate issued same day. Legal compliance guaranteed. Call FixUK." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-accent-green mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            EICR CERTIFICATE <br />
            <span className="text-accent-green">BIRMINGHAM</span>
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Stay Legal, Stay Safe. Birmingham's leading provider of landlord electrical safety certificates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary">BOOK EICR NOW</a>
            <a href="#pricing" className="cta-button-secondary">VIEW PRICING</a>
          </div>
        </div>
      </section>

      {/* What is EICR */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-black mb-8 uppercase tracking-tighter">WHAT IS AN EICR?</h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                An Electrical Installation Condition Report (EICR) is a formal document produced after a qualified electrician inspects your property's electrical systems. It assesses the safety and condition of all wiring, sockets, fuse boards, and electrical installations.
              </p>
              <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-secondary-cta" /> WHY DO I NEED ONE?
                </h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" /> Legal requirement for all rental properties</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" /> Essential for home insurance validity</li>
                  <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" /> Peace of mind for homeowners</li>
                </ul>
              </div>
            </div>
            <div className="bg-primary-cta/10 p-12 rounded-3xl border border-primary-cta/20">
              <Gavel className="w-12 h-12 text-primary-cta mb-6" />
              <h3 className="text-3xl font-display font-black mb-6 uppercase tracking-tighter">LEGAL REQUIREMENTS</h3>
              <div className="space-y-6 text-gray-300">
                <p>• Mandatory since June 2020 for all private rental properties in England</p>
                <p>• Must be renewed every 5 years (or more frequently if recommended)</p>
                <p>• Must be provided to tenants within 28 days of inspection</p>
                <p>• Fines for non-compliance: up to £30,000</p>
                <p className="text-primary-cta font-bold">Landlords can be prosecuted even if no accident occurs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">WHAT WE INSPECT</h2>
            <p className="text-xl text-gray-400">Our comprehensive 100-point safety checklist.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((item, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border border-border-subtle flex gap-4 items-center">
                <CheckCircle2 className="w-6 h-6 text-accent-green shrink-0" />
                <span className="font-bold text-sm uppercase tracking-wider">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">EICR OUTCOMES EXPLAINED</h2>
            <p className="text-xl text-gray-400">Understanding your report results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((o, i) => (
              <div key={i} className="bg-card-bg rounded-2xl border border-border-subtle overflow-hidden">
                <div className={`${o.color} p-4 text-center font-display font-black text-xl`}>
                  {o.code}
                </div>
                <div className="p-8">
                  <h3 className="font-bold mb-4 uppercase">{o.title}</h3>
                  <p className="text-gray-400">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-secondary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-black mb-4 uppercase tracking-tighter">EICR PRICING</h2>
            <p className="text-xl text-gray-400">Transparent, fixed-fee pricing. No VAT surprises.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
              <h3 className="text-xl font-bold mb-4 uppercase">1-2 BED PROPERTY</h3>
              <p className="text-accent-green font-black text-5xl mb-4">£120</p>
              <p className="text-gray-500 mb-8">Fixed Price</p>
              <ul className="text-left space-y-4 text-gray-400 mb-8">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Full Inspection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Same-Day Certificate</li>
              </ul>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full">BOOK NOW</a>
            </div>
            <div className="bg-card-bg p-8 rounded-2xl border-2 border-accent-green text-center relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase">MOST POPULAR</div>
              <h3 className="text-xl font-bold mb-4 uppercase">3-4 BED PROPERTY</h3>
              <p className="text-accent-green font-black text-5xl mb-4">£160</p>
              <p className="text-gray-500 mb-8">Fixed Price</p>
              <ul className="text-left space-y-4 text-gray-400 mb-8">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Full Inspection</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Same-Day Certificate</li>
              </ul>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full">BOOK NOW</a>
            </div>
            <div className="bg-card-bg p-8 rounded-2xl border border-border-subtle text-center">
              <h3 className="text-xl font-bold mb-4 uppercase">5+ BED / COMMERCIAL</h3>
              <p className="text-accent-green font-black text-4xl mb-4">QUOTE</p>
              <p className="text-gray-500 mb-8">Contact Us</p>
              <ul className="text-left space-y-4 text-gray-400 mb-8">
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Bespoke Assessment</li>
                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-accent-green" /> Same-Day Certificate</li>
              </ul>
              <a href={`tel:${BUSINESS_DETAILS.phone}`} className="cta-button-primary w-full">GET QUOTE</a>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-500 font-bold uppercase tracking-widest">CERTIFICATE ISSUED SAME DAY AS INSPECTION.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-accent-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-8 uppercase tracking-tighter text-white">BOOK YOUR EICR TODAY</h2>
          <p className="text-xl text-white/80 mb-12 font-bold uppercase tracking-widest">SAME-WEEK AVAILABILITY IN BIRMINGHAM</p>
          <a href={`tel:${BUSINESS_DETAILS.phone}`} className="bg-white text-accent-green font-display font-black py-6 px-16 rounded-xl text-2xl shadow-2xl hover:scale-105 transition-transform inline-block">
            📞 CALL: {BUSINESS_DETAILS.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
};
