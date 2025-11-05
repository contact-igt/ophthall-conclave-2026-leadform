import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const HomeSticky = ({ handleTogglecontactForm }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.bottomfix} ${
          isVisible ? styles.visible : styles.hidden
        }`}
      >
        <div className="container">
          <div className="row gap-2 gap-md-0 py-2 py-md-3">
            <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start align-items-center d-block">
              <div className={styles.meuntitle}>
                <h5 className="mb-3 text-center">
                  <button
                    onClick={() => {
                      handleTogglecontactForm();
                      localStorage.removeItem("agenda_url");
                    }}
                  >
                    Early Bird Offer
                  </button>
                </h5>
                <h6>
                  ( Valid till Nov 15th, 2025 – Fees increase by 20% thereafter
                  )
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-4 d-flex align-items-md-center justify-content-md-end justify-content-center">
              <div
                className={`${styles.pricingContainer} d-flex justify-content-lg-end justify-content-center  align-items-center gap-2 gap-md-3 py-md-1 py-1`}
              >
                <div className={styles.pricebtn}>
                  <button
                    onClick={() => {
                      handleTogglecontactForm();
                      localStorage.removeItem("agenda_url");
                    }}
                    target="_blank"
                    className={`btn text-light ${styles.button}`}
                  >
                    {"Register Now"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
