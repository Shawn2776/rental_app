"use client";

import { useRef, useState, useEffect } from "react";
import equipmentData from "@/app/data/equipment.json";

export default function EquipmentScroller() {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  useEffect(() => {
    updateButtons();
    containerRef.current.addEventListener("scroll", updateButtons);
    return () =>
      containerRef.current.removeEventListener("scroll", updateButtons);
  }, []);

  function updateButtons() {
    if (!containerRef.current) return;
    setShowLeft(containerRef.current.scrollLeft > 0);
    setShowRight(
      containerRef.current.scrollLeft + containerRef.current.clientWidth <
        containerRef.current.scrollWidth
    );
  }

  function scrollLeft() {
    containerRef.current.scrollBy({ left: -220, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  }

  function scrollRight() {
    containerRef.current.scrollBy({ left: 220, behavior: "smooth" });
    setTimeout(updateButtons, 300);
  }

  return (
    <div className="relative flex items-center px-4 py-6">
      {showLeft && (
        <button
          className="absolute left-0 bg-black text-white p-2 rounded-full shadow-lg"
          onClick={scrollLeft}
        >
          &#9664;
        </button>
      )}
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth w-full px-10"
      >
        {equipmentData.equipment.map((item) => (
          <div key={item.id} className="card w-40 bg-base-200 p-4 shadow-md">
            {item.name}
          </div>
        ))}
      </div>
      {showRight && (
        <button
          className="absolute right-0 bg-black text-white p-2 rounded-full shadow-lg"
          onClick={scrollRight}
        >
          &#9654;
        </button>
      )}
    </div>
  );
}
