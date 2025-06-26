"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import RandomParticles from '@/components/HeroSection/RandomParticles/RandomParticles';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaAndroid,
  FaYoutube
} from "react-icons/fa";

export default function ContactPage() {
  const submitContactMessage = useMutation(api.contact.submitContactMessage);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [honeyPot, setHoneyPot] = useState("");
  const [delivery, setDelivery] = useState("");
const [designType, setDesignType] = useState("");
const [domain, setDomain] = useState("");
const [budget, setBudget] = useState("");
const [file, setFile] = useState<File | null>(null);
const [projectDetails, setProjectDetails] = useState("");


  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/annuk123",
    },
    {
      name: "BioLink",
      icon: <FaAndroid />, 
      href: "https://bio.link/annukumalu",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/annu-kumari-540337237/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://x.com/Annu66126617",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/annuk987/",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      href: "https://www.youtube.com/channel/UC3wYJlVEy9cMi5e_sZG-Q7Q",
    },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (honeyPot !== "") return;

  if (!name || !email || !delivery || !designType || !domain) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setLoading(true);

  try {
    let fileBase64: string | undefined = undefined;

    if (file) {
      try {
        fileBase64 = await convertFileToBase64(file);
      } catch (err) {
        console.error("File conversion failed:", err);
        toast.error("Failed to upload file. Please try again.");
        setLoading(false);
        return;
      }
    }

    // ✅ Optional: Submit to Convex
    await submitContactMessage({
      name,
      email,
      delivery,
      designType,
      domain,
      budget,
      projectDetails,
      file: fileBase64
    });

    // ✅ Submit to Formspree
    const response = await fetch("https://formspree.io/f/myzjbrvo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        delivery,
        designType,
        domain,
        budget,
        projectDetails,
        file: fileBase64, // ✅ fixed here
      }),
    });

    if (!response.ok) {
      throw new Error("Formspree submission failed");
    }

    toast.success("Message sent!");
    setSubmitted(true);

    // Reset form fields
    setName("");
    setEmail("");
    setDelivery("");
    setDesignType("");
    setDomain("");
    setBudget("");
    setProjectDetails("");
    setFile(null);
  } catch (err) {
    console.error("Submission error:", err);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};



  function cn(...classes: (string | boolean | undefined | null)[]): string {
    return classes.filter(Boolean).join(" ");
  }

  async function convertFileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}


  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg animated-gradient-bg">

       {/* Background Canvas */}
            <div className="fixed inset-0 z-0 pointer-events-none">
              <Canvas
                camera={{ position: [0, 0, 10], fov: 75 }}
                gl={{ alpha: true }}
              >
                <Suspense fallback={null}>
                  <RandomParticles />
                </Suspense>
              </Canvas>
            </div>
      
            {/* Scrollable Main Content */}
            <main className="relative z-10 px-4 pt-24 pb-32 bg-black/30 backdrop-blur text-white min-h-screen">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto p-8 rounded-3xl shadow-2xl bg-black/30 relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-purple-300 opacity-20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-300 opacity-20 rounded-full blur-3xl z-0" />

        <h2 className="relative text-4xl font-extrabold text-center tracking-tight bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent animate-gradient mb-6 z-10">
          Contact Us
        </h2>

