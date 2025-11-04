import Image from "next/image";
import Button from "../Button";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setActiveStepNumber } from "@/redux/slices/auth/authSlice";

const Header = ({handleTogglecontactForm}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className={styles.brandlogo}>
            <Image
              width={175}
              height={60}
              src={"https://res.cloudinary.com/ophthall/image/upload/v1761373013/Ophthall_2026-removebg-preview_s2kmjd.png"}
              onClick={() => {
                router.replace("/");
              }}
              style={{cursor : "pointer"}}
              className={styles.image}
            />
          </div>
          <div
            className={styles.buttonGroup}
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
        </div>
      </div>
    </header>
  );
};

export default Header;
