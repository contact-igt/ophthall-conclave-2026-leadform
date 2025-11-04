import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./styles.module.css";
import Button from "../Button";

const WelcomeCard = ({ closeModal }) => {
  return (
    <div className={styles.card}>
      <div className={styles.registersuccess}>
        <div className={`text-center ${styles.successimg}`}>
          <img src="assets\resgister-success.png" className="img-fluid" />
        </div>
        <div className={`text-center py-3 ${styles.successmsg}`}>
          <h3>Welcome to Ophthall Conclave 2026</h3>
          <p>
            Thank you for registering for{" "}
            <strong>Ophthall Conclave 2026</strong>! <br />
            We’re delighted to have you join us. <br />
            Your <strong>registration details</strong> have been sent to your
            registered email address. Please take a moment to check your inbox
            (and your spam or junk folder just in case) to review the
            information.
          </p>
          <div className={styles.button}>
            <div className={styles.buttonContainer}>
              <Button
                title={"Contact Us"}
                iconname={"phone"}
                bgcolor={"#00A0E3"}
                colors={"#fff"}
                link={"tel:+918754517944"}
              ></Button>
              <Button
                title={"Support"}
                iconname={"mail"}
                bgcolor={"#00A0E3"}
                colors={"#fff"}
                link={"mailto:info@ophthall.in"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
