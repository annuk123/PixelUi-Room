'use client';

import { useState } from "react";
import ButtonShowcase from "@/components/UIRoomScene/sections/ButtonShowcase";
import InputShowcase from "@/components/UIRoomScene/sections/InputShowcase";
import SwitchShowcase from "@/components/UIRoomScene/sections/SwitchShowcase";
import TabsShowcase from "@/components/UIRoomScene/sections/TabsShowcase";
import { ChevronDown, ChevronUp } from "lucide-react"; 
import CardShowcase from "@/components/UIRoomScene/sections/cardsShowcase";
import CyberSecuritySignInCard from "@/components/UIRoomScene/cards/cybersecurity/CyberSecuritySignInCard";
import BlockchainSignInCard from "@/components/UIRoomScene/cards/blockchain/BlockChainSignIn";
import BusinessSignInCard from "@/components/UIRoomScene/cards/business/BusinessSignInCard";
import ClassicSignInCard from "@/components/UIRoomScene/cards/classic/ClassicCard";
import FinanceSignInCard from "@/components/UIRoomScene/cards/finance/FinanceCard";
import EducationSignInCard from "@/components/UIRoomScene/cards/education/Education";
import SocialMediaSignInCard from "@/components/UIRoomScene/cards/socialmedia/SocialMediaCard";
import TravelSignInCard from "@/components/UIRoomScene/cards/travel/TravelCard";

const componentTabs = [
  "Buttons",
  "Inputs",
  "Switches",
  "Tabs",
  "SignIn Cards",
  "Forms",
  "Toolbars",
  "Navigation",
  "Typography",
  "Sun/Moon icons",
  "Color Pickers",
  "File Uploads",
  "Ratings",
  "Time Pickers",
  "Selects",
  "Modals",
  "Tooltips",
  "Dropdowns",
  "Menus",
  "Lists",
  "Carousels",
  "Hamburgers",
  "Popovers",
  "Toasts",
  "Sliders",
  "Accordions",
  "Progress Bars",
  "Notifications",
  "Avatars",
  "Badges",
  "Tags",
  "Search Bars",
  "Checkboxes",
  "Radio Buttons",
  "Date Pickers",
  "Spinners / Loaders",
  "Skeletons",
  "Tables",
  "Pagination",
  "Breadcrumbs",
  "Drawers",
  "Alerts",
  "Sidebars",
  "Navbars",
  "Footers",
  "Command Palette"
];

const visibleCount = 8;

const categories = [
  "All",
  "Business",
  "Cybersecurity",
  "Blockchain",
  "Enterprise",
  "Gaming",
  "Classic",
  "Finance",
  "E-commerce",
  "Education",
  "Health",
  "Social Media",
  "Travel",
];

export const ComponentHub = () => {
  // const [activeTab, setActiveTab] = useState(componentTabs[0]);
   const [activeTab, setActiveTab] = useState("Buttons");
  const [activeCategory, setActiveCategory] = useState("All");
  // const [activeTab, setActiveTab] = useState(componentTabs[0]);
  const [showAll, setShowAll] = useState(false);

  const visibleTabs = showAll ? componentTabs : componentTabs.slice(0, visibleCount);


  return (
    <section className="mt-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cyan-400 text-center">
        Explore UI Components Marketplace
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Pre-built UI components across multiple domains
      </p>

      {/* Component Type Tabs */}
     <div className="flex flex-wrap justify-center gap-4 mb-4">
        {visibleTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full font-medium text-sm transition
              ${activeTab === tab
                ? "bg-cyan-500 text-black"
                : "bg-cyan-900 text-white border border-cyan-400"}`}
          >
            {tab}
          </button>
        ))}
      {/* </div> */}

{componentTabs.length > visibleCount && (
  <div className="flex justify-end w-full pr-4 ">
    <button
      onClick={() => setShowAll(!showAll)}
      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition "
    >
      {showAll ? (
        <>
          View Less <ChevronUp size={16} />
        </>
      ) : (
        <>
          View More Components <ChevronDown size={16} />
        </>
      )}
    </button>
  </div>
)}
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
        {activeTab === "SignIn Cards" && (
          <CardShowcase selectedCategory={activeCategory} />
        )}
        {activeTab === "CyberSecurity" && (
          <CyberSecuritySignInCard />
        )}
        {activeTab === "Blockchain" && (
          <BlockchainSignInCard />
        )}
        {activeTab === "Business" && (
          <BusinessSignInCard />
        )}
        {activeTab === "Classic" && (
          <ClassicSignInCard />
        )}
        {activeTab === "Finance" && (
          <FinanceSignInCard />
        )}
        {activeTab === "Education" && (
          <EducationSignInCard />
        )}
        {activeTab === "Social Media" && (
          <SocialMediaSignInCard />
        )}
        {activeTab === "Travel" && (
          <TravelSignInCard />
        )}
        
        
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
