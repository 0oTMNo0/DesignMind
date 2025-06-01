// src/store/store.ts (or app/store.ts)
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { appApi } from '@/services/app'; // (create this file in the next step)
import globalReducer from '@/store/slices/GlobalSlice';
export const store = configureStore({
  reducer: {
    global: globalReducer,
    [appApi.reducerPath]: appApi.reducer,
    // You can add other reducers here if needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

// Optional: enables refetchOnFocus/refetchOnReconnect features
setupListeners(store.dispatch);

// You will need these types for use throughout your app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
