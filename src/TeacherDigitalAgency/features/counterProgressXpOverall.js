import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cyber: 0,
  frontend: 0,
  backend: 0,
  it: 0,
  algorythms: 0,
};

const counterProgressXpOverall = createSlice({
  name: "counterProgressXpOverall",
  initialState,
  reducers: {
    increment: (state, action) => {
      state[action.payload.type] += action.payload.amount;
    },
  },
});

export const { increment } = counterProgressXpOverall.actions;
export default counterProgressXpOverall.reducer; // <--- the important part
