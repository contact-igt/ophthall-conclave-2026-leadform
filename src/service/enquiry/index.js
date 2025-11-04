import { _axios } from "@/helper/axios";

export class EnquiryApis {
  createEnquiry = async (data) => {
    return await _axios("post", `/conference-enquiry`, data);
  };

  updateEnquiry = async (data) => {
    return await _axios("post", `/conference-update-enquiry`, data);
  };
}
