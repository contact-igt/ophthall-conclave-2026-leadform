import Title from "@/Common/Title";
import styles from "./styles.module.css";

const AssociatePartner = ({ partnerlist, sponserlist }) => {
  return (
    <section className={styles.partner}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <Title title={"Associate Partners"} />
            <div className="d-flex justify-content-center flex-wrap align-items-center gap-5 mt-md-5 mt-4  ">
              {partnerlist?.map((data, i) => (
                <div className={`${styles.partnerimg} text-center`}>
                  <img src={data?.image} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-xl-6 mt-5 pt-2 pt-lg-5 pt-xl-0 mt-xl-0">
            <Title title={"Associate Sponsers"} />
            <div className="d-flex justify-content-center flex-wrap align-items-center gap-5 mt-md-5 mt-4 ">
              {sponserlist?.map((data, i) => (
                <div className={`${styles.partnerimg} text-center`}>
                  <img src={data?.image} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssociatePartner;
