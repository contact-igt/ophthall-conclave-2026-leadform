import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { MoveLeft } from "lucide-react";

const NotFoundPageComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <div className={styles.divider}></div>
                <div className={styles.messageContent}>
                    <h2 className={styles.title}>Page Not Found</h2>
                    <p className={styles.description}>
                        The page you are looking for might have been removed, had its name changed,
                        or is temporarily unavailable.
                    </p>
                    <Link href="/" className={styles.button}>
                        <MoveLeft size={20} />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPageComponent;
