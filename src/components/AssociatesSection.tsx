import { Settings, Globe, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";
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
    info: "Terracotta Tech is the digital backbone of UrbanGrand, building seamless e-commerce platforms, inventory systems, and customer analytics tailored for fashion retail.",
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
  {
    id: "knit",
    icon: Globe,
    name: "Panchsheel Quality",
    tagline: "Inspection & Assurance",
    image: heroSlide2,
    info: "Ensuring every stitch meets our global standards. Dedicated teams inspect our raw materials and end-products to guarantee longevity.",
  }
];

const AssociatesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Width of a single card
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-24 h-full w-full">
      <div className="flex items-center justify-between mb-10 lg:mb-16">
        <h2 className="text-2xl lg:text-3xl uppercase tracking-[0.35em] text-foreground font-semibold">
          Our Associates
        </h2>
        <div className="hidden sm:flex gap-3">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-soft hover:border-foreground/30 transition-elegant"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-soft hover:border-foreground/30 transition-elegant"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 lg:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide w-full"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {associates.map((assoc) => {
          const Icon = assoc.icon;
          return (
            <div
              key={assoc.id}
              className="group min-w-[300px] w-[300px] sm:min-w-[350px] sm:w-[350px] flex flex-col rounded-3xl subtle-border hover:subtle-border-strong bg-background hover:bg-soft/50 transition-elegant overflow-hidden snap-start shrink-0 h-[450px]"
            >
              <div className="relative h-48 w-full overflow-hidden shrink-0">
                 <img src={assoc.image} alt={assoc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-background/80 backdrop-blur-md subtle-border flex items-center justify-center text-foreground">
                   <Icon size={18} />
                 </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <p className="font-display font-bold text-xl tracking-wide text-foreground leading-tight">
                  {assoc.name}
                </p>
                <p className="text-sm text-primary font-medium mt-1 mb-4 uppercase tracking-wider">{assoc.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {assoc.info}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AssociatesSection;
