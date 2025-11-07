import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  level: 1,
  xp: 50,
};

const counterXpLevelSlice = createSlice({
  name: "counterXpLevel",
  initialState,
  reducers: {
    levelUp: (state) => {
      state.level += 1;
    },
    addXp: (state, xpAmount) => {
      state.xp += xpAmount.payload;
    },
    resetXp: (state) => {
      state.xp = 0;
    },
  },
});

export const { levelUp, addXp } = counterXpLevelSlice.actions;
export default counterXpLevelSlice.reducer; // <--- the important part
