import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { DynamicIcon } from "lucide-react/dynamic";
import Image from "next/image";
const ConferenceBanner = ({ data, sperakerLength }) => {
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
          <div className="d-flex justify-content-center gap-3 mt-xl-5 my-4">
            <div className={styles.main1}>
              <img
                src={"/assets/ophthall_white.png"}
                style={{ cursor: "pointer" }}
                alt="logo"
              />
            </div>

            <div className={styles.combo}></div>

            <div
              className={`${styles.main2} d-flex align-items-center gap- md-3 gap-2 `}
            >
              <img
                width={80}
                height={80}
                src={"/assets/SkyRocket/participant15.jpg"}
                style={{ cursor: "pointer", borderRadius: "100px" }}
                className={styles.image}
              />
              <div className={`${styles.partnername} text-center`}>
                <h5>All India</h5>
                <h5>Ophthalmological Society</h5>
                <p>FROM DARKNESS TO LIGHT</p>
              </div>
            </div>
          </div>

          <h4 className={styles.title}>{data?.title}</h4>

          <p className={styles.description}>{data?.collabrate}</p>

          <p className={styles.description1}>{data?.description}</p>

          <div className={styles.tagContainer}>
            <a href="/register">
              <button
                style={{ backgroundColor: "#00a0e3" }}
                className={`btn fw-bold  text-white ${styles.button}`}
              >
                {data?.buttonText}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceBanner;
