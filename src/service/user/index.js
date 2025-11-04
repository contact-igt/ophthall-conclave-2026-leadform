import { _axios } from "@/helper/axios";

export class AuthApis {
  getConferenceMembershipVerification = async (data) => {
    return await _axios("post", `/conference-member-verify`, data);
  };

  getConferenceRegistrationStatus = async (data) => {
    return await _axios("post", `/conference-registered-verify`, data);
  };

  getNonMemberConferenceRegistrationStatus = async (data) => {
    return await _axios(
      "post",
      `/conference-nonmember-reigistered-verifiy`,
      data
    );
  };

  conferenceRegister = async (values) => {
    return await _axios("post", `/conference-register`, values);
  };
}
