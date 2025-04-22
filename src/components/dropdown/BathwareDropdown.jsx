import React, { useEffect } from "react";

// Example data structure for categories and subcategories
const menu = [
  {
    title: "Commode & Urinal",
    items: [
      "One Piece Commode",
      "Smart Commode",
      "Wall Hung Commode",
      "Squatting Pan",
      "Urinal",
    ],
  },
  {
    title: "Basin",
    items: [
      "Art Basin",
      "Bath Vanity",
      "Under Counter Basin",
      "Semi Recessed Basin",
      "Pedestal Basin",
      "Wall Hung Basin",
      "Wudu Basin",
      "Monoblock Washbasin",
    ],
  },
  {
    title: "Faucet",
    items: [
      "All Faucet Series",
      "Basin Mixer",
      "Push Shower Mixer",
      "Bath Mixer",
      "Pillar Cock",
      "Long Pillar Cock",
      "Bib Cock",
      "Two In One",
      "Sensor Faucet",
    ],
  },
  {
    title: "Bidet",
    items: ["Bidet"],
  },
  {
    title: "Accessories",
    items: [
      "All Accessories Series",
      "Angle Stop Cock",
      "Basin Waste",
      "Bottle Trap",
      "Brush Holder",
      "Toilet Brush Holder",
      "Coat Hook",
      "Double Towel Rail",
      "Glass Shelf",
      "Metal Shelf",
      "Grating",
      "Soap Dispenser",
      "Spout",
      "Push Shower",
      "Towel Rack",
      "Towel Rail",
      "Towel Ring",
      "Paper Holder",
      "Soap Case",
      "Electric Towel Rail",
      "Auto Liquid Dispenser",
    ],
  },
  {
    title: "Shower",
    items: [
      "Shower Set",
      "Shower Panel",
      "Shower Mixer",
      "Overhead Shower",
      "Shower Arm",
      "Shower Essentials",
      "Shower Body Jet",
    ],
  },
  {
    title: "Cozy Showers",
    items: ["Bathtub", "Water Heater", "Shower Enclosure"],
  },
  {
    title: "Mirror",
    items: ["Cabinet Mirror", "Frame Mirror", "LED Mirror"],
  },
  {
    title: "Electronic Appliances",
    items: ["Hand Dryer", "Mosquito Killer"],
  },
];

/**
 * BathwareDropdown Component
 * @param {boolean} isOpen - controls visibility
 * @param {function} onClose - callback to close dropdown
 * @param {function} onSelect - callback(category, item) when an item is clicked
 */
const BathwareDropdown = ({ isOpen, onClose, onSelect }) => {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 z-40"
      onClick={onClose}
    >
      <div
        className="absolute top-0 left-0 w-screen h-[80vh] bg-white z-50 shadow-lg overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Panel with two featured blocks */}
        <div className="w-1/4 flex flex-col">
          <button
            className="flex-1 bg-[url('/images/bathware1.jpg')] bg-cover bg-center relative p-4"
            onClick={() => onSelect("Featured", "At a Glance")}
          >
            <span className="text-white text-xl font-semibold">Bathware</span>
            <span className="absolute bottom-4 text-white underline">
              At a Glance &rarr;
            </span>
          </button>
          <button
            className="flex-1 bg-[url('/images/bathware2.jpg')] bg-cover bg-center relative p-4"
            onClick={() => onSelect("Featured", "Our New Collections")}
          >
            <span className="text-white text-xl font-semibold">
              Our New Collections
            </span>
            <span className="absolute bottom-4 text-white underline">
              Explore &rarr;
            </span>
          </button>
        </div>

        {/* Right Panel: grid of categories */}
        <div className="w-3/4 p-8 overflow-auto">
          <div className="grid grid-cols-4 grid-rows-3 gap-8">
            {menu.slice(0, 4).map((cat) => (
              <div key={cat.title}>
                <h3 className="font-bold border-l-4 border-black pl-2 mb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:text-black text-sm"
                      onClick={() => onSelect(cat.title, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Accessories spans two columns */}
            <div className="col-span-2">
              <h3 className="font-bold border-l-4 border-black pl-2 mb-2">
                Accessories
              </h3>
              <div className="flex flex-wrap gap-2">
                {menu
                  .find((m) => m.title === "Accessories")
                  .items.map((item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:text-black text-sm"
                      onClick={() => onSelect("Accessories", item)}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>

            {/* Empty cell placeholder */}
            <div />

            {/* Last row items */}
            {menu.slice(5).map((cat) => (
              <div key={cat.title}>
                <h3 className="font-bold border-l-4 border-black pl-2 mb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <button
                      key={item}
                      className="text-gray-700 hover:text-black text-sm"
                      onClick={() => onSelect(cat.title, item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BathwareDropdown;

// Example usage in a Navbar component
// import React, { useState } from 'react';
// import BathwareDropdown from './BathwareDropdown';
//
// function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [selection, setSelection] = useState({ category: null, item: null });
//
//   const handleSelect = (category, item) => {
//     setSelection({ category, item });
//     setOpen(false);
//   };
//
//   return (
//     <nav className="relative">
//       <button onClick={() => setOpen((o) => !o)} className="px-4 py-2">
//         Bathware
//       </button>
//       <BathwareDropdown
//         isOpen={open}
//         onClose={() => setOpen(false)}
//         onSelect={handleSelect}
//       />
//       {selection.item && (
//         <div className="mt-4 text-sm text-gray-600">
//           Selected: {selection.category} &gt; {selection.item}
//         </div>
//       )}
//     </nav>
// }
//
// export default Navbar;
