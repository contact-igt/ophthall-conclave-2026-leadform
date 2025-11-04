import { DynamicIcon } from "lucide-react/dynamic";
import styles from "./style.module.css";
import Button from "../Button";

const RegistrationCard = ({ data, isSelected, onClick, selectable, workshops, roundtables }) => {
  return (
    <div
      className={styles.card}
      style={
        isSelected
          ? { backgroundColor: "#00a0e3", color: "#fff" }
          : { backgroundColor: "#fff", color: "#000" }
      }
    >
      {data?.recommended && (
        <div className={`position-absolute ${styles.recommendedBadge}`} style={{ backgroundColor: isSelected ? "#003a52" : "#56bfec" }}>
          {isSelected ? "Selected" : "Recommended"}
        </div>
      )}
      {/* <div
        className={styles.selectIndicator}
        style={{
          border: isSelected ? "6px solid #fff" : "2px solid #dcdfe4",
          backgroundColor: isSelected ? "#00a0e3" : "transparent",
          display: selectable ? "block" : "none",
        }}
      ></div> */}
      <div
        className={`${styles.cardHeader} d-flex align-items-start justify-content-start gap-2`}
      >
        <div
          className={styles.cardimg}
          style={
            isSelected
              ? { backgroundColor: "#ffffffff" }
              : { backgroundColor: "#c8eaf8" }
          }
        >
          <img src={data?.icon} className="img-fluid" />
        </div>
        <div className={styles.lifeMemberContent}>
          <h4>{data?.title}</h4>
          <p>{data?.description1}</p>
          <p>{data?.description2}</p>
        </div>
      </div>
      <div className={styles.price}>
        <p>
          <span className={styles.newPrice}>{data?.newPrice}</span>
          <span
            className={styles.oldPrice}
            style={{ color: isSelected ? "#F5F5F5" : "#6c757d" }}
          >
            {data?.oldPrice}
          </span>
          <span
            className={styles.gst}
            style={{ color: isSelected ? "#F5F5F5" : "#6c757d" }}
          >
            GST ( Included )
          </span>
        </p>
        {data?.discount && <p
          className={styles.discount}
          style={{ color: isSelected ? "#FFF8C6" : "green" }}
        >
          <span className={styles.discountIcon}>
            <DynamicIcon name="trending-down" size={18} />
          </span>
          {data?.discount}
        </p>}
      </div>
      <div className={styles.included}>
        <h6>{data?.includedTitle}</h6>
        <div className={`row ${styles.includedList}`}>
          {data?.includedList
            ? data?.includedList?.map((item, index) => (
              <>
                <p className="col-md-12 d-flex gap-2" key={index}>
                  {" "}
                  <span
                    className={styles.tick}
                    style={
                      isSelected
                        ? { backgroundColor: "#ffffffff", color: "#00a0e3" }
                        : { backgroundColor: "#00a0e3", color: "#fff" }
                    }
                  >
                    ✓
                  </span>
                  {item}
                </p>
              </>
            ))
            : ""}
          {data?.id == 2 && <><div className={styles.eventDetails}>
            <h6>Workshops</h6>
            <ul className={styles.eventList}>
              {
                workshops?.map((item) => (
                  <li className={isSelected ? styles.newmarker : ""}>{item?.title}</li>
                ))
              }
            </ul>
          </div>
            <div className={styles.eventDetails}><h6>Round Tables</h6>
              <ul className={styles.eventList}>
                {
                  roundtables?.map((item) => (
                    <li className={isSelected ? styles.newmarker : ""}>{item?.title}</li>
                  ))
                }
              </ul>
            </div></>}
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonContainer}>
          {isSelected ? (
            <button
              onClick={selectable ? onClick : undefined}
              className={`${styles.selectcard} ${styles.removebtn}`}
            >
              <DynamicIcon name="check-circle" size={20} />
              <span>Selected {data?.title?.includes("Standard") ? "Standard" : "All Access"}</span>
            </button>
          ) : (
            <button
              onClick={selectable ? onClick : undefined}
              className={`${styles.selectcard} ${styles.addbtn}`}
            >
              <DynamicIcon name="radio" size={20} />
              <span>Select {data?.title?.includes("Standard") ? "Standard" : "All Access"}</span>
            </button>
          )}
        </div>
      </div>
    </div >
  );
};

export default RegistrationCard;
