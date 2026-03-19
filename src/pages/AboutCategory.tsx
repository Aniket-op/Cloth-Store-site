import { useParams, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aboutContent } from "@/data/aboutContent";

const AboutCategory = () => {
  const { section } = useParams<{ section: string }>();

  if (!section || !aboutContent[section]) {
    // If not found, redirect to general About Us page
    return <Navigate to="/about" replace />;
  }

  const data = aboutContent[section];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 animate-fade-in">
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

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 animate-scale-in">
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden rounded-sm lg:rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
              <img
                src={data.image}
                alt={data.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutCategory;
