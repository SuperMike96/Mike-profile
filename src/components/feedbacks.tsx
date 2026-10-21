import { motion } from "framer-motion";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { UI, useLanguage } from "../i18n/LanguageContext";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  ofLabel: string;
};

// Feedback Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  ofLabel,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn(undefined, "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    {/* Quote " */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      {/* Testimonial */}
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          {/* Name */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} {ofLabel} {company}
          </p>
        </div>

        {/* Abstract icon (not a face photo) */}
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  const { t } = useLanguage();

  return (
    <SectionWrapper>
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]",
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>{t(UI.feedbacks.sub)}</p>
            <h2 className={styles.sectionHeadText}>{t(UI.feedbacks.title)}</h2>
          </motion.div>
        </div>

        {/* Feedback Card */}
        <div
          className={cn(styles.paddingX, "-mt-20 pb-14 flex flex-wrap gap-7")}
        >
          {TESTIMONIALS.map((item, i) => (
            <FeedbackCard
              key={item.name.en}
              index={i}
              testimonial={t(item.testimonial)}
              name={t(item.name)}
              designation={t(item.designation)}
              company={t(item.company)}
              image={item.image}
              ofLabel={t(UI.feedbacks.of)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
