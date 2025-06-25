'use client';

import { useState } from "react";
import ButtonShowcase from "@/components/UIRoomScene/sections/ButtonShowcase";
import InputShowcase from "@/components/UIRoomScene/sections/InputShowcase";
import SwitchShowcase from "@/components/UIRoomScene/sections/SwitchShowcase";
import TabsShowcase from "@/components/UIRoomScene/sections/TabsShowcase";
// Add more showcase components as you build them

const componentTabs = [
  "Buttons",
  "Inputs",
  "Switches",
  "Tabs",
  // "Forms",
  // "Cards",
];

const categories = [
  "All",
  "Business",
  "SaaS Projects",
  "Cybersecurity",
  "Blockchain",
  "Enterprise",
];

export const ComponentHub = () => {
  const [activeTab, setActiveTab] = useState("Buttons");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 text-center">
        Explore UI Components Marketplace
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Pre-built UI components across multiple domains
      </p>

      {/* Component Type Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {componentTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium text-sm
              ${activeTab === tab
                ? "bg-cyan-500 text-black"
                : "bg-cyan-900 text-white border border-cyan-400"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Domain Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1 rounded-full text-xs border
              ${activeCategory === cat
                ? "bg-cyan-600 text-white"
                : "text-cyan-300 border-cyan-500 hover:bg-cyan-800"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Showcase Renderer */}
      <div className="mb-12">
        {activeTab === "Buttons" && (
          <ButtonShowcase selectedCategory={activeCategory} />
        )}
        {activeTab === "Inputs" && (
          <InputShowcase selectedCategory={activeCategory} />
        )}
        {activeTab === "Switches" && (
          <SwitchShowcase selectedCategory={activeCategory} />
        )}
        {activeTab === "Tabs" && (
          <TabsShowcase selectedCategory={activeCategory} />
        )}
        {/* Add more when ready */}
      </div>

      {/* CTA */}
      <div className="text-center border-t border-cyan-800 pt-6">
        <p className="text-gray-400">
          Want a complete design for your product or idea?
        </p>
        <a
          href="/contact"
          className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold rounded-full hover:scale-105 transition"
        >
          Contact Me →
        </a>
      </div>
    </section>
  );
};
