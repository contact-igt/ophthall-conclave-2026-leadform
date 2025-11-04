import styles from "./styles.module.css";
import Image from "next/image";
import { DynamicIcon } from "lucide-react/dynamic";
import Button from "@/Common/Button";

const Thankyou = () => {

  return (
    <section
      className={`${styles.container} d-flex justify-content-center align-items-center flex-column`}
    >
      <Image
        src="/assets/success.png"
        alt="Registration successful"
        width={96}
        height={96}
        className={styles.image}
      />

      <h1 className={`${styles.title} mt-3 fw-bold`}>Thank you for registering for the Ophthall Conclave 2026</h1>
      <p className={styles.subtitle}>
        Welcome to <strong>Ophthall Conclave 2026</strong>! Your
        registration details have been sent to your registered email. Please
        check your inbox (and spam/junk) for confirmation.
      </p>

      <div className={`${styles.panels} mt-4`}>
        <div className={`${styles.panel} ${styles.panelAlt}`}>
          <h4 className={styles.panelTitle}>Contact & Support</h4>
          <div className={styles.actions}>
            <Button
              title={"Contact Us"}
              iconname={"phone"}
              bgcolor={"#00A0E3"}
              colors={"#fff"}
              link={"tel:+918754517944"}
            />
            <Button
              title={"Support"}
              iconname={"mail"}
              bgcolor={"#00A0E3"}
              colors={"#fff"}
              link={"mailto:info@ophthall.in"}
            />
          </div>
        </div>
                <div className={`${styles.panel} ${styles.panelAlt}`}>
          <h4 className={styles.panelTitle}>Connect With Us</h4>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/ophthall/" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Facebook">
              <DynamicIcon name="facebook" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dr-tamilarasan-senthil-b4b7b32/?originalSubdomain=in" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
              <DynamicIcon name="linkedin" size={20} />
            </a>
            {/* <a href="https://x.com/ophthall" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Twitter">
              <DynamicIcon name="twitter" size={20} />
            </a> */}
            <a href="https://www.instagram.com/senthilophthall" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Instagram">
              <DynamicIcon name="instagram" size={20} />
            </a>
            <a href="https://www.youtube.com/@senthil.ophthall" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="YouTube">
              <DynamicIcon name="youtube" size={20} />
            </a>
          </div>
        </div>
        <div className={`${styles.panel} ${styles.panelAlt}`}>
          <h4 className={styles.panelTitle}>Visit Our Website</h4>
          <div className={styles.actionsSingle}>
            <Button
              title={"Visit Website"}
              iconname={"arrow-right"}
              bgcolor={"#00A0E3"}
              colors={"#fff"}
              variant="secondary"
              link={"https://www.ophthall.in"}
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thankyou;