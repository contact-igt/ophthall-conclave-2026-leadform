import { EnquiryApis } from "@/service/enquiry";
import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";

const enquiryApiData = new EnquiryApis();

export const useConferenceCreateEnquiryQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ values }) => {
      return await enquiryApiData.createEnquiry(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["conference-enquiry"]);
      },
      onError: () => {},
    }
  );
};

export const useConferenceUpdateEnquiryQuery = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async ({ values }) => {
      return await enquiryApiData.updateEnquiry(values);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["conference-enquiry"]);
      },
      onError: () => {},
    }
  );
};
