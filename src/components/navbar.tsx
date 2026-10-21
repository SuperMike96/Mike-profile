import { useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../assets";
import { NAV_LINKS } from "../constants";
import { UI, useLanguage } from "../i18n/LanguageContext";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Navbar
export const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const linkTitle = (titleKey: (typeof NAV_LINKS)[number]["titleKey"]) =>
    t(UI.nav[titleKey]);

  const LangToggle = ({ className }: { className?: string }) => (
    <div
      className={cn(
        "flex items-center gap-1 text-[15px] font-medium select-none",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors cursor-pointer",
          lang === "en" ? "text-white" : "text-secondary hover:text-white",
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <span className="text-secondary">|</span>
      <button
        type="button"
        onClick={() => setLang("zh")}
        className={cn(
          "px-1.5 py-0.5 rounded transition-colors cursor-pointer",
          lang === "zh" ? "text-white" : "text-secondary hover:text-white",
        )}
        aria-pressed={lang === "zh"}
      >
        中文
      </button>
    </div>
  );

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-5 fixed top-0 z-20 bg-primary",
        "mt-0",
      )}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            whiteMike&nbsp;
            <span className="sm:block hidden">| {t(UI.nav.developer)}</span>
          </p>
        </Link>

        {/* Nav Links (Desktop) + language toggle */}
        <div className="hidden sm:flex flex-row items-center gap-10">
          <ul className="list-none flex flex-row gap-10">
            {NAV_LINKS.map((link) => {
              const title = linkTitle(link.titleKey);
              return (
                <li
                  key={link.id}
                  className={cn(
                    active === title ? "text-white" : "text-secondary",
                    "hover:text-white text-[18px] font-medium cursor-pointer",
                  )}
                  onClick={() => !link.link && setActive(title)}
                >
                  {link.link ? (
                    <a href={link.link} target="_blank" rel="noreferrer noopener">
                      {title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{title}</a>
                  )}
                </li>
              );
            })}
          </ul>
          <LangToggle />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden flex flex-1 justify-end items-center gap-4">
          <LangToggle />
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-35 z-10 rounded-xl",
            )}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const title = linkTitle(link.titleKey);
                return (
                  <li
                    key={link.id}
                    className={cn(
                      active === title ? "text-white" : "text-secondary",
                      "font-poppins font-medium cursor-pointer text-[16px]",
                    )}
                    onClick={() => {
                      !link.link && setToggle(!toggle);
                      !link.link && setActive(title);
                    }}
                  >
                    {link.link ? (
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {title}
                      </a>
                    ) : (
                      <a href={`#${link.id}`}>{title}</a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
