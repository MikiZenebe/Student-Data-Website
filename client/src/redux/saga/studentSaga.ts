import { call, Effect, put, select, takeLatest } from "redux-saga/effects";
import {
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
} from "../reducer/studentReducer";
import { addStudentsUrl, studentUrl } from "../../api/index";
import axios from "axios";
import { Student } from "../../types/StudentType";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

function* fetchStudents(): Generator<Effect, void, never> {
  try {
    const state: RootState = yield select();
    const { course } = state.students.filters;
    const { currentPage } = state.students.pagination;

    const response: any = yield call(axios.get, studentUrl, {
      params: {
        course,
        page: currentPage,
      },
    });

    yield put(
      getStudentsSuccess({
        students: response.data.students,
        totalPages: response.data.totalPages,
        totalStudents: response.data.totalStudents,
        currentPage: response.data.currentPage,
      })
    );
  } catch (error) {
    yield put(getStudentsFailure((error as Error).message));
  }
}
function* addStudents(
  action: PayloadAction<Student>
): Generator<Effect, void, never> {
  try {
    const res: any = yield call(axios.post, addStudentsUrl, action.payload);
    yield put(addStudentsSuccess(res.data));
  } catch (error) {
    yield put(addStudentsFailure((error as Error).message));
  }
}

function* filterStudent(): Generator<Effect, void, any> {
  try {
    const { course } = yield select(
      (state: RootState) => state.students.filters
    );
    const query = new URLSearchParams();

    if (course) query.append("course", course);

    const res: any = yield call(axios.get, `${studentUrl}?${query.toString()}`);
    yield put(filterStudentSuccess(res.data));
  } catch (error) {
    yield put(filterStudentFailure((error as Error).message));
  }
}

function* fetchCourseSaga(): Generator<Effect, void, never> {
  try {
    const response: any = yield call(axios.get, `${studentUrl}/course`);
    yield put(setCourse(response.data));
  } catch (error) {
    console.error("Failed to fetch courses", error);
  }
}

function* studentSaga(): Generator<Effect, void, unknown> {
  yield takeLatest(getStudentsFetch.type, fetchStudents);
  yield takeLatest(setFilters.type, fetchStudents);
  yield takeLatest(setPage.type, fetchStudents);
  yield takeLatest(addStudentsStart.type, addStudents);
  yield takeLatest(filterStudentStart.type, filterStudent);
  yield takeLatest("FETCH_COURSE", fetchCourseSaga);
}

export default studentSaga;
