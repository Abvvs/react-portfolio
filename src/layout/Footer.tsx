import { useTranslation } from "react-i18next";
import { Github, Instagram, Linkedin } from "lucide-react";
import LanguageSwitcher from "../components/LanguageSwitcher";

const footerLinks = [
  { href: "#about", label: "footer.about" },
  { href: "#projects", label: "footer.projects" },
  /* { href: "#experience", label: "Experience" }, */
  { href: "#contact", label: "footer.contact" },
];
const socialLinks = [
  { icon: Github, href: "https://github.com/Abvvs/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abi-sanchez/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/abvvs.dev?igsh=MW5zbWczMmc1NnExdA==", label: "Instagram" },
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and copy */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-xl font-bold tracking-tight hover:text-primary"
            >
              ABVVS<span className="text-primary">.</span>
            </a>
            <LanguageSwitcher/>
            <p className="text-sm text-muted-foreground mt-2">
              {currentYear} Abigail Sanchez. {t("footer.rights")}
            </p>
          </div>
          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(link.label)}
              </a>
            ))}
          </nav>
          {/* social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
