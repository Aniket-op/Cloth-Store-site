import image1 from "@/assets/Our-Legacy-1.png"
import image2 from "@/assets/Our-Legacy-2.png"
import image3 from "@/assets/Our-Legacy-4.png"

export interface AboutSectionData {
  title: string;
  description: string[];
  image: string;
}

export const aboutContent: Record<string, AboutSectionData> = {
  "our-legacy": {
    title: "Our Legacy",
    description: [
      "For decades, we have been at the forefront of the fashion industry, shaping trends and redefining elegance for a modern world.",
      "Our journey began with a simple idea: to provide high-quality, timeless pieces that elevate the everyday wardrobe. Through relentless dedication and a passion for craftsmanship, we have built a legacy of trust, style, and innovation.",
      "Explore the rich history behind our name and discover how we've grown from a small boutique to a globally recognized fashion house."
    ],
    image: image1
  },
  "philosophy-core-values": {
    title: "Philosophy & Core Values",
    description: [
      "Our core philosophy is simple: fashion should empower you without compromising the planet we live on.",
      "We believe in sustainability, ethical sourcing, and uncompromising quality. Every piece we create is a testament to our profound respect for both the craft and the artisans behind it.",
      "Integrity, inclusion, and innovation form the pillars of our culture."
    ],
    image: image2
  },
  "mission-vision": {
    title: "Mission & Vision",
    description: [
      "Our mission is to inspire confidence and express individuality through beautifully crafted, accessible fashion.",
      "We envision a world where every garment tells a story and every individual feels seen. By seamlessly blending classic elegance with contemporary trends, we strive to be the ultimate destination for style-conscious consumers worldwide.",
      "Looking to the future, we aim to pioneer sustainable fashion while continuously adapting to our customers' evolving needs."
    ],
    image: image3
  },
  "our-brands": {
    title: "Our Brands",
    description: [
      "We house a diverse portfolio of brands, each with its own distinct identity, catering to a wide array of styles and preferences.",
      "From high-end luxury labels to accessible streetwear, our brands share a singular commitment to quality and contemporary design.",
      "Discover the unique aesthetics of our collections and find a brand that deeply resonates with your personal sense of style."
    ],
    image: image1
  },
  "our-leadership": {
    title: "Our Leadership",
    description: [
      "Behind our brand's success is a team of visionary leaders dedicated to pushing the boundaries of the fashion industry.",
      "Our leadership brings decades of collective experience, combining creative genius with strategic acumen to navigate a dynamic global landscape.",
      "Meet the minds driving our continuous growth and our unwavering commitment to excellence."
    ],
    image: image2
  },
  "company-credentials": {
    title: "Company Credentials",
    description: [
      "Our commitment to excellence has been recognized globally through numerous awards and industry accolades.",
      "We take pride in our certifications for ethical manufacturing, sustainable sourcing, and outstanding corporate governance.",
      "These credentials serve as a testament to our ongoing efforts to maintain the highest standards in every facet of our operations."
    ],
    image: image3
  }
};
