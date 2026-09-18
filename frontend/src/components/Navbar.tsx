import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo-transparent.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = () => {
    if (location.pathname === "/about") {
      if (location.hash) {
        navigate("/about");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    navigate("/about");
  };

  const navLinks = [
    { name: "Home", path: "/" },
  ];

  const aboutOptions = [
    { name: "Our Mission", path: "/about#our-mission" },
    { name: "Our Story", path: "/about#our-story" },
  ];

  const involvementOptions = [
    { name: "For Dads", path: "/for-dads" },
    { name: "For Businesses", path: "/for-businesses" },
    { name: "For Students", path: "/for-students" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center space-x-3">
            <img src={logo} alt="Next Level Dads" className="h-12 w-auto md:h-auto md:w-[88px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger
                onClick={handleAboutClick}
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${
                  location.pathname === "/about"
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                About
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {aboutOptions.map((option) => (
                  <DropdownMenuItem key={option.path} asChild>
                    <Link to={option.path}>{option.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to="/features"
              className={`text-base font-medium transition-colors hover:text-primary ${
                isActive("/features") ? "text-primary" : "text-foreground"
              }`}
            >
              Next Level Dads App
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center gap-1 text-base font-medium transition-colors hover:text-primary ${
                  involvementOptions.some((option) => location.pathname === option.path)
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                Get Involved
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {involvementOptions.map((option) => (
                  <DropdownMenuItem key={option.path} asChild>
                    <Link to={option.path}>{option.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="space-y-1">
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 transition-colors ${
                  location.pathname === "/about"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
              >
                About
              </Link>
              <div className="ml-4 space-y-1 border-l border-border pl-3">
                {aboutOptions.map((option) => (
                  <Link
                    key={option.path}
                    to={option.path}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-accent"
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              to="/features"
              onClick={() => setIsOpen(false)}
              className={`block rounded-lg px-4 py-2 transition-colors ${
                isActive("/features")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent"
              }`}
            >
              Next Level Dads App
            </Link>
            <div className="space-y-1">
              <Link
                to={involvementOptions[0].path}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-2 transition-colors ${
                  involvementOptions.some((option) => location.pathname === option.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                }`}
              >
                Get Involved
              </Link>
              <div className="ml-4 space-y-1 border-l border-border pl-3">
                {involvementOptions.map((option) => (
                  <Link
                    key={option.path}
                    to={option.path}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-2 text-sm transition-colors hover:bg-accent"
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
