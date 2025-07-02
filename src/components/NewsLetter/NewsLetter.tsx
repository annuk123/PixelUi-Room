'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { api } from "../../../convex/_generated/api";

import { useMutation } from 'convex/react';

export default function NewsletterSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const subscribe = useMutation(api.newsletter.subscribe);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  try {
    await subscribe({ email });
    setSubmitted(true);
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message);
    } else {
      alert("An unknown error occurred");
    }
  }
};


  return (
    <motion.section
      ref={ref}
      className="py-20 px-4 text-white bg-[#0a0f1c]/30 backdrop-blur-md border border-cyan-700/30 rounded-xl shadow-inner max-w-3xl mx-auto mt-16"
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.4, y: 30, scale: 0.98 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
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
          {submitted ? 'Subscribed ✅' : 'Subscribe'}
        </Button>
      </form>
    </motion.section>
  );
}
