import { Linkedin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Use", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-950 text-zinc-50 px-5 sm:px-8 lg:px-16 py-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-6">

        {/* Brand blurb */}
        <div className="min-w-[160px]">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight hover:opacity-80 transition-elegant">AURA</Link>
          <p className="text-xs opacity-50 mt-1 max-w-[200px] leading-relaxed">
            Premium, future-forward fashion statements.
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
            <li>Fashion Ave, New York</li>
            <li className="opacity-100">+1-800-AURA-GOLD</li>
            <li className="opacity-100">
              <Link to="/contact" className="hover:opacity-100 transition-elegant">inquiries@aura.fashion</Link>
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
            © {new Date().getFullYear()} AURA. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
