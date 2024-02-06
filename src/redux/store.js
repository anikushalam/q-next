import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { qvipleApi } from "@/utils/qvipleApi";

export const store = configureStore({
  reducer: {
    [qvipleApi.reducerPath]: qvipleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(qvipleApi.middleware),
});

setupListeners(store.dispatch);
