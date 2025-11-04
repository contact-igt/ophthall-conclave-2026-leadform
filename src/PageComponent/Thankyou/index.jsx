import { MetaTitle } from "@/Common/MetaTitle";
import Thankyou from "@/Component/Thankyou";
import { useAuth } from "@/redux/selectors/auth/authSelector";
import dayjs from "dayjs";

const ThankyouPageComponent = () => {
    const { conferenceDetails } = useAuth();
    const startDate = conferenceDetails?.start_date
        ? dayjs(conferenceDetails.start_date).format("DD MMM, YYYY")
        : "";
    const endDate = conferenceDetails?.end_date
        ? dayjs(conferenceDetails.end_date).format("DD MMM, YYYY")
        : "";
    return (
        <>
            <MetaTitle
                title={`Thank You for Registering – ${conferenceDetails?.title}`}
                description={`Thank you for registering for ${conferenceDetails?.title} (${startDate} to ${endDate}). We are excited to have you join us and look forward to your participation!`}
            />
            <div className="p-0 position-relative">
                <Thankyou />
            </div>
        </>
    )
}

export default ThankyouPageComponent