import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo */}
          <img src={logo} alt="Next Level Dads" className="h-12 w-auto" />
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link
              to="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <span className="text-muted-foreground">•</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-muted-foreground">•</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </a>
          </div>

          {/* Email */}
          <a
            href="mailto:hello@nextleveldads.ca"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>hello@nextleveldads.ca</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © Next Level Dads
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
