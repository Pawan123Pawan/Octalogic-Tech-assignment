import { createSlice } from '@reduxjs/toolkit';
import courses from '../../data/courseData.json';

const initialState = courses;

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    updateCourse: (state, action) => {
      const index = state.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    addCourse: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { updateCourse, addCourse } = courseSlice.actions;

export default courseSlice.reducer;
