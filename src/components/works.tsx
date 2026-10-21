import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { github, preview } from "../assets";
import { PROJECTS } from "../constants";
import { SectionWrapper } from "../hoc";
import { UI, useLanguage, type Lang } from "../i18n/LanguageContext";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type ProjectCardProps = {
  index: number;
  enableTilt: boolean;
  lang: Lang;
  project: (typeof PROJECTS)[number];
  openLiveLabel: string;
  viewRepoLabel: string;
};

const cardClassName = "bg-tertiary p-5 rounded-2xl sm:w-90 w-full";

// Project Card
const ProjectCard = ({
  index,
  enableTilt,
  lang,
  project,
  openLiveLabel,
  viewRepoLabel,
}: ProjectCardProps) => {
  const name = project.name[lang];
  const description = project.description[lang];
  const image_alt = project.image_alt[lang];
  const image_note = project.image_note[lang];
  const { image, source_code_link, live_site_link, tags } = project;

  const content = (
    <>
      <div className="relative w-full h-57.5 bg-primary rounded-2xl overflow-hidden">
        {/* Work image */}
        <img
          src={image}
          alt={image_alt}
          loading="lazy"
          className="w-full h-full object-contain rounded-2xl"
        />
        {image_note && (
          <p className="absolute bottom-0 inset-x-0 bg-black/80 px-3 py-1 text-xs text-white">
            {image_note}
          </p>
        )}

        {/* Live Site */}
        <div className="absolute top-0 right-0 flex gap-2 m-3 card-img_hover">
          {live_site_link && (
            <a
              href={live_site_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${openLiveLabel}${name}`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={preview}
                alt="Live Site"
                title="Live Site"
                className="w-2/3 h-2/3 object-contain"
              />
            </a>
          )}

          {/* Github */}
          {source_code_link && (
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${viewRepoLabel}${name}`}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="Github"
                title="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          )}
        </div>
      </div>

      {/* Work Info */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Work Tag */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, tagIdx) => (
          <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
            #{tag.name[lang]}
          </p>
        ))}
      </div>
    </>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {enableTilt ? (
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
            gyroscope: false,
          }}
          className={cardClassName}
        >
          {content}
        </Tilt>
      ) : (
        <div className={cardClassName}>{content}</div>
      )}
    </motion.div>
  );
};

// Works
export const Works = () => {
  const { lang, t } = useLanguage();
  const [enableTilt, setEnableTilt] = useState(
    () => window.matchMedia("(min-width: 768px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setEnableTilt(mediaQuery.matches);

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <SectionWrapper>
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>{t(UI.works.sub)}</p>
          <h2 className={styles.sectionHeadText}>{t(UI.works.title)}</h2>
        </motion.div>

        {/* About */}
        <div className="w-full flex">
          <motion.p
            variants={fadeIn(undefined, undefined, 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-7.5"
          >
            {t(UI.works.body)}
          </motion.p>
        </div>

        {/* Project Card */}
        <div className="mt-20 flex flex-wrap gap-7">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={`project-${i}`}
              index={i}
              enableTilt={enableTilt}
              lang={lang}
              project={project}
              openLiveLabel={t(UI.works.openLive)}
              viewRepoLabel={t(UI.works.viewRepo)}
            />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
};
