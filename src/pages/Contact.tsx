import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { image: heroSlide1, label: "Terracotta Threads", sub: "Earth-toned heritage collections" },
  { image: heroSlide2, label: "Aurora", sub: "Luminous avant-garde fashion" },
  { image: heroSlide3, label: "Golden Gauge", sub: "Precision-crafted luxury wear" },
];

const Contact = () => {
  const [current, setCurrent] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Main split layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">

        {/* ── Left: Image Slideshow ── */}
        <div className="relative hidden lg:block overflow-hidden bg-primary">
          {/* Slides */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          ))}

          {/* Slide caption */}
          <div className="absolute bottom-16 left-10 right-10 text-white z-10">
            <p className="text-xs uppercase tracking-[0.35em] opacity-60 mb-1">
              {slides[current].sub}
            </p>
            <p className="font-display text-3xl font-bold">{slides[current].label}</p>
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-elegant"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/25 transition-elegant"
          >
            <ChevronRight size={18} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all transition-elegant ${i === current ? "bg-white w-6" : "bg-white/40 w-2"}`}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Enquiry Form ── */}
        <div className="overflow-y-auto py-10 lg:py-0 flex flex-col justify-center">
          <EnquiryForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
