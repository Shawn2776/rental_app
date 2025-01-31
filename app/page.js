import EquipmentCarousel from "@/components/EquipmentCarousel";

async function getEquipment() {
  const response = await fetch("http://localhost:4000/equipment");
  if (!response.ok) {
    throw new Error("Failed to fetch equipment");
  }
  return response.json();
}

export default async function Home() {
  const equipment = await getEquipment();
  return <EquipmentCarousel equipment={equipment} />;
}
