import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Men", to: "/contact?category=men" },
  { label: "Women", to: "/contact?category=women" },
  { label: "Kids", to: "/contact?category=kids" },
  { label: "Accessories", to: "/contact?category=accessories" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="h-16 flex items-center justify-between px-5 lg:px-12 sticky top-0 z-50 glass-light subtle-border">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <span className="font-display text-2xl font-bold tracking-tight text-foreground">AURA</span>
        <span className="text-[10px] tracking-[0.2em] text-muted-soft uppercase ml-1 hidden sm:block">Fashion</span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-8">
        {menuItems.map((item) => {
          const active = location.pathname === item.to;
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`text-[13px] font-medium uppercase tracking-widest transition-elegant relative group ${active ? "text-foreground" : "text-muted-soft hover:text-foreground"}`}
            >
              {item.label}
              <span className={`absolute bottom-[-4px] left-0 w-full h-[0.5px] bg-foreground transition-transform transition-elegant origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
          );
        })}
      </div>

      {/* Desktop right actions */}
      <div className="hidden md:flex items-center gap-4">
        <button className="flex items-center gap-1 text-[13px] text-muted-soft hover:text-foreground transition-elegant">
          Language <ChevronDown size={14} />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-soft transition-elegant text-muted-soft hover:text-foreground ml-2 mr-1"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <Link
          to="/contact"
          className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide hover:opacity-90 transition-elegant"
        >
          CONTACT
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-soft transition-elegant"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 glass-light subtle-border-strong flex flex-col py-4 md:hidden shadow-lg z-50">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="px-6 py-3 text-sm font-medium uppercase tracking-widest text-muted-soft hover:text-foreground hover:bg-soft transition-elegant"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-6 pt-3 pb-1 border-t border-border/40 mt-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-muted-soft hover:text-foreground transition-elegant">
                Language <ChevronDown size={14} />
              </button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-soft transition-elegant text-muted-soft hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide hover:opacity-90 transition-elegant"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
