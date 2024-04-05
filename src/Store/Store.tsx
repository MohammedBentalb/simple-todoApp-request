import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './Slices/TaskSlice';

export const Store = configureStore({
  reducer: {
    taskManager: taskReducer,
  },
});

export type RootType = ReturnType<typeof Store.getState>;
export type DispatchType = typeof Store.dispatch;
