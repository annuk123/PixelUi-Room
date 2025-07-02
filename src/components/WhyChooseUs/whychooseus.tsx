'use client';

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const features = [
  {
    emoji: "🎨",
    title: "Design-Centric",
    description: "Pixel-perfect, scalable components crafted for visual harmony and user flow.",
  },
  {
    emoji: "⚡",
    title: "Blazing Fast",
    description: "Live previews, instant copy-paste, and seamless integration with your stack.",
  },
  {
    emoji: "🛠️",
    title: "Fully Customizable",
    description: "Need changes? We redesign it—fit to your product’s style, brand, or logic.",
  },
  {
    emoji: "🔓",
    title: "Free & Premium Access",
    description: "Use free components or unlock pro-level visuals — no subscriptions required.",
  },
  {
    emoji: "🤖",
    title: "Modern Tech Stack",
    description: "Powered by Tailwind, Shadcn, Framer Motion, GSAP, and Three.js for dev excellence.",
  },
  {
    emoji: "🤝",
    title: "Indie Built, Community Backed",
    description: "Built with ❤️ by real developers — influenced directly by user feedback.",
  },
];

export default function WhyChooseShadcn() {
  return (
    <section className="py-20 bg-[#0a0f1c]/40 backdrop-blur-xl rounded-2xl text-white border border-cyan-700/40 shadow-inner">
      <div className="text-center mb-12 px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-cyan-400"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Pixel UI?
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-3 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Future-forward components crafted with precision and flexibility — for founders, indie devs, and product builders.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-cyan-800/40 shadow-xl hover:shadow-cyan-600/30 transition duration-300">
              <CardHeader>
                <CardTitle className="text-cyan-300 text-lg">
                  {feature.emoji} {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 mt-1">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
