"use client";
import React from "react";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import CountUp from "react-countup";
import Title from "@/Common/Title";

const AboutOphthall = ({ data, title, description }) => {
  return (
    <section className={`${styles.container} container-fluid`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className={`${styles.aboutContent}`}>
              <Title title={`About ${title} `} />
              <div className={styles.contentContainer}>
                {description && (
                  <div
                    className={styles.overview}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-md-5 mt-3 mt-lg-0">
            <div className={styles.cardsection}>
              {data?.eventHighlights?.map((data, i) => (
                <div
                  className={`${
                    data?.id % 2 == "0" ? styles.eventcard : styles.eventcard2
                  } d-flex align-items-center justify-content-between my-xl-3 my-4`}
                >
                  <div className={`${styles.eventinfo}`}>
                    <h3>
                      <CountUp start={0} end={data?.value} duration={5} />{data?.span}
                    </h3>
                    <p>{data?.label}</p>
                  </div>

                  <DynamicIcon name={data?.icon} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutCards}>
          {data?.cardList?.map((item) => (
            <div className={styles.cardContent}>
              <img src={item.image} className={styles.cardImage} alt="" />
              <div className={styles.overlay}></div>
              <p className={styles.description}>{item?.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
};

export default AboutOphthall;
