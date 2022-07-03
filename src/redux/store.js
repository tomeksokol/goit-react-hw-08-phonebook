import { configureStore } from "@reduxjs/toolkit";
import { phonebookApi } from "../utils/api";
import { filterReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
});