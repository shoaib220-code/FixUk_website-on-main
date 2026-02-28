import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { BUSINESS_DETAILS, SERVICE_AREAS } from '../constants';

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send the data here
  };

  return (
    <div className="pb-24">
      <Helmet>
        <title>Contact FixUK Birmingham | 24-Hour Electrician | Free Quote</title>
        <meta name="description" content="Contact FixUK for 24-hour electrical services in Birmingham. Call +44 7384 658697, WhatsApp us, or fill in our form for a free quote." />
      </Helmet>
      {/* Hero */}
      <section className="bg-secondary-bg py-24 border-b border-border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 text-primary-cta mx-auto mb-8" />
          <h1 className="text-5xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">
            WE ANSWER 24 HOURS A DAY
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            No Voicemail. Real People. 30 Minute Emergency Response.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-display font-black mb-12 uppercase tracking-tighter">GET IN TOUCH</h2>
              
              <div className="space-y-8 mb-16">
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="flex items-center gap-6 bg-card-bg p-8 rounded-2xl border border-border-subtle hover:border-primary-cta transition-colors group">
                  <div className="bg-primary-cta p-4 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-1">Call 24/7</p>
                    <p className="text-2xl font-display font-black text-white">{BUSINESS_DETAILS.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsapp}`} className="flex items-center gap-6 bg-card-bg p-8 rounded-2xl border border-border-subtle hover:border-[#25D366] transition-colors group">
                  <div className="bg-[#25D366] p-4 rounded-xl text-white group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 tracking-widest mb-1">WhatsApp Us</p>
                    <p className="text-2xl font-display font-black text-white">Message FixUK</p>
                  </div>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary-cta shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase mb-2">Coverage</h4>
                    <p className="text-gray-400">Birmingham & All West Midlands Areas</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary-cta shrink-0" />
                  <div>
                    <h4 className="font-bold uppercase mb-2">Hours</h4>
                    <p className="text-gray-400">Open 24 Hours, 7 Days a Week, 365 Days a Year</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h4 className="font-bold uppercase mb-6 tracking-widest text-sm text-gray-500">Service Areas Include:</h4>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.slice(0, 10).map((area, i) => (
                    <span key={i} className="text-xs font-bold uppercase bg-secondary-bg px-3 py-1 rounded border border-border-subtle text-gray-400">{area}</span>
                  ))}
                  <span className="text-xs font-bold uppercase bg-secondary-bg px-3 py-1 rounded border border-border-subtle text-gray-400">+ All West Midlands</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card-bg p-8 md:p-12 rounded-3xl border border-border-subtle relative overflow-hidden">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-8">
                    <Zap className="w-10 h-10 text-white fill-white" />
                  </div>
                  <h3 className="text-3xl font-display font-black mb-4 uppercase">REQUEST SENT!</h3>
                  <p className="text-xl text-gray-400 mb-8">We'll call you back within 30 minutes.</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary-cta font-bold uppercase tracking-widest text-sm underline">Send another request</button>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-display font-black mb-8 uppercase tracking-tighter">GET A FREE QUOTE</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Full Name *</label>
                        <input required type="text" className="w-full bg-primary-bg border border-border-subtle rounded-lg p-4 focus:border-primary-cta outline-none transition-colors" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Phone Number *</label>
                        <input required type="tel" className="w-full bg-primary-bg border border-border-subtle rounded-lg p-4 focus:border-primary-cta outline-none transition-colors" placeholder="07123 456789" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Service Needed *</label>
                      <select required className="w-full bg-primary-bg border border-border-subtle rounded-lg p-4 focus:border-primary-cta outline-none transition-colors appearance-none">
                        <option value="">Select a service...</option>
                        <option value="emergency">Emergency Callout</option>
                        <option value="eicr">EICR Certificate</option>
                        <option value="fuseboard">Fuse Board Replacement</option>
                        <option value="rewire">Full House Rewire</option>
                        <option value="lighting">Lighting Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-gray-500 tracking-widest">Message / Details</label>
                      <textarea rows={4} className="w-full bg-primary-bg border border-border-subtle rounded-lg p-4 focus:border-primary-cta outline-none transition-colors" placeholder="Tell us about your electrical issue..."></textarea>
                    </div>
                    <button type="submit" className="cta-button-primary w-full flex items-center justify-center gap-3 text-xl">
                      <Send className="w-5 h-5" /> SEND MY REQUEST
                    </button>
                    <p className="text-center text-xs text-gray-500 font-bold uppercase tracking-widest">WE'LL CALL BACK WITHIN 30 MINUTES</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] border-y border-border-subtle">
        <iframe 
          src="https://maps.google.com/maps?q=Birmingham&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer"
        ></iframe>
      </section>
    </div>
  );
};
