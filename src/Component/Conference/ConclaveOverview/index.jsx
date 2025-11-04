"use client";
import React from 'react'
import styles from "./styles.module.css"

const ConclaveOverview = ({ data }) => {
    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>{data?.title}</h4>
            <div className={styles.conclaveContent}>
                <div className={styles.includesDetails}>
                    {data?.conclaveDetails?.map((item) => (
                        <div className={styles.includesContent}>
                            <h4>{item?.title}</h4>
                            <p className='fw-bold'>{`Price: ₹${item?.price}`}</p>
                            <h6 className={styles.includedTitle}>Included:</h6>
                            <div className={styles.includeContainer}>
                                {item?.included?.split("/r/n").map((include) => (
                                    <p className={styles.includeDescription}><span className={styles.tick}>✓</span><span className={styles.includeText}>{include}</span></p>
                                ))}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ConclaveOverview

