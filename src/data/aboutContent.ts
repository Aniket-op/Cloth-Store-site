import image1 from "@/assets/Our-Legacy-1.png"
import image2 from "@/assets/Our-Legacy-2.png"
import image3 from "@/assets/Our-Legacy-4.png"

export interface AboutSectionData {
  title: string;
  description: string[];
  images: string[];
}

export const aboutContent: Record<string, AboutSectionData> = {
  "our-legacy": {
    title: "Our Legacy",
    description: [
      "Panchsheel Knitwears was established in 1978, when garment manufacturing activities were initiated by the founding family, laying a strong foundation built on craftsmanship, consistency, and customer trust. Over the years, this legacy has been carefully nurtured and expanded, reflecting both growth and continuity.",
      "Today, Panchsheel Knitwears specializes in knitwear, cloth apparel, kidswear, thermal wear, and other garment categories, catering to diverse market needs with dedication and professionalism.",
      "Since its inception, the organization has consistently believed that true success lies not only in production capacity but also in a strong commitment to quality assurance, timely delivery, and customer satisfaction. Whether handling small consignments or large-volume orders, the company maintains high production standards and reliable delivery, making it a trusted partner in garment manufacturing."
    ],
    images: [image1, image2, image3]
  },
  "philosophy-core-values": {
    title: "Philosophy and Core Values",
    description: [
      "Precision in Every Stitch, Quality in Every Garment.",
      "At Panchsheel Knitwears, our manufacturing philosophy is rooted in precision, durability, and uncompromising attention to detail. Since our inception, we have consistently upheld a commitment to craftsmanship and quality, ensuring that every product reflects the values on which the company was built.",
      "From the careful selection of raw materials to the final stages of finishing, each garment is developed through a disciplined and quality-driven process. We place strong emphasis on fabric integrity, stitching excellence, fit, comfort, and overall refinement. This holistic approach enables us to deliver products that are not only aesthetically appealing but also reliable, long-lasting, and aligned with the expectations of our customers.",
      "We believe that true manufacturing excellence lies in consistency, process discipline, and continuous improvement—principles that continue to guide our operations as we grow and evolve.",
      "Our core values emphasize consistency, trust, and long-term relationships. By maintaining strict quality standards and dependable production practices, Panchsheel Knitwears has earned the confidence of clients who value not only attractive apparel but also garments that deliver durability and comfort over time.",
      "Through continuous improvement and dedication to excellence, Panchsheel Knitwears remains committed to delivering products that combine quality craftsmanship with practical reliability."
    ],
    images: [image2, image3, image1]
  },
  "mission-vision": {
    title: "Mission and Vision",
    description: [
      "Our Mission",
      "Our mission at Panchsheel Knitwears is to manufacture high-quality garments that combine comfort, durability, and reliable craftsmanship. We are committed to maintaining strong production standards, ensuring timely delivery, and building long-term relationships with our customers and partners.",
      "Our Vision",
      "Our vision is to grow as a trusted apparel manufacturer known for quality, consistency, and innovation. Through our brands Kidax and UrbanGrand, we aim to deliver premium garments while continuing the legacy of craftsmanship and reliability established since 1978."
    ],
    images: [image3, image1, image2]
  },
  "our-brands": {
    title: "Our Brands",
    description: [
      "To meet evolving fashion needs and customer preferences, Panchsheel Knitwears has introduced two distinct brands — Kidax and UrbanGrand — each representing quality, style, and comfort in its own segment.",
      "Kidax focuses on comfortable, durable, and stylish clothing for children. The brand is designed to support active lifestyles while ensuring softness, safety, and everyday comfort.",
      "UrbanGrand78 represents a premium line of apparel that blends modern design with superior fabric quality. With a focus on refined style and craftsmanship, the brand is gaining attention for its contemporary look and premium finish.",
      "Together, these brands reflect Panchsheel Knitwears's commitment to combining manufacturing expertise with modern fashion trends."
    ],
    images: [image1, image3, image2]
  },
  "our-leadership": {
    title: "Our Leadership",
    description: [
      "At Panchsheel Knitwears, leadership is guided by a vision of quality, responsibility, and continuous growth. Our leadership philosophy focuses on maintaining strong manufacturing standards while adapting to evolving industry trends and customer expectations.",
      "With decades of experience in the textile and apparel sector, the leadership team emphasizes precision in production, reliability in delivery, and long-term partnerships with clients. Their approach combines traditional craftsmanship with modern manufacturing practices to ensure consistent product quality.",
      "Through strategic direction and commitment to innovation, the leadership continues to strengthen Panchsheel Knitwears's legacy while guiding the company toward sustainable growth and expanding brand presence.",
      "Current leader, image, message can be added."
    ],
    images: [image2, image1, image3]
  },
  "company-credentials": {
    title: "Company Credentials",
    description: [
      "Panchsheel Knitwears operates as a legally registered business entity and complies with all applicable regulatory requirements. The company holds official registrations including CIN, GST, and Udyam (MSME) certification, reflecting its commitment to transparent and compliant business operations."
    ],
    images: [image3, image2, image1]
  }
};
