import { motion } from "framer-motion";

import { x } from "../assets";
import { X_HANDLE, X_LINK } from "../constants";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { UI, useLanguage } from "../i18n/LanguageContext";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>{t(UI.contact.sub)}</p>
          <h3 className={styles.sectionHeadText}>{t(UI.contact.title)}</h3>

          <div className="mt-8 flex flex-col gap-6">
            <p className="text-secondary text-[17px] leading-8 max-w-xl">
              {t(UI.contact.body)}
            </p>

            <div className="bg-tertiary rounded-xl px-5 py-4 w-fit border border-secondary/10">
              <p className="text-secondary text-[13px] uppercase tracking-wider">
                {t(UI.contact.accountLabel)}
              </p>
              <p className="text-white text-[22px] font-bold mt-1">{X_HANDLE}</p>
            </div>

            <a
              href={X_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-3 bg-tertiary py-3 px-8 w-fit text-white font-bold shadow-md shadow-primary rounded-xl border border-secondary/20 hover:border-white/40 transition"
            >
              <img src={x} alt="" className="h-5 w-5" />
              {t(UI.contact.cta)}
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-137.5 h-87.5"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
