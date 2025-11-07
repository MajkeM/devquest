import { configureStore } from "@reduxjs/toolkit";
import counterXpLevelSliceReducer from "./features/counterXpLevelSlice";
import counterStreakSliceReducer from "./features/counterStreakSlice";
import counterProgressXpReducerOverall from "./features/counterProgressXpOverall";
import coursesReducer from './features/coursesSlice';

export const store = configureStore({
  reducer: {
    counterXpLevel: counterXpLevelSliceReducer,
    counterStreak: counterStreakSliceReducer,
    counterProgressXpOverall: counterProgressXpReducerOverall,
    counterProgressXpToday: counterProgressXpReducerOverall,
    counterProgressXpThisWeek: counterProgressXpReducerOverall,
    courses: coursesReducer,
  },
});
