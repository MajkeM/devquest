import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cyber: 0,
  frontend: 0,
  backend: 0,
  it: 0,
  algorythms: 0,
};

const counterProgressXpToday = createSlice({
  name: "counterProgressXpToday",
  initialState,
  reducers: {
    increment: (state, action) => {
      state[action.payload.type] += action.payload.amount;
    },
    resetToday: (state) => {
      state.cyber = 0;
      state.frontend = 0;
      state.backend = 0;
      state.it = 0;
      state.algorythms = 0;
    },
  },
});

export const { increment, resetToday } = counterProgressXpToday.actions;
export default counterProgressXpToday.reducer; // <--- the important part
