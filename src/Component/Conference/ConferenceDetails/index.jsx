import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/Common/Button";

const ConferenceDetails = ({ data }) => {
  return (
    <section className={styles.ConferenceDetailSection}>
      <div className="container">
        <Title title={"Conclave Overview"} />

        <div className={styles.overviewSection}>
          <div className={styles.overviewTitle}>
            <div className="d-flex align-items-md-start align-items-center  gap-4 ">
              <div className={styles.rocketimg}>
                <DynamicIcon name="rocket" size={40} />
              </div>
              <div className={styles.titleInfo}>
                <h4>{data?.title}</h4>
                <p>{data?.date}</p>
              </div>
            </div>
            <div className={styles.overviewSubtitle}>
              <h6>" {data?.tagline} "</h6>
            </div>
          </div>

          <div className={styles.overviewDescription}>
            <div className={styles.descinfo}>
              {/* <h6>{data?.price}</h6> */}
              <p>{data?.description}</p>
              <p>{data?.highlight}</p>
            </div>

            <div className="row">
              {data?.sessions?.map((card, i) => (
                <div className="col-lg-6 my-3">
                  <div
                    className={`d-flex align-items-center gap-3 ${styles.pointCard}`}
                  >
                    <div className={styles.iconCard}>
                      <DynamicIcon name={card?.icon} size={30} />
                    </div>
                    <div className={styles.iconinfo}>
                      <h6>{card?.title}</h6>
                      <p>{card?.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${styles.overviewBtn} d-flex  justify-content-center gap-2 gap-md-4 mt-lg-5 mt-3`}
        >
          <Button
            title={"Download Agenda"}
            bgcolor={"#002f42"}
            colors={"#fff"}
            iconname={"download"}
            url={
              "/document/Ophthall 2026 Practice Development Program Agenda (1).pdf"
            }
          />
          <Button
            title={"Register Now"}
            bgcolor={"#00a0e3"}
            colors={"#fff"}
            link={"/register"}
          />
        </div>
      </div>
    </section>
  );
};
export default ConferenceDetails;
