import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { DynamicIcon } from "lucide-react/dynamic";
const ConferenceBanner = ({
  data,
  sperakerLength,
  handleTogglecontactForm,
}) => {
  const handleScrollToSpeaker = () => {
    const speakerSection = document.getElementById("speakers");
    if (speakerSection) {
      speakerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToVenue = () => {
    const venueSection = document.getElementById("venue");
    if (venueSection) {
      venueSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToProgrammHighlight = () => {
    const venueSection = document.getElementById("pghighlight");
    if (venueSection) {
      venueSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className={`${styles.container} container-fluid`}>
      <video className={styles.videoBackground} autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/ophthall/video/upload/v1756184541/Ophthall_Conference_wlojb7.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className={styles.bannerContent}>
        <div className={styles.content}>
          <p
            className={styles.date}
            onClick={() => {
              handleScrollToProgrammHighlight();
            }}
          >
            {data?.date}
          </p>
          <h4 className={styles.title}>{data?.title}</h4>
          <p className={styles.description1}>{data?.description}</p>

          <div className={styles.tagContainer}>
            <button
              onClick={() => {
                handleTogglecontactForm();
                localStorage.removeItem("agenda_url");
              }}
              style={{ backgroundColor: "#00a0e3" }}
              className={`btn fw-bold  text-white ${styles.button}`}
            >
              {data?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBanner;
