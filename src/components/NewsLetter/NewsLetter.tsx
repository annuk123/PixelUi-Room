'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { api } from "../../../convex/_generated/api";
import { useMutation } from 'convex/react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const subscribe = useMutation(api.newsletter.subscribe);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  try {
    const res = await subscribe({ email });

    if (!res) {
      setMessage("Oops! Something went wrong. Try again?");
    } else if (res.status === 'already') {
      setMessage("You've already joined the PixelUi Room 🚀");
    } else if (res.status === 'success') {
      setSubmitted(true);
      setMessage("Welcome aboard! You're officially a PixelUi insider ✨");

      // Clear input & reset button after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  } catch (err: unknown) {
    console.error("Subscription error:", err);
    setMessage("Unexpected error occurred. Please try again.");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  }
};


  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 text-white bg-[#0a0f1c]/30 backdrop-blur-md border border-cyan-700/30 rounded-xl shadow-inner max-w-3xl mx-auto mt-16 relative overflow-visible"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.4, y: 30, scale: 0.98 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Popup shown above the section */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-5 py-2 rounded-lg shadow-lg font-semibold text-sm sm:text-base z-20"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400">
        Stay in the Loop 🪐
      </h2>
      <p className="text-center text-gray-400 mt-2 mb-6 max-w-xl mx-auto">
        Subscribe to get updates whenever new components or features are added. No spam, just top-tier UI.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-[300px] bg-[#1e293b] border border-cyan-600 placeholder:text-gray-500 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-cyan-500 text-black hover:bg-cyan-400 transition font-semibold"
        >
          {submitted ? 'Subscribed' : 'Subscribe'}
        </Button>
      </form>
    </motion.section>
  );
}
