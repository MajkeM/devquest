import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  courses: [
    {
      id: 'c1',
      title: 'Základy bezpečnosti',
      description: 'Krátký kurz o základech kybernetické bezpečnosti.',
      lecturer: 'Lektor 1',
      submissions: [],
    },
  ],
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: {
      reducer(state, action) {
        state.courses.push(action.payload);
      },
      prepare({ title, description, lecturer }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            lecturer: lecturer || 'Lektor',
            submissions: [],
          },
        };
      },
    },
    submitAssignment(state, action) {
      const { courseId, student, answers } = action.payload;
      const course = state.courses.find((c) => c.id === courseId);
      if (!course) return;
      // simple auto-grade: pokud odpověď není prázdná, dáme 80-100
      const len = (answers || '').trim().length;
      const grade = len === 0 ? 0 : len > 100 ? 100 : Math.min(60 + Math.floor(len / 2), 100);
      course.submissions.push({ id: nanoid(), student, answers, grade, submittedAt: Date.now() });
    },
  },
});

export const { addCourse, submitAssignment } = coursesSlice.actions;
export default coursesSlice.reducer;
