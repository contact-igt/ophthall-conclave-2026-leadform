import React from "react";
import styles from "./styles.module.css";
import { setActiveStepNumber } from "@/redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";

const JoinOphthall = ({ data, title, handleTogglecontactForm }) => {
  const dispatch = useDispatch();

  return (
    <section className={`${styles.container} container-fluid`}>
      <div className={`${styles.contentContainer} container`}>
        <h2 className={styles.title}>
          {data?.title} {title || "Conference"}
        </h2>
        <div
          className={`d-flex flex-column align-items-center justify-content-center gap-4 mt-4`}
        >
          <div className={`text-end ${styles.content}`}>
            <p className={styles.description1}>{data?.description}</p>
          </div>
          <div className={`${styles.buttonGroup} d-flex gap-3`}>
            <button
              onClick={() => {
                handleTogglecontactForm();
                localStorage.removeItem("agenda_url");
              }}
              className={`btn fw-bold bg-black text-white ${styles.button}`}
            >
              {data?.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOphthall;
