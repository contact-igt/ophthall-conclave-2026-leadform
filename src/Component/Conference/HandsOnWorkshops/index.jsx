import React from "react";
import styles from "./styles.module.css";
import EventCard from "@/Common/EventCard";
import Title from "@/Common/Title";

const HandsOnWorkshops = ({ data, workshopsData }) => {

  return (
    <section id="workshop" className={`${styles.container} container-fluid`}>
      <div className={`${styles.contentContainer} container-lg`}>
        <Title title={data?.title || "Hands On Workshops"} />
        <div className={styles.workshopContainer}>
          {workshopsData.map((workshop) => (
            <EventCard
              id={workshop?.id}
              type={workshop?.event_type}
              title={workshop?.title}
              // speaker={workshop?.coordinator_name}
              overview={workshop?.description}
              startdate={workshop?.start_date_time}
              enddate={workshop?.end_date_time}
              non_member_amount={workshop?.price}
              amount={workshop?.life_member_price}
              status={workshop?.status}
              // designation={workshop?.coordinator_designation}
              // speakerImage={workshop?.coordinator_image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandsOnWorkshops;
