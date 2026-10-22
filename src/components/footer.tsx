import { SOCIALS } from "../constants";
import { UI, useLanguage } from "../i18n/LanguageContext";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Footer
const Footer = () => {
  const { t } = useLanguage();

  return (
    <nav
      className={cn(
        styles.paddingX,
        "w-full flex items-center py-8 bg-primary border-t border-t-secondary/5",
      )}
    >
      <div className="w-full flex flex-wrap justify-between items-center gap-x-6 gap-y-4 max-w-7xl mx-auto">
        <p className="text-white text-md font-bold flex">
          &copy; whiteMike {new Date().getFullYear()}. {t(UI.footer.rights)}
        </p>

        <ul className="list-none flex flex-row gap-8 sm:gap-10 ml-auto">
          {SOCIALS.map((social) => (
            <li key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer noopener"
                className="block opacity-80 hover:opacity-100 transition"
              >
                <img src={social.icon} alt={social.name} className="h-6 w-auto" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
