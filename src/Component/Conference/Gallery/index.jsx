import Title from "@/Common/Title";
import styles from "./styles.module.css";
import Slider from "react-slick";

const Gallery = () => {
  const slider1 = [
    {
      id: 1,
      img: "/assets/Conference/experts.webp",
    },
    {
      id: 2,
      img: "/assets/Conference/expo.webp",
    },
    {
      id: 3,
      img: "/assets/Conference/expo2.webp",
    },
    {
      id: 4,
      img: "/assets/Conference/paneldiscussion.webp",
    },
    {
      id: 5,
      img: "/assets/Conference/unconference.webp",
    },
  ];

  const slider2 = [
    {
      id: 1,
      img: "/assets/Conference/networking.webp",
    },
    {
      id: 2,
      img: "/assets/Conference/networking1.webp",
    },
    {
      id: 3,
      img: "/assets/Conference/firesidechat.webp",
    },
    {
      id: 4,
      img: "/assets/Conference/forWhom.webp",
    },
    {
      id: 5,
      img: "/assets/Conference/workshop.webp",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
    ],
  };

  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    ltr: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
    ],
  };

  return (
    <section className={styles.gallerySection}>
      <div className="container-lg">
        <div className={styles.testimonal}>
          <Title title={"Moments from Our Conference"} />

          <div className="mt-5">
            <Slider className={styles.slick} {...settings}>
              {slider1?.map((data, i) => (
                <div className={styles.sliderImg}>
                  <img src={data?.img} className="img-fluid" />
                </div>
              ))}
            </Slider>

            <Slider className={styles.slick} {...settings2}>
              {slider2?.map((data, i) => (
                <div className={styles.sliderImg}>
                  <img src={data?.img} className="img-fluid" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
