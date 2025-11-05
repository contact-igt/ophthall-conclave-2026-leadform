import { HomeSticky } from "@/Common/homeSticky";
import { MetaTitle } from "@/Common/MetaTitle";
import AboutOphthall from "@/Component/Conference/AboutOphthall";
import AssociatePartner from "@/Component/Conference/AssociatePartner";
import ConferenceBanner from "@/Component/Conference/ConferenceBanner";
import ConferenceDetails from "@/Component/Conference/ConferenceDetails";
import ConferenceTestimonial from "@/Component/Conference/ConferenceTestimonial";
import ForWhom from "@/Component/Conference/ForWhom";
import HandsOnWorkshops from "@/Component/Conference/HandsOnWorkshops";
import Includes from "@/Component/Conference/Includes";
import JoinOphthall from "@/Component/Conference/JoinOphthall";
import OrganizingChairman from "@/Component/Conference/OrganizingChairman";
import RoundtableSessions from "@/Component/Conference/RoundtableSessions";
import VenueDetails from "@/Component/Conference/VenueDetails";
import WhatYouLearn from "@/Component/Conference/WhatYouLearn";
import ProgramHightlights from "@/Component/Conference/ProgramHighlights";
import { conferenceData } from "@/Constant/Conference/constant";
import { useConferenceQuery } from "@/hooks/useConferenceQuery";
import { useEffect, useState } from "react";
import { clearAuthData, closePopup } from "@/redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Speakers from "@/Component/Conference/speakers";
import Gallery from "@/Component/Conference/Gallery";
import { Popup } from "@/Common/Popup";
import WelcomeCard from "@/Common/WelcomeCard";
import { useGetAllEventByConfernceIdQuery } from "@/hooks/useEventQuery";
import { useGetAllSpeakerByConfernceIdQuery } from "@/hooks/useSpeakerQuery";
import OpticalExpo from "@/Component/Conference/OpticalExpo";
import Form from "@/Common/Form";
const ConferencePageComponent = ({handleTogglecontactForm}) => {
  const dispatch = useDispatch();
  const [session, setsession] = useState();
  const [speakerList, setspeakerList] = useState();
  const [showSticky, setShowSticky] = useState(false);
  const { data: conference } = useConferenceQuery();
  const { mutate: eventMutate } = useGetAllEventByConfernceIdQuery();
  const { mutate: speakerMutate } = useGetAllSpeakerByConfernceIdQuery();

  const data_workshops = session
    ? session.filter((item) => item.event_type == "workshop")
    : [];
  const data_roundTables = session
    ? session.filter((item) => item.event_type == "roundtable")
    : [];

  const closeModal = () => {
    dispatch(closePopup());
  };
  useEffect(() => {
    if (conference?.id) {
      eventMutate(
        { value: conference?.id },
        {
          onSuccess: (data) => {
            setsession(data?.data);
          },
        }
      );

      speakerMutate(
        { value: conference?.id },
        {
          onSuccess: (data) => {
            setspeakerList(data?.data);
          },
        }
      );
    }
  }, [conference?.id]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    dispatch(clearAuthData());
  }, [dispatch]);

  return (
    <>
      <MetaTitle
        title={conference?.title}
        description={conference?.description}
        keywords={conference?.description}
      />
      <ConferenceBanner
        data={conferenceData?.banner}
        sperakerLength={speakerList?.length}
        handleTogglecontactForm={handleTogglecontactForm}
      />
      <AssociatePartner data={conferenceData?.participants} />
      <AboutOphthall
        data={conferenceData?.aboutOphthall}
        title={conference?.title}
        overview={conference?.overview}
        description={conference?.description}
      />

      <ProgramHightlights />
      <Gallery />

      <Includes />

      <ConferenceDetails data={conferenceData?.conferenceDetails} handleTogglecontactForm={handleTogglecontactForm} />

      {data_workshops?.length > 0 ? (
        <HandsOnWorkshops workshopsData={data_workshops} />
      ) : (
        ""
      )}
      {data_roundTables?.length > 0 ? (
        <RoundtableSessions roundtableData={data_roundTables} />
      ) : (
        ""
      )}
      <OpticalExpo handleTogglecontactForm={handleTogglecontactForm} />
      <ForWhom data={conferenceData?.forwhom} />

      {speakerList?.length > 0 && <Speakers data={speakerList} />}

      <WhatYouLearn data={conferenceData?.WhatYouLearn} />

      <ConferenceTestimonial data={conferenceData?.conferenceTestimonial} />

      <VenueDetails data={conferenceData?.venueDetails} />
      <OrganizingChairman data={conferenceData?.organizingChairman} />

      <JoinOphthall
        data={conferenceData?.joinOphthall}
        title={conference?.title}
        handleTogglecontactForm={handleTogglecontactForm}
      />

      {/* <Popup open={isModalOpen} onClose={closeModal}>
        <WelcomeCard closeModal={closeModal} />
      </Popup> */}
      {showSticky && <HomeSticky handleTogglecontactForm={handleTogglecontactForm}  />}
    </>
  );
};

export default ConferencePageComponent;
