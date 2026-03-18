import { Settings, Globe, Zap } from "lucide-react";
import { useState } from "react";
import CursorCard from "./CursorCard";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const associates = [
  {
    id: "tt",
    icon: Settings,
    name: "Terracotta Tech",
    tagline: "Digital solutions & retail tech",
    image: heroSlide2,
    info: "Terracotta Tech is the digital backbone of AURA, building seamless e-commerce platforms, inventory systems, and customer analytics tailored for fashion retail.",
  },
  {
    id: "forge",
    icon: Zap,
    name: "Forge",
    tagline: "Manufacturing & supply chain",
    image: heroSlide3,
    info: "Forge manages end-to-end manufacturing across 12 countries. With ISO-certified facilities and ethical labour practices, it powers every garment we produce.",
  },
  {
    id: "gl",
    icon: Globe,
    name: "Golden Labs",
    tagline: "Research & material innovation",
    image: heroSlide1,
    info: "Golden Labs is our R&D division, pioneering bio-based textiles, sustainable dyes, and next-generation performance fabrics for the fashion industry.",
  },
];

const AssociatesSection = () => {
  const [hovered, setHovered] = useState<(typeof associates)[0] | null>(null);

  return (
    <section className="flex flex-col justify-center px-8 lg:px-14 py-12 h-full">

      {/* Cursor-following card */}
      <CursorCard
        image={hovered?.image ?? ""}
        title={hovered?.name ?? ""}
        description={hovered?.info ?? ""}
        visible={!!hovered}
      />

      <h2 className="text-2xl uppercase tracking-[0.35em] text-muted-soft mb-8 font-semibold">
        Our Associates
      </h2>
      <div className="flex flex-col gap-4">
        {associates.map((assoc) => {
          const Icon = assoc.icon;
          return (
            <div
              key={assoc.id}
              className="group flex items-center gap-5 p-5 rounded-2xl subtle-border hover:subtle-border-strong hover:bg-soft transition-elegant cursor-pointer"
              onMouseEnter={() => setHovered(assoc)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon badge */}
              <div className="w-11 h-11 rounded-xl bg-primary/5 subtle-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-elegant">
                <Icon size={17} className="text-foreground" />
              </div>

              {/* Name + tagline */}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-base tracking-wide text-foreground leading-tight">
                  {assoc.name}
                </p>
                <p className="text-xs text-muted-soft mt-0.5">{assoc.tagline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AssociatesSection;
