import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutContent } from "@/data/aboutContent";

const AboutCategory = () => {
  const { section } = useParams<{ section: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!section || !aboutContent[section]) {
    // If not found, redirect to general About Us page
    return <Navigate to="/about" replace />;
  }

  const data = aboutContent[section];
  
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? data.images.length - 1 : prev - 1));
  const nextSlide = () => setCurrentSlide((prev) => (prev === data.images.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Side: Content */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-muted-soft font-semibold border-b border-foreground/20 pb-2 inline-block">
                About AURA
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground tracking-tight">
                {data.title}
              </h1>
            </div>
            
            <div className="space-y-6">
              {data.description.map((para, idx) => (
                <p key={idx} className="text-base md:text-lg text-muted-medium leading-relaxed font-light">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right Side: Image Carousel */}
          <div className="w-full lg:w-7/12 animate-scale-in order-1 lg:order-2">
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[3/2] w-full overflow-hidden rounded-sm lg:rounded-2xl shadow-xl group">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
              <img
                key={currentSlide}
                src={data.images[currentSlide]}
                alt={`${data.title} slide ${currentSlide + 1}`}
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
              />
              
              {data.images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-light subtle-border flex items-center justify-center text-white/80 hover:text-white transition-elegant opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-light subtle-border flex items-center justify-center text-white/80 hover:text-white transition-elegant opacity-0 group-hover:opacity-100 z-20 hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {data.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === currentSlide ? "bg-white w-6" : "bg-white/40 w-2 hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutCategory;
