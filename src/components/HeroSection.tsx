import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";

const slides = [heroSlide1, heroSlide2];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="w-full px-5 sm:px-8 lg:px-16 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Column */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-[-0.02em] text-foreground">
            The Future of
            <br />
            <span className="italic font-normal">Timeless</span>
            <br />
            Fashion
          </h1>
          <p className="max-w-md mx-auto lg:mx-0 text-base sm:text-lg text-muted-soft mt-5 sm:mt-6 leading-relaxed">
            UrbanGrand combines modern style with trusted craftsmanship, delivering elegance, comfort, and lasting quality. The Premium Line by Panchsheel Knitwears.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-7 sm:mt-8 justify-center lg:justify-start">
            <Link to="/about/category/mission-vision" className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold tracking-wide hover:opacity-90 transition-elegant text-center">
              Our Vision
            </Link>
            <Link to="/about/category/our-legacy" className="subtle-border-strong px-8 py-4 rounded-sm text-foreground hover:bg-soft transition-elegant font-medium text-center">
              Our Legacy
            </Link>
          </div>
        </div>

        {/* Right Column - Slideshow */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[320px] sm:max-w-sm lg:max-w-md rounded-[24px] overflow-hidden subtle-border-strong shadow-2xl">
            <img
              src={slides[current]}
              alt="Fashion showcase"
              className="w-full h-full object-cover transition-opacity duration-500"
            />

            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-light subtle-border flex items-center justify-center text-muted-medium hover:text-foreground transition-elegant"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-light subtle-border flex items-center justify-center text-muted-medium hover:text-foreground transition-elegant"
            >
              <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all transition-elegant ${
                    i === current ? "bg-foreground w-6" : "bg-foreground/30 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
