import { Star } from "lucide-react";
import { useState } from "react";
import CursorCard from "./CursorCard";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const brands = [
  {
    id: "tc",
    initials: "TC",
    icon: null,
    name: "Terracotta Threads",
    tagline: "Earth-toned heritage collections",
    image: heroSlide1,
    info: "Founded in 2010, Terracotta Threads draws inspiration from ancient artisan traditions. Each piece is handcrafted using sustainably sourced earthy fabrics.",
  },
  {
    id: "aurora",
    initials: null,
    icon: Star,
    name: "Aurora",
    tagline: "Luminous avant-garde fashion",
    image: heroSlide2,
    info: "Aurora pushes the boundaries of form and light. Known for iridescent textiles and bold silhouettes, it is the brand for the fearless modern wardrobe.",
  },
  {
    id: "gg",
    initials: "GG",
    icon: null,
    name: "Golden Gauge",
    tagline: "Precision-crafted luxury wear",
    image: heroSlide3,
    info: "Golden Gauge blends Swiss precision with Italian tailoring. Renowned for impeccable fit and long-lasting construction in every garment.",
  },
];

const BrandsSection = () => {
  const [hovered, setHovered] = useState<(typeof brands)[0] | null>(null);

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
        Our Brands
      </h2>
      <div className="flex flex-col gap-4">
        {brands.map((brand) => {
          const Icon = brand.icon;
          return (
            <div
              key={brand.id}
              className="group flex items-center gap-5 p-5 rounded-2xl subtle-border hover:subtle-border-strong hover:bg-soft transition-elegant cursor-pointer"
              onMouseEnter={() => setHovered(brand)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon badge */}
              <div className="w-11 h-11 rounded-xl bg-primary/5 subtle-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-elegant">
                {Icon ? (
                  <Icon size={17} className="text-foreground" />
                ) : (
                  <span className="font-display font-bold text-sm text-foreground">{brand.initials}</span>
                )}
              </div>

              {/* Name + tagline */}
              <div className="flex-1 min-w-0">
                <p className="font-display font-bold text-base tracking-wide text-foreground leading-tight">
                  {brand.name}
                </p>
                <p className="text-xs text-muted-soft mt-0.5">{brand.tagline}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandsSection;
