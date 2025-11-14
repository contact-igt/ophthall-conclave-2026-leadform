"use client";
import Title from "@/Common/Title";
import styles from "./styles.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const Speakers = ({ data }) => {
    const speakerList = [
    {
      id: 1,
      image: "assets/Conference/Dr. T. Senthil.png",
      name: "Senthil Tamilarasan",
      designation: "Founder",
      organisation: "Ophthall Practice Development",
    },
    {
      id: 2,
      image: "assets/Conference/Dr Debasis Bhattacharya.PNG",
      name: "Debasis Bhattacharya",
      designation: "Founder",
      organisation: "Disha Eye Hospitals Pvt. Ltd",
    },
    {
      id: 3,
      image: "assets/Conference/Dr Shridhar Thakur.jpg",
      name: "Shridhar Thakur",
      designation: "Founder & CEO",
      organisation: "Infigo Life Sciences, Mumbai",
    },
    {
      id: 4,
      image: "assets/Conference/Dharmendra-Satapathy.jpg",
      name: "Dharmendra Satapathy",
      designation: "Founder",
      organisation: "Next Level Education & Glosome Wealth X Pvt. Ltd",
    },
    {
      id: 5,
      image: "assets/Conference/Mr Vivek Shukla.jpg",
      name: "Vivek Shukla",
      designation: "Founder & Managing Partner",
      organisation: "Surge Growth Partners, Dubai, UAE",
    },
    {
      id: 6,
      image: "assets/Conference/Dr Saumil Sheth.png",
      name: "Saumil Sheth",
      designation: "Director",
      organisation: "Envision Eye Hospital, Mumbai",
    },
    {
      id: 7,
      image: "assets/Conference/Dr. (Major) Prashant Kumar Singh Chauhan.jpg",
      name: "Prashant Chauhan",
      designation: "Founder",
      organisation: "Purple Squirrel Strategists, Delhi",
    },
    {
      id: 8,
      image: "assets/Conference/Dr (Maj) Harikrishnan Vannadil.jpg",
      name: "(Maj) Hari Krishnan Vannadil",
      designation: "Founder",
      organisation: "Eyeris Eye Care",
    },
    {
      id: 9,
      image: "assets/Conference/Dr Abdullah Zahir.jpg",
      name: "Dr. Abdullah Zahir",
      designation: "Managing Director",
      organisation: "EyeCare Pvt. Ltd., Maldives",
    },
    {
      id: 10,
      image: "assets/Conference/Mr-S-Rajarajan.jpg",
      name: "Mr. Rajarajan",
      designation: "COO (Hospital)",
      organisation: "Alluri Sitarama Raju Education Society",
    },
    {
      id: 11,
      image: "assets/Conference/Mr. KrishnaKumar.jpg",
      name: "Mr. Krishna Kumar",
      designation: "COO",
      organisation: "RIO Children’s Hospital",
    },
    {
      id: 12,
      image: "assets/Conference/Mr. Pratik Malladi.jpg",
      name: "Mr. Pratik Malladi",
      designation: "Consultant",
      organisation: "Fund Raising & M&A",
    },
    {
      id: 13,
      image: "assets/Conference/Mr. Shourav Das.jpg",
      name: "Mr. Shourav Das",
      designation: "Practice Development",
      organisation: "Alcon",
    },
    {
      id: 14,
      image: "assets/Conference/Mr. Mohammed Ilias.jpg",
      name: "Mr. Mohammed Ilias",
      designation: "Founder",
      organisation: "BCC Health Care Branding",
    },
    {
      id: 15,
      image: "assets/Conference/Akhil.JPG",
      name: "Mr. Akhil Dave",
      designation: "Founder & Principal Consultant, Founder Chairman",
      organisation: "Trizone Healthcare Consultants LLP, AHMP India Foundation",
    },
  ]
  return (
    <section id="speakers" className={styles.speakersec}>
      <div className="container">
        <Title title={"Our Speakers"} />

        <div className={styles.speakerList}>
          <div className={styles.speakerGrid}>
            {speakerList?.map((item, i) => (
              <div className={styles.speakerCard} key={i}>
                <div className={styles.figureWrap}>
                  <img
                    src={item?.image}
                    className={`${styles.figureImage} img-fluid`}
                    alt={item?.name}
                  />
                </div>
                <div className={styles.infoPanel}>
                  <div className={styles.infoText}>
                    <h4>{item?.name}</h4>
                    <div className={styles.speakerDetails}>
                      {item?.designation && <h6>{item?.designation}</h6>}
                      {item?.organisation && <h6>{item?.organisation}</h6>}
                    </div>
                    {/* <div className={styles.socialLinks}>
                      {item?.instagram_link && (
                        <a href={item?.instagram_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="instagram" size={16} />
                        </a>
                      )}
                      {item?.facebook_link && (
                        <a href={item?.facebook_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="facebook" size={16} />
                        </a>
                      )}
                      {item?.linkedin_link && (
                        <a href={item?.linkedin_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="linkedin" size={16} />
                        </a>
                      )}
                      {item?.twitter_link && (
                        <a href={item?.twitter_link} target="_blank" rel="noopener noreferrer">
                          <DynamicIcon name="twitter" size={16} />
                        </a>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
