import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  streak: 0,
};

const counterStreakSlice = createSlice({
  name: "counterStreak",
  initialState,
  reducers: {
    incrementStreak: (state) => {
      state.streak += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { incrementStreak, reset } = counterStreakSlice.actions;
export default counterStreakSlice.reducer; // <--- the important part
