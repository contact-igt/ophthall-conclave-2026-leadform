import { useAuth } from "@/redux/selectors/auth/authSelector";
import { setConferenceDetails } from "@/redux/slices/auth/authSlice";
import { ConferenceApis } from "@/service/conference";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";

const conferenceApiData = new ConferenceApis();

export const useConferenceQuery = () => {
  const {conferenceDetails } = useAuth();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
 const { data: ConferencesAllData, isLoading } = useQuery(
    ["Conference"],
    () => conferenceApiData.getAllConferences(),
    { staleTime: 1000 * 60 * 3 } // 3 minutes cache
  );
  const conferenceData =
    ConferencesAllData?.data?.find(
      (conference) => conference.status === "ongoing"
    ) || null;
  useEffect(() => {
    if (conferenceData && conferenceData?.id !== conferenceDetails?.id) dispatch(setConferenceDetails(conferenceData));
  }, [conferenceData,conferenceDetails, dispatch]);
  return { data: conferenceData, isLoading };
};
