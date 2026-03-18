import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Who We Are",
    body: `AURA Fashion Group is a premium multi-brand fashion house founded with a single purpose: to make extraordinary style accessible without compromising on craftsmanship. We operate across three distinct brands — each telling its own story while sharing a common commitment to quality, sustainability, and design innovation.

From the earth-toned heritage of Terracotta Threads to the luminous avant-garde creations of Aurora and the precision-crafted luxury of Golden Gauge, our portfolio spans the full spectrum of modern fashion.`,
  },
  {
    title: "Our Vision",
    body: `We believe fashion is not merely clothing — it is an expression of identity, culture, and aspiration. AURA exists to curate garments that outlast trends, transcend seasons, and tell meaningful stories.

Our vision is to become the most trusted fashion group in South Asia, known not just for what we create, but for how we create it: ethically, sustainably, and with deep respect for the artisans who bring every design to life.`,
  },
  {
    title: "Sustainability",
    body: `Sustainability sits at the core of everything we do. From bio-based textiles pioneered in our Golden Labs R&D division to the ethically managed supply chain operated by Forge, we are committed to reducing our environmental footprint with every collection.

We partner only with suppliers who meet our strict standards for fair wages, safe working conditions, and eco-friendly materials. Our goal is to achieve carbon-neutral operations across all brands by 2030.`,
  },
  {
    title: "Our People",
    body: `AURA employs over 2,000 skilled artisans, designers, technologists, and logistics professionals across India and internationally. We invest heavily in training, fair compensation, and creating an inclusive workplace where creativity flourishes.

We are proud that more than 60% of our leadership team are women, and we continue to expand programmes that support women-led micro-enterprises in our supply chain.`,
  },
  {
    title: "Connect With Us",
    body: `Whether you are looking for bulk orders, brand collaborations, press enquiries, or simply want to know more — we would love to hear from you. Visit our Contact page or reach us directly at inquiries@aura.fashion.`,
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero banner */}
      <div className="bg-primary text-primary-foreground px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4">Who We Are</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">About AURA</h1>
        <p className="mt-5 max-w-xl mx-auto text-sm opacity-60 leading-relaxed">
          A fashion group built on craft, integrity, and an unwavering belief that great design can change the way you feel.
        </p>
      </div>

      {/* Content sections */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 py-16 space-y-16">
        {sections.map((s, i) => (
          <div key={i} className={`flex flex-col md:flex-row gap-10 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/3 shrink-0">
              <span className="text-xs uppercase tracking-[0.35em] text-muted-soft font-semibold">{`0${i + 1}`}</span>
              <h2 className="font-display text-2xl font-bold mt-2 text-foreground">{s.title}</h2>
            </div>
            <div className="flex-1">
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-4">{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
