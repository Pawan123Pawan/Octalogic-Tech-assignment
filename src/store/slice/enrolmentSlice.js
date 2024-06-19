import { createSlice } from "@reduxjs/toolkit";
import enrolmentData from "../../data/enrolmentData.json";

const initialState = enrolmentData;

const enrolmentSlice = createSlice({
  name: "enrolment",
  initialState,
  reducers: {
    addEnrolment: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEnrolment } = enrolmentSlice.actions;

export default enrolmentSlice.reducer;
