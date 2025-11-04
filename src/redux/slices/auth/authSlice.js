import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conference: {
    conference_amount_type: null,
    conference_amount: null,
    selectedRegistration: {},
  },
  events: null,
  userdetails: null,
  activeStepNumber: 1,
  conferenceDetails: {},
  isOpen:false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.conference = {
        ...state.conference,
        ...action.payload.conference,
      };
      if (action.payload.events !== undefined) {
        state.events = action.payload.events;
      }

      if (action.payload.userdetails !== undefined) {
        state.userdetails = action.payload.userdetails;
      }
    },

    setActiveStepNumber: (state, action) => {
      state.activeStepNumber = action.payload;
    },
    setConferenceDetails: (state, action) => {
      state.conferenceDetails = action.payload;
    },
     openPopup: (state) => {
      state.isOpen = true;
    },
    closePopup: (state) => {
      state.isOpen = false;
    },
    clearEvents: (state) => {
      state.events = initialState?.events;
    },
    clearAuthData: (state) => {
      state.conference = initialState?.conference;
      state.events = initialState?.events;
      state.userdetails = initialState?.userdetails;
      state.activeStepNumber = initialState?.activeStepNumber;
    },
  },
});

export const {
  setAuthData,
  clearAuthData,
  setActiveStepNumber,
  clearEvents,
  setConferenceDetails,
  openPopup,
  closePopup
} = authSlice.actions;
export default authSlice.reducer;
