import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import studentReducer from "./reducer/studentReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    students: studentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export default store;
