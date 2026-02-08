import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollPosition } from "../../hooks";
import { navLinks } from "../../data";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScrollPosition(50);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    // If it's a hash link on the same page
    if (href.startsWith("/#") && location.pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    closeMenu();
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-1000 w-full py-4 transition duration-300 ${
        isScrolled
          ? "border-b border-[#2a2a3a] bg-[rgba(10,10,15,0.95)] backdrop-blur-[20px]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-300 items-center justify-between px-5">
        <Link
          to="/"
          className="flex items-center gap-3 text-white no-underline"
          onClick={closeMenu}
        >
          <div className="flex h-11.25 w-11.25 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] text-[1.2rem] font-bold">
            VH
          </div>
          <span className="text-[1.4rem] font-bold font-['Space_Grotesk',Inter,sans-serif]">
            Vector<span className="text-[#4aacd3]">Hack</span>
          </span>
        </Link>

        <ul
          className={`absolute left-0 top-full w-full flex-col gap-6 border-b border-[#2a2a3a] bg-[#12121a] p-8 text-[0.95rem] font-medium transition duration-300 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${
            isMenuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  to={link.href}
                  className={`relative text-white transition duration-200 hover:text-[#4aacd3] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[linear-gradient(135deg,#4aacd3_0%,#005b96_100%)] after:transition-all after:duration-300 hover:after:w-full ${
                    location.pathname === link.href ? "text-[#4aacd3]" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className={`relative text-white transition duration-200 hover:text-[#4aacd3] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[linear-gradient(135deg,#4aacd3_0%,#005b96_100%)] after:transition-all after:duration-300 hover:after:w-full ${
                    location.hash === link.href.replace("/", "")
                      ? "text-[#4aacd3]"
                      : ""
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="/#register"
              className="rounded-lg bg-[linear-gradient(135deg,#005b96_0%,#513c97_100%)] px-6 py-2.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,91,150,0.3)]"
              onClick={(e) => handleNavClick(e, "/#register")}
            >
              Register Now
            </a>
          </li>
        </ul>

        <button
          className="flex flex-col gap-1.5 bg-transparent p-1 md:hidden"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span
            className="h-0.75 w-6.25 rounded-[3px] bg-white transition duration-200"
            style={{
              transform: isMenuOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <span
            className="h-0.75 w-6.25 rounded-[3px] bg-white transition duration-200"
            style={{
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="h-0.75 w-6.25 rounded-[3px] bg-white transition duration-200"
            style={{
              transform: isMenuOpen
                ? "rotate(-45deg) translate(7px, -6px)"
                : "none",
            }}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
