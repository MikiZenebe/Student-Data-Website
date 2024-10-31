import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Student } from "../../types/StudentType";

interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
  filters: {
    course: string;
  };
  courses: string[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalStudents: number;
  };
}

const initialState: StudentState = {
  students: [] as Student[],
  loading: false,
  error: null,
  filters: {
    course: "",
  },
  courses: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    totalStudents: 0,
  },
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    getStudentsFetch(state) {
      state.loading = true;
    },
    getStudentsSuccess(
      state,
      action: PayloadAction<{
        students: Student[];
        totalPages: number;
        totalStudents: number;
        currentPage: number;
      }>
    ) {
      state.students = action.payload.students;
      state.loading = false;
      state.pagination = {
        currentPage: action.payload.currentPage,
        totalStudents: action.payload.totalStudents,
        totalPages: action.payload.totalPages,
      };
    },
    getStudentsFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    addStudentsStart(state) {
      state.loading = true;
    },
    addStudentsSuccess(state, action: PayloadAction<Student>) {
      state.students.push(action.payload);
      state.loading = false;
    },
    addStudentsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },

    setFilters(state, action: PayloadAction<Partial<StudentState["filters"]>>) {
      state.filters = { ...state.filters, ...action.payload };
      state.pagination.currentPage = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.pagination.currentPage = action.payload;
    },

    filterStudentStart(state) {
      state.loading = true;
    },
    filterStudentSuccess(state, action: PayloadAction<Student[]>) {
      state.students = action.payload;
      state.loading = false;
    },
    filterStudentFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setCourse(state, action: PayloadAction<string[]>) {
      state.courses = action.payload;
    },
  },
});

export const {
  getStudentsFetch,
  getStudentsSuccess,
  getStudentsFailure,
  addStudentsStart,
  addStudentsSuccess,
  addStudentsFailure,
  setFilters,
  setPage,
  filterStudentStart,
  filterStudentSuccess,
  filterStudentFailure,
  setCourse,
} = studentSlice.actions;

export default studentSlice.reducer;
