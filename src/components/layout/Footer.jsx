import React from "react";
import { Link } from "react-router-dom";
import { footerLinks, socialLinks } from "../../data";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../Icons";

const getSocialIcon = (iconName) => {
  const icons = {
    facebook: <FacebookIcon />,
    instagram: <InstagramIcon />,
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
  };
  return icons[iconName] || null;
};

const Footer = () => {
  return (
    <footer className="border-t border-[#2a2a3a] bg-[#12121a] py-15 pb-7.5">
      <div className="mx-auto max-w-300 px-5">
        <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 text-white no-underline"
            >
              <div className="flex h-11.25 w-11.25 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-[1.2rem] font-bold">
                VH
              </div>
              <span className="text-[1.4rem] font-bold font-['Space_Grotesk',Inter,sans-serif]">
                Vector<span className="text-[#4aacd3]">Hack</span>
              </span>
            </Link>
            <p className="mt-4 max-w-75 text-[#535353]">
              A 48-hour national software hackathon organized by i-CES as part
              of VECTOR at IOE, WRC, Pokhara.
            </p>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#2a2a3a] bg-[#0a0a0f] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#4aacd3] hover:text-[#4aacd3]"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-6 text-[1.1rem]">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#535353] transition duration-200 hover:text-[#4aacd3]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-6 text-[1.1rem]">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      to={link.href}
                      className="text-[#535353] transition duration-200 hover:text-[#4aacd3]"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-[#535353] transition duration-200 hover:text-[#4aacd3]"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-6 text-[1.1rem]">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.name} className="text-[#535353]">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition duration-200 hover:text-[#4aacd3]"
                    >
                      {item.name}
                    </a>
                  ) : (
                    item.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#2a2a3a] pt-6">
          <p className="text-[0.9rem] text-[#535353]">
            © 2026 VectorHack. Organized by{" "}
            <a
              href="https://ices.edu.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4aacd3]"
            >
              i-CES
            </a>
          </p>
          <a
            href="https://ices.edu.np"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#535353] transition duration-300 hover:text-[#4aacd3]"
          >
            <div className="w-40 h-40 ">
              <img src="/i-CES Logo.svg" alt="i-ces logo" />
            </div>
          </a>
          <span className="text-[0.9rem]">
              Innovative Computer Engineering Students' Society
            </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
