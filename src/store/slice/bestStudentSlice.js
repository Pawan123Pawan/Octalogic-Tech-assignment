import { createSlice } from "@reduxjs/toolkit";
import bestStudent  from '../../data/bestStudent.json'

const initialState = bestStudent;

const bestStudentSlice = createSlice({
  name: "beststudent",
  initialState,
  reducers: {
    // updateCourse: (state, action) => {
    //   const index = state.findIndex(course => course.id === action.payload.id);
    //   if (index !== -1) {
    //     state[index] = action.payload;
    //   }
    // },
    addCourse: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const {addStudentData } = bestStudentSlice.actions;

export default bestStudentSlice.reducer;
