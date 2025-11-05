import React from "react";
import styles from "./styles.module.css";
import Title from "@/Common/Title";
import { Users, Eye, Lightbulb, GraduationCap } from "lucide-react";
import Button from "@/Common/Button";
import { DynamicIcon } from "lucide-react/dynamic";
import { useRouter } from "next/router";

const OpticalExpo = ({ handleTogglecontactForm }) => {
  const router = useRouter();

  const handlebadgebtn = () => {
    const element = document.getElementById("freebadgebtn");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="venue" className={`${styles.mainContainer} container-fluid`}>
      <Title title={"India Ophthalmology Expo 2026"} />
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer} row`}>
          <div
            className={`${styles.contentSection} col-md-12 col-lg-6 d-flex align-items-center`}
          >
            <div className={styles.leftContent}>
              <div className={styles.contentWrapper}>
                <h1 className={styles.expoTitle}>
                  India Ophthalmology &amp; Optical Expo 2026
                </h1>
                <div className={styles.subtitleRow}>
                  <span className={styles.tagDate}>
                    <DynamicIcon name="calendar" size={16} /> January 10–12,
                    2026
                  </span>
                  <span className={styles.tagLocation}>
                    <DynamicIcon name="map-pin" size={16} /> CIDCO Exhibition
                    &amp; Convention Centre, Navi Mumbai
                  </span>
                </div>
                <p className={styles.leftDescription}>
                  Visitors can experience cutting edge Ophthalmic Technologies .
                  Explore latest Ophthalmic and Optical Instruments. Buy frames
                  and lenses from top suppliers . Attend Expert industry
                  sessions network with industry leaders and enjoy exclusive
                  group purchase offers
                </p>
                <p className={styles.leftDescription}></p>
                <div className={styles.highlightTags}>
                  <span className={styles.highlightTag}>
                    <span className={styles.tagIcon}>🔬</span>
                    Ophthalmic Instruments
                  </span>
                  <span className={styles.highlightTag}>
                    <span className={styles.tagIcon}>🎓</span>
                    Expert Sessions
                  </span>
                  <span className={styles.highlightTag}>
                    <span className={styles.tagIcon}>🤝</span>
                    Industry Leaders
                  </span>
                  <span className={styles.highlightTag}>
                    <span className={styles.tagIcon}>🎁</span>
                    Exclusive Offers
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.mapContainer} col-md-12 col-lg-6 mt-4 mt-md-0`}
          >
            <div className={styles.imageContainer}>
              <div
                className={styles.imageBadge}
                onClick={() => {
                  router.replace("https://ebadge.in/opthalmology");
                }}
              >
                <span className={styles.badgeIcon}>✦</span>
                <span>Ophthalmology Expo 2026</span>
              </div>
              <div className={styles.imageOverlay}></div>
              <img
                src="/assets/Conference/ophthalmologyExpo.png"
                alt="India Ophthalmology & Optical Expo 2026 banner"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <div
          className={`${styles.bdge} d-flex justify-content-center mt-4 `}
          onClick={() => {
            handlebadgebtn();
          }}
        >
          <h6 className={styles.triggerbadge}>
            Generate Your Free E Badge Now For Expo Entry
          </h6>
        </div>

        <div className={styles.stats}>
          <div className={styles.statsHeader}>
            <h2 className={styles.statsTitle}>Expo Highlights</h2>
            <p className={styles.statsSubtitle}>
              Join thousands of professionals at India's premier ophthalmology
              event
            </p>
          </div>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={`${styles.iconBadge} ${styles.iconBlue}`}>
                <Eye size={20} />
              </div>
              <div className={styles.statValue}>150+</div>
              <div className={styles.statLabel}>Exhibitors</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.iconBadge} ${styles.iconBlue}`}>
                <Users size={20} />
              </div>
              <div className={styles.statValue}>10,000+</div>
              <div className={styles.statLabel}>Visitors</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.iconBadge} ${styles.iconBlue}`}>
                <Lightbulb size={20} />
              </div>
              <div className={styles.statValue}>Live</div>
              <div className={styles.statLabel}>Product Demos</div>
            </div>

            <div className={styles.statCard}>
              <div className={`${styles.iconBadge} ${styles.iconBlue}`}>
                <GraduationCap size={20} />
              </div>
              <div className={styles.statValue}>Expert</div>
              <div className={styles.statLabel}>Industry Sessions</div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer} id="freebadgebtn">
          <Button
            title="Free E-badge"
            bgcolor="#00a0e3"
            colors="#ffffff"
            // link="https://ebadge.in/opthalmology"
            // target="_self"
            handleTogglecontactForm={handleTogglecontactForm}
          />
        </div>
      </div>
    </section>
  );
};

export default OpticalExpo;
