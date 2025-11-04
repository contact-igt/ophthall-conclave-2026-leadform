"use client";
import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Speakers = ({ data }) => {
  return (
    <section id="speakers" className={styles.speakersec}>
      <div className="container">
        <Title title={"Our Speakers"} />

        <div className={styles.speakerList}>
          <div className={styles.speakerGrid}>
            {data?.map((item, i) => (
              <div className={styles.speakerCard} key={i}>
                <div className={styles.figureWrap}>
                  <img
                    src={item?.image}
                    className={`${styles.figureImage} img-fluid`}
                    alt={item?.name}
                  />
                </div>
                <div className={styles.infoPanel}>
                  <div className={styles.infoText}>
                    <h4>{item?.name}</h4>
                    <div className={styles.speakerDetails}>
                      {item?.designation && <h6>{item?.designation}</h6>}
                      {item?.organisation && <h6>{item?.organisation}</h6>}
                    </div>
                    {/* <div className={styles.socialLinks}>
                      {item?.instagram_link && (
                        <a href={item?.instagram_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="instagram" size={16} />
                        </a>
                      )}
                      {item?.facebook_link && (
                        <a href={item?.facebook_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="facebook" size={16} />
                        </a>
                      )}
                      {item?.linkedin_link && (
                        <a href={item?.linkedin_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="linkedin" size={16} />
                        </a>
                      )}
                      {item?.twitter_link && (
                        <a href={item?.twitter_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="twitter" size={16} />
                        </a>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
