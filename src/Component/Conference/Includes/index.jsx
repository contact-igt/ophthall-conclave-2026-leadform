"use client";
import React from 'react'
import styles from "./styles.module.css"
import { DynamicIcon } from 'lucide-react/dynamic';

const Includes = ({ data }) => {
    const conclaveDetails = [
        "Entry to Ophthall 2026 Main Conference (Jan 9)",
        "Delegate Kit, Lunch & Expo Access (Jan 10–12)",
        "Separate registration required for Workshops and Round Tables."
    ]
    return (
        <section className={`${styles.container} container-fluid`}>
            <h4 className={styles.title}>Conference Registration Includes</h4>
            <div className={styles.conclaveContent}>
                <div className={styles.includesDetails}>
                    {conclaveDetails?.map((item, index) => (
                        <div key={index} className={styles.includesContent}>
                            <div className={styles.icon}>
                                <DynamicIcon name='circle-check-big' color='#fff' size={28} />
                            </div>
                            <h6>{item}</h6>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Includes