{submitted ? (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="text-center p-6 rounded-3xl bg-gradient-to-br from-white via-green-50 to-green-100 shadow-2xl border border-green-300"
  >
    <h3 className="text-2xl font-bold text-green-700 mb-2">Thank you! 🎉</h3>
    <p className="text-gray-700 mb-4">Your message has been sent successfully.</p>
    <Button
      onClick={() => {
        setSubmitted(false);
        setDelivery("");
        setDesignType("");
        setDomain("");
        setBudget("");
        setProjectDetails("");
        setFile(null);
      }}
      className="mt-2"
    >
      Send Another Message
    </Button>
  </motion.div>
) : (
  <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
    {/* Honeypot (spam prevention) */}
    <input
      type="text"
      value={honeyPot}
      onChange={(e) => setHoneyPot(e.target.value)}
      className="hidden"
      autoComplete="off"
      tabIndex={-1}
      aria-hidden="true"
    />

            <div>
              <label className="block text-sm font-medium text-gradient mb-1">Your Name</label>
              <Input
                type="text"
                placeholder="e.g., Annu Kumari"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gradient mb-1">Your Email</label>
              <Input
                type="email"
                placeholder="abc123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            <div className="grid gap-4 sm:grid-cols-2">
  <div>
    <label className="block text-sm font-medium text-gradient mb-1">Preferred Delivery Time</label>
    <select
      required
      className="w-full rounded-md border border-gray-600 bg-black/30 p-2 text-white"
      value={delivery}
      onChange={(e) => setDelivery(e.target.value)}
    >
      <option value="">Select a timeframe</option>
      <option value="1_hour">Within 1 Hour</option>
      <option value="1_day">Within 1 Day</option>
      <option value="2_days">Within 2 Days</option>
      <option value="3_days">Within 3 Days</option>
      <option value="1_week">Within a Week</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gradient mb-1">Design Type</label>
    <select
      required
      className="w-full rounded-md border border-gray-600 bg-black/30 p-2 text-white"
      value={designType}
      onChange={(e) => setDesignType(e.target.value)}
    >
      <option value="">Choose design type</option>
      <option value="landing_page">Landing Page</option>
      <option value="ui_component">UI Component</option>
      <option value="icon_set">Icon Set</option>
      <option value="svg_divider">SVG Page Divider</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gradient mb-1">Product Domain</label>
    <select
      required
      className="w-full rounded-md border border-gray-600 bg-black/30 p-2 text-white"
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    >
      <option value="">Select product type</option>
      <option value="business">Business Website</option>
      <option value="portfolio">Personal Portfolio</option>
      <option value="cybersecurity">Cybersecurity</option>
      <option value="blockchain">Blockchain / Web3</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div>
    <label className="block text-sm font-medium text-gradient mb-1">Budget (optional)</label>
    <Input
      type="text"
      placeholder="e.g., ₹3000, $100"
      value={budget}
      onChange={(e) => setBudget(e.target.value)}
    />
  </div>
</div>

<div className="pt-4">
  <label className="block text-sm font-medium text-gradient mb-1">Upload Design (JPG, PNG, PDF, SVG)</label>
  <Input
    type="file"
    accept=".jpg,.jpeg,.png,.pdf,.svg"
    onChange={(e) => setFile(e.target.files?.[0] || null)}
    className="file:rounded-md file:border-0 file:bg-gradient-to-r file:from-purple-600 file:to-indigo-600 file:text-white file:px-4 file:py-2 file:cursor-pointer hover:file:bg-gradient-to-r hover:file:from-purple-500 hover:file:to-indigo-500"
  />
</div>

<div>
  <label className="block text-sm font-medium text-gradient mb-1"> Project Notes</label>
  <Textarea
    placeholder="Please tell about what you want to build or provide any additional details about your project, such as specific requirements, design preferences, or any other information that will help us understand your needs better."
    value={projectDetails}
    onChange={(e) => setProjectDetails(e.target.value)}
    className="min-h-[100px] resize-none placeholder:text-gray-500"
  />
</div>

{/* Submit button handler */}

<Button
  type="submit"
  disabled={loading} // disables the button while loading
  className={cn(
    `group relative inline-flex items-center justify-center
     px-10 py-3 rounded-full
     bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600
     text-white font-bold text-lg tracking-wide
     shadow-xl hover:shadow-purple-400/30
     hover:scale-105 transition-all duration-300 ease-in-out
     focus:outline-none focus:ring-4 focus:ring-fuchsia-300 focus:ring-opacity-70
     disabled:opacity-50 disabled:cursor-not-allowed`,
    loading && "animate-pulse cursor-wait"
  )}
>
  {loading ? (
    <span className="flex items-center gap-2">
      <svg
        className="w-5 h-5 animate-spin text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
        />
      </svg>
      Sending...
    </span>
  ) : (
    <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
      <span>Send Message</span>
      <svg
        className="w-5 h-5 text-white transition-transform group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </span>
  )}
</Button>


          </form>
        )}
      </motion.div>

      {/* Socials */}
<div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50 text-2xl">
  {socials.map(({ name, icon, href }, i) => (
    <motion.a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition transform hover:scale-125"
      whileHover={{ scale: 1.2 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: i * 0.05
      }}
      aria-label={name}
    >
      {icon}
    </motion.a>
  ))}
</div>

      </main>
    </div>
  );
}