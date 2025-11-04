import React from "react";
import styles from "./styles.module.css";
import Title from "@/Common/Title";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/Common/Button";

const ProgramHightlights = ({ data }) => {
  const handleScrollToEvents = () => {
    const workshopSection = document.getElementById("workshop");
    if (workshopSection) {
      workshopSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className={`${styles.container} container-md`} id="pghighlight">
      <div className={styles.header}>
        <div className={styles.title}>
          <DynamicIcon name="lightbulb" color="#fff" size={40} />
          <h3>Programme Highlights</h3>
        </div>
        <div className={`${styles.date} py-3 px-4`}>
          <h6>Jan 9-12, 2026</h6>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <DynamicIcon name="calendar" color="#fff" size={35} />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contentHeader}>
              <div className={styles.tag}>DAY 1</div>
              <div className={styles.contentTitle}>Jan 9 - Main Conclave</div>
            </div>
            <div className={styles.contentDetails}>
              <p>
                Full day event focusing on four levels of Ophthalmic Practices
              </p>
              <ul className={styles.listContainer}>
                <li>The Startup Practice</li>
                <li>The Sustained Practice</li>
                <li>The Scale-up Practice</li>
                <li>The Succession Practice</li>
              </ul>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.footerContent}>
              "30+ Expert Speakers will participate in panel discussions, key
              note talks, and fire side chats to give you an insight into
              Ophthalmic Practice."
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <DynamicIcon name="users" color="#fff" size={35} />
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.contentHeader}>
              <div className={styles.tag}>DAY 2</div>
              <div className={styles.contentTitle}>
                Jan 10-12 - Interactive Sessions
              </div>
            </div>
            <div className={styles.contentDetails}>
              <p>
                Workshops & Round Table Sessions on various topics related to
                Ophthalmic Practice Management
              </p>
              <div className={styles.eventContainer}>
                <div className={styles.workshops}>
                  <h6>Workshops</h6>
                  <ul className={styles.listDetails}>
                    <li>6 Major Hands-on Workshops</li>
                    <li>3 Hours Each Session</li>
                    <li>Practical & Implementation Focused</li>
                  </ul>
                </div>
                <div className={styles.roundtables}>
                  <h6>Round Tables</h6>
                  <ul className={styles.listDetails}>
                    <li>6 Collaborative Discussion Sessions</li>
                    <li>1.5 Hours Each Session</li>
                    <li>Strategy & Best Practices Sharing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.buttonContainer}>
              <Button
                handleTogglecontactForm={handleScrollToEvents}
                title="View Details"
                bgcolor={"#00a0e3"}
                colors={"#fff"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramHightlights;
