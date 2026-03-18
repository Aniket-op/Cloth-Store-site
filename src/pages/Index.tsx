import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AssociatesSection from "@/components/AssociatesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Page 1: Nav + Hero */}
      <div className="relative min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center">
          <HeroSection />
        </div>
      </div>

      {/* Page 2: Brands | Associates + Footer */}
      <div className="min-h-screen flex flex-col">
        {/* Two-column grid — stacks on mobile */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          <div className="border-b md:border-b-0 md:border-r border-border/60">
            <BrandsSection />
          </div>
          <div>
            <AssociatesSection />
          </div>
        </div>

        {/* Footer pinned at bottom */}
        <Footer />
      </div>

    </div>
  );
};

export default Index;
