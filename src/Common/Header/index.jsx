import Image from "next/image";
import Button from "../Button";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveStepNumber } from "@/redux/slices/auth/authSlice";

const Header = ({ handleTogglecontactForm }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-md-between justify-content-center align-items-center py-3">
          <div
            className={`${styles.brandlogo} d-flex align-items-center gap-1`}
          >
            <Image
              width={175}
              height={60}
              src={
                "https://res.cloudinary.com/ophthall/image/upload/v1761373013/Ophthall_2026-removebg-preview_s2kmjd.png"
              }
              onClick={() => {
                router.replace("/");
              }}
              style={{ cursor: "pointer" }}
              className={styles.image}
            />
            <h3>X</h3>

            <Image
              width={70}
              height={70}
              src={"/assets/SkyRocket/participant15.jpg"}
              onClick={() => {
                router.replace("/");
              }}
              style={{ cursor: "pointer" }}
              className={styles.image}
            />
          </div>
          {router.pathname === "/thank-you" ? (
            <div className={`${styles.buttonGroup} d-none d-md-block`}>
              <Button
                disabled={true}
                title={"Registered"}
                colors={"#ffff"}
                bgcolor={"#00A0E3"}
              />
            </div>
          ) : (
            <div
              className={`${styles.buttonGroup} d-none d-md-block`}
              onClick={() => {
                dispatch(setActiveStepNumber(1));
              }}
            >
              <Button
                title={"Register Now"}
                colors={"#ffff"}
                bgcolor={"#00A0E3"}
                handleTogglecontactForm={handleTogglecontactForm}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
