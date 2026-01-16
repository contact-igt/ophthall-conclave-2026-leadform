import { BadgeCheck, Trophy } from "lucide-react";
import { EventImages } from "../EventImage";
import { conferenceData } from "@/Constant/Conference/constant";
import styles from "./styles.module.css";

const ThankYouPopup = ({ closeModal }) => {
    const eventImagesData = {
        data: conferenceData.conferenceHighlights2026.conferenceHighlightsListSlider1,
        data_2: conferenceData.conferenceHighlights2026.conferenceHighlightsListSlider2,
    };

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={`text-center ${styles.iconContainer}`}>
                    <div className={styles.checkmarkCircle}>
                        <Trophy size={50} color="#fff" strokeWidth={1.5} />
                    </div>
                </div>
                <div className={`text-center ${styles.messageContainer}`}>
                    <h2 className={styles.title}>Thank You for Being a Part of Ophthall Conclave 2026</h2>
                    <p className={styles.message}>
                        We sincerely appreciate your interest and participation in <strong>Ophthall Conclave 2026</strong>.
                        <br />
                        <br />
                        We look forward to welcoming you at the next edition with
                        more insights, innovation, and collaboration.
                    </p>
                </div>
                <div className={styles.imagesContainer}>
                    <EventImages Event={eventImagesData} />
                </div>
            </div>
        </div>
    );
};

export default ThankYouPopup;
