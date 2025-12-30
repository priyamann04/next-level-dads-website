import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <img src={logo} alt="Next Level Dads" className="h-12 w-auto" />
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/features"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Next Level Dads App
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/get-involved"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Get Involved
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Email */}
          <a
            href="mailto:info@nextleveldads.ca"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>info@nextleveldads.ca</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Next Level Dads
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
