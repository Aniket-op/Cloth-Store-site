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

      <main className="flex-1 w-full max-w-[1400px] mx-auto px-6 py-16 md:py-24 space-y-24 md:space-y-32">

        {/* Header Section */}
        <div className="text-center space-y-3 animate-fade-in">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-soft font-semibold border-b border-foreground/20 pb-2 inline-block">
            About Panchsheel Knitwears
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground tracking-tight">
            {data.title}
          </h1>
        </div>

        {/* Zig-Zag Content Rows */}
        <div className="flex flex-col gap-20 md:gap-32">
          {data.description.map((para, idx) => {
            const imageUrl = data.images[idx % data.images.length];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-12 lg:gap-24 group`}
              >
                {/* Content Side */}
                <div className="w-full lg:w-5/12 flex flex-col justify-center space-y-6 animate-fade-in order-2 lg:order-none">
                  <p className="text-base md:text-lg lg:text-xl text-muted-medium leading-relaxed font-light">
                    {para}
                  </p>
                </div>

                {/* Image Side */}
                <div className="w-full lg:w-5/12 flex justify-center animate-scale-in order-1 lg:order-none">
                  <div className="relative aspect-[4/3] md:aspect-[3/2] lg:aspect-[4/3] w-full max-w-md overflow-hidden rounded-sm lg:rounded-2xl shadow-xl">
                    <div className="absolute inset-0 bg-black/5 z-10 pointer-events-none" />
                    <img
                      src={imageUrl}
                      alt={`${data.title} section ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default AboutCategory;
