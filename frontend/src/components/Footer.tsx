import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo-next-level-dads.svg";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/next_level_dads/",
      icon: Instagram,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/Nextleveldads/",
      icon: Facebook,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/next-level-dads/",
      icon: Linkedin,
    },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-10 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr_1fr] md:items-start">
          <div className="space-y-4">
            <img
              src={logo}
              alt="Next Level Dads"
              className="h-16 w-auto max-w-full object-contain"
            />
            <p className="max-w-md text-sm leading-relaxed text-slate-300">
              Empowering fathers. Building community.
            </p>
            <a
              href="mailto:info@nextleveldads.ca"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4" />
              info@nextleveldads.ca
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-white transition-colors">
                  App
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Connect
            </p>
            <p className="mb-4 max-w-xs text-sm leading-relaxed text-slate-300">
              Questions, ideas, or just want to connect? Find us on social media.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4">
          <div className="flex flex-col gap-3 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Next Level Dads Ltd.</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/community-guidelines" className="hover:text-white transition-colors">
                Community Guidelines
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
