import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-50 px-5 sm:px-8 lg:px-16 py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">

        {/* Brand blurb */}
        <div className="min-w-[160px] max-w-xs">
          <Link to="/" className="font-display text-xl sm:text-2xl font-bold tracking-tight hover:opacity-80 transition-elegant leading-tight inline-block">
            Premium Line by<br />Panchsheel<br />Knitwears
          </Link>
          <p className="text-xs opacity-60 mt-4 leading-relaxed tracking-wide">
            UrbanGrand combines modern style with trusted craftsmanship, delivering elegance, comfort, and lasting quality. The Premium Line by Panchsheel Knitwears.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-8 text-sm opacity-50">
          <ul className="space-y-1.5">
            <li className="text-[10px] uppercase tracking-widest opacity-80 font-semibold mb-2">Platform</li>
            {[
              { label: "Men", to: "/contact?category=men" },
              { label: "Women", to: "/contact?category=women" },
              { label: "Kids", to: "/contact?category=kids" },
              { label: "Accessories", to: "/contact?category=accessories" },
            ].map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:opacity-100 transition-elegant">{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1.5">
            <li className="text-[10px] uppercase tracking-widest opacity-80 font-semibold mb-2">Company</li>
            {companyLinks.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:opacity-100 transition-elegant">{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-1.5">
            <li className="text-[10px] uppercase tracking-widest opacity-80 font-semibold mb-2">Contact</li>
            <li>Headquarters</li>
            <li className="opacity-100">+91-XXXXXXXXXX</li>
            <li className="opacity-100">
              <Link to="/contact" className="hover:opacity-100 transition-elegant">contact@panchsheel.com</Link>
            </li>
          </ul>
        </div>

        {/* Social + copyright */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <div className="flex gap-4">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="opacity-40 hover:opacity-100 transition-elegant"><Icon size={16} /></a>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-widest opacity-30">
            © {new Date().getFullYear()} Panchsheel Knitwears. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
