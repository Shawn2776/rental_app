import Image from "next/image";
import EquipmentScroller from "./components/EquipmentScroller";

export default function Home() {
  return (
    <div>
      <div className="hero bg-primary text-white text-center py-20">
        <h1 className="text-4xl font-bold">Welcome to Equipment Rentals</h1>
      </div>
      <EquipmentScroller />
    </div>
  );
}
