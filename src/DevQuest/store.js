import { configureStore } from "@reduxjs/toolkit";
import counterXpLevelSliceReducer from "./features/counterXpLevelSlice";

export const store = configureStore({
  reducer: {
    counterXpLevel: counterXpLevelSliceReducer,
  },
});
